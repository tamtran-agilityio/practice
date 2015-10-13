var gulp = require('gulp');
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

var config = {
	css: 'src/style/**/*.scss',
	cssOut: 'out/styles',

  image: 'src/images/**/*.*',
  imageOut: 'out/images',

  font: 'src/fonts/*.*',
  fontOut: 'out/fonts',

	html: 'src/jade/*.jade',
	htmlWatch: 'src/jade/**/*.jade',
	htmlOut: 'out',

	js: 'src/js/**/*.js',
	jsOut: 'out/js',
	jsOutLint: 'out/js/*.js',

	vendor: 'src/files/vendor/'
};

var jsLibraryConcatList = [
];
var jsCodeConcatList = [
  config.vendor + 'jquery/dist/jquery.js',
  config.vendor + 'jquery_lazyload/jquery.lazyload.js',
  config.vendor + 'picturefill/picturefill.js',
  config.vendor + 'retina.js/dist/retina.js',
  config.vendor + 'handlebars/handlebars.js',
  'src/js/main.js'
];

gulp.task('default', function() {
	gulp.start(
		'serve',
		'sass',
		'sass:watch',
    'assets',
    'assets:watch',
    'fonts',
		'jade',
    'concatJsCode',
    'concatJsLibrary',
		'jade:watch',
		'assets:watch'
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
  gulp.watch(['out/images/**/*.npg'], browserSync.reload);
	gulp.watch(['out/styles/*.css'], browserSync.reload);
});

// build sass code to css
gulp.task('sass', function() {
	gulp.src(config.css)
		.pipe(sass().on('error', sass.logError))
		.pipe(minifyCss({
			compatibility: 'ie8'
		}))
		.pipe(gulp.dest(config.cssOut));
});

// build sass combine compass code to css
gulp.task('sass', function() {
  gulp.src(config.css)
    .pipe(compass({
      config_file: './config.rb',
      css: 'out/styles/',
      sass: 'src/style/'
    }))
      // .pipe(minifyCss({
      // compatibility: 'ie8'
    // }))
    .pipe(gulp.dest('out/styles'));
});

gulp.task('sass:watch', function() {
  gulp.watch(config.css, ['sass']);
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

// concat build all js file
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
    //.pipe(uglify())
    .pipe(gulp.dest(config.jsOut))
    .on('error', gutil.log);
});

gulp.task('assets', function() {
  gulp.src(config.image)
    .pipe(gulp.dest(config.imageOut));
});

gulp.task('fonts', function() {
  gulp.src(config.font)
    .pipe(gulp.dest(config.fontOut));
});

gulp.task('jade:watch', function() {
	gulp.watch(config.htmlWatch, ['jade']);
});


gulp.task('assets:watch', function() {
	gulp.watch(config.js, ['assets', 'concatJsCode']);
});
