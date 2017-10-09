var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat-css'),
    cssmin = require('gulp-cssmin');

gulp.task('hello', function () {
  console.log('Hello Gulp');
});

gulp.task('sass', function () {
  gulp.src('app/sass/main.sass')
  .pipe(plumber())
  .pipe(sass())
  .pipe(autoprefixer(['last 15 versions']))
  .pipe(concat('concatAll.css'))
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({stream: true}))
});

gulp.task('concat', function () {
  return gulp.src('app/css/**/*.css')
  .pipe(concat("css/concat.css"))
  .pipe(gulp.dest('dist/'))
});

gulp.task('cssmin', function () {
  return gulp.src('app/css/**/*.css')
  .pipe(concat("css/concats.css"))
  .pipe(cssmin())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('dist/'))
});

gulp.task('liveReload', function () {
  browserSync({
    server:{
      baseDir: 'app'
    },
    notify: false
  })
});

gulp.task('watch', ['sass', 'concat', 'cssmin', 'liveReload'], function () {
  gulp.watch('app/sass/**/*.+(scss|sass)', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('dist/css/**/*.css', ['concat']);
  gulp.watch('app/css/**/*.css', ['cssmin']);
});
