var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');

gulp.task('minify-css', function() {
    return gulp.src('src/css/belliesapp.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('src/dist'));
});