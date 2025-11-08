var gulp    = require('gulp');
var uglify  = require('gulp-uglify');
var header  = require('gulp-header');
var rename  = require('gulp-rename');

var config = require('../config');

gulp.task('uglify', function() {
  return gulp.src(config.uglify.target)
    .pipe(uglify())
    .pipe(header(config.banner, {
      pkg: config.package,
      license: config.licenseForHeader,
    }))
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest(config.uglify.output));
});

