var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');

// Basic usage
gulp.task('browserify', function() {

  return gulp.src('public/main.jsx', {read: false})
    .pipe(browserify({
      transform : 'reactify',
      extensions: ['.jsx']
    }))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./public/compiled/'))
});

gulp.task('watch', function() {
  
  var jsFiles = [
    'public/**/*.js',
    'public/**/*.jsx',
    '!public/compiled/**/*.js'
  ];

  return gulp.watch(jsFiles, ['browserify']);

});
