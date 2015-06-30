var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var compass = require('gulp-compass');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var jade = require('gulp-jade');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var minifyCss = require('gulp-minify-css');
var gulp = require('gulp');

var config = {
	css: 'src/style/**/*.scss',
	cssOut: 'out/styles',

	html: 'src/jade/*.jade',
	htmlWatch: 'src/jade/**/*.jade',
	htmlOut: 'out',

	js: 'src/js/**/*.js',
	jsOut: 'out/js',
	jsOutLint: 'out/js/*.js',

	assetImages: 'src/images/*.*',
	assetImagesOut: 'out/images',

	assetFont: 'src/fonts/roboto/*.*',
	assetFontOut: 'out/fonts',

	vender: 'src/files/vender/'
};

var jsLibraryConcatList = [
	config.vender + 'jquery/dist/jquery.js',
	config.vender + 'bootstrap-sass-official/assets/javascripts/bootstrap.js',
	config.vender + 'bower-skrollr/skrollr.js'
];
var jsCodeConcatList = [
	'src/js/main.js'
];

gulp.task('default', function() {
	gulp.start(
		'serve',
		'sass',
		'sass:watch',
		'jshint',
		'jade',
		'jade:watch',
		'assets',
		'assetsfont',
		'assets:watch',
		'concatJsLibrary',
		'concatJsCode'
	);
});

gulp.task('serve', [], function() {
	browserSync({
		notify: false,
		server: {
			baseDir: './out'
		},
		port: 9000
	});

	gulp.watch(['out/*.html'], browserSync.reload);
	gulp.watch(['out/js/*.js'], browserSync.reload);
	gulp.watch(['out/fonts/roboto/*.*'], browserSync.reload);
	gulp.watch(['out/styles/*.css'], browserSync.reload);
});

// build sass code to css
gulp.task('sass', function() {
	gulp.src(config.css)
		.pipe(sass().on('error', sass.logError))
		// .pipe(minifyCss({
		// 	compatibility: 'ie8'
		// }))
		.pipe(gulp.dest(config.cssOut));
});

gulp.task('compass', function() {
  gulp.src(config.css)
    .pipe(compass({
      sass: 'src/style/sass',
      require: ['susy', 'modular-scale']
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest(config.cssOut));
});

gulp.task('sass:watch', function() {
	gulp.watch(config.css, ['sass']);
});

// check syntax for js code
gulp.task('jshint', function() {
	return gulp.src(config.js)
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));
});

gulp.task('jshint:watch', function() {
	gulp.watch(config.js, ['jshint']);
});

// concat all js file to one file
gulp.task('concatJsLibrary', function() {
	return gulp.src(jsLibraryConcatList)
		.pipe(concat('library.js'))
		.pipe(uglify())
		.pipe(gulp.dest('out/js/'))
		.on('error', gutil.log);
});

gulp.task('concatJsCode', function() {
	return gulp.src(jsCodeConcatList)
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('out/js/'))
		.on('error', gutil.log);
});

// build jade code to html
gulp.task('jade', function() {
	var YOUR_LOCALS = {};

	gulp.src(config.html)
		.pipe(jade({
			locals: YOUR_LOCALS,
			pretty: true
		}))
		.pipe(gulp.dest(config.htmlOut));
});

gulp.task('jade:watch', function() {
	gulp.watch(config.htmlWatch, ['jade']);
});

// move static assets
gulp.task('assets', function() {
	gulp.src(config.assetImages)
		.pipe(gulp.dest(config.assetImagesOut));
});

gulp.task('assetsfont', function() {
	gulp.src(config.assetFont)
		.pipe(gulp.dest(config.assetFontOut));
});

gulp.task('assets:watch', function() {
	gulp.watch(config.js, ['assets', 'concatJsCode']);
});
