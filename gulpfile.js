/**
 * Created by donniem on 10/30/15.
 */
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var publisher = $.awspublish.create({
    params: {
        Bucket: "cameronanddonnie.com"
    }
});

gulp.task('publish', function(){
    return gulp
        .src(['./**/*.js',
            './**/*.html',
            './**/*.css',
            './**/*.jpg',
            '!./node_modules/**/*.*'])
        .pipe(publisher.publish())
        .pipe($.awspublish.reporter())
});

gulp.task('watch', function(event){
    console.log(event);
    gulp.watch('./*.*',['publish']);
});


