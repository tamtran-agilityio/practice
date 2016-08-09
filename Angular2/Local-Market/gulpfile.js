const gulp = require('gulp');
const del = require('del');
const fs = require('fs');
const typescript = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const tslint = require('gulp-tslint');
const reload = browserSync.reload;
const inlineNg2Template = require('gulp-inline-ng2-template');

const paths = {
  dist: 'dist',
  distFiles: 'dist/**/*',
  distFilesStyles: 'bower_components/bootstrap/dist/**/*.*',
  distFilesStyles: 'bower_components/lodash/dist/*.*',
  srcStyles: 'src/**/*.scss',
  srcFiles: 'src/**/*',
  srcTsFiles: 'src/**/*.ts',
}

// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del(paths.distFiles);
});

gulp.task('styles', function () {
  return gulp.src(paths.srcStyles)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dist));
});

// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:assets', function() {
  return gulp.src([paths.srcFiles, paths.distFilesStyles, '!' + paths.srcTsFiles, '!' + paths.srcStyles])
    .pipe(gulp.dest(paths.dist))
});

// copy dependencies
gulp.task('copy:libs', function() {
  return gulp.src([
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/angular2/bundles/angular2.dev.js',
      'node_modules/angular2/bundles/http.dev.js',
      'node_modules/angular2/bundles/router.dev.js',
      'node_modules/angular2/bundles/router.js',
      'node_modules/angular2/src/facade/promise.js',
      'bower_components/jquery/dist/jquery.js',
      'bower_components/jquery-ui/jquery-ui.min.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/bootstrap/dist/css/bootstrap.css',
      'bower_components/lodash/dist/lodash.js'
    ])
    .pipe(gulp.dest('dist/lib'))
});

// TypeScript compile
gulp.task('compile', function () {
  // load the tsconfig each time as it changes!
  const tscConfig = JSON.parse(fs.readFileSync('./tsconfig.json', 'UTF8'));
  return gulp
    .src(tscConfig.files)
    .pipe(inlineNg2Template({ base: '/src' }))
    .pipe(sourcemaps.init())
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dist + '/app'));
});

// linting
gulp.task('tslint', function(){
  return gulp.src(paths.srcTsFiles)
    .pipe(tslint())
    .pipe(tslint.report('verbose'));
});

// Run browsersync for development
gulp.task('serve', ['build'], function() {
  browserSync({
    server: {
      baseDir: paths.dist
    }
  });

  gulp.watch(paths.srcFiles, ['buildAndReload']);
});

gulp.task('build', ['compile', 'styles', 'copy:libs', 'copy:assets']);
gulp.task('buildAndReload', ['build'], reload);
gulp.task('default', ['build']);
