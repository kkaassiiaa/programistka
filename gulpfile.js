const gulp = require('gulp');
const cleanCss = require('gulp-clean-css'); // minimalizacja css
const sass = require('gulp-sass'); // przetważanie sass
const watch = require('gulp-watch'); // widoczne zmiany na żywo
const uglify = require('gulp-uglify'); // minimalizowanie js
const babel = require('gulp-babel'); // do zmiany ES5 na starszy js
const autoprefixer = require('gulp-autoprefixer'); // autoprefixy dla css


gulp.task('css', () => {
  return gulp.src('src/sass/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(autoprefixer({
      browsers: ['last 2 version'],
      cascade: false
    }))
    .pipe(cleanCss({comptaitility: 'ie8'}))
    .pipe(gulp.dest('public/css'));
});

gulp.task('watch:sass', () => {
  gulp.watch('src/sass/**/*.scss', gulp.series('css'));
});

gulp.task('jsMinify', () => {
  return gulp.src('src/js/app.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'));
});