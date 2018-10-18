var gulp = require('gulp');
var sass = require('gulp-sass');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var runSequence = require('run-sequence');
var del = require('del');


gulp.task('sass', function () {
    console.log('Compiling CSS...')    
    return gulp.src('assets/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/css'))
});
  
gulp.task('watch', function () {
    gulp.watch('assets/scss/*.scss', ['sass']);
});

gulp.task('uglify', function () {
    return gulp.src('assets/css/*.css')
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('assets/css'))
});

gulp.task('clean', function () {
    console.log('Deleting CSS folder...')        
    return del.sync('assets/css');
});


// ***************** ALL TASKS ******************

gulp.task('build', function (callback) {
    runSequence('clean', 'sass', 'uglify', callback);
});

// ***************** ALL TASKS ******************



