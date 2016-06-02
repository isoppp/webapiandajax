var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-ruby-sass');

gulp.task('concat', function () {
  return gulp.src('./md_slide/*.md')
    .pipe(concat('concat.md'))
    .pipe(gulp.dest('./md_concat/'));
});

gulp.task('sass', function () {
  return sass('./scss/index.scss', {style: 'minify'})
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
  gulp.watch('./md_slide/*.md', ['concat']);
  gulp.watch('./scss/*.scss', ['sass']);
});
