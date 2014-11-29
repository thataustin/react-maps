var gulp = require('gulp');
var browserify = require('gulp-browserify');

// Basic usage
gulp.task('browserify', function() {

  return gulp.src('public/jsx/main.js')
    .pipe(browserify({
      transform : 'reactify'
    }))
    .pipe(gulp.dest('./public/compiled/'))
});

gulp.task('watch', function() {
  return gulp.watch(['public/**/*.js'], ['browserify']);
});
