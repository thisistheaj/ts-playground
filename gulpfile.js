var gulp = require('gulp');
var child = require('child_process');

gulp.task('default', ['dev']);

gulp.task('ts-compile', function () {
    child.spawn('tsc', ['index.ts'], {stdio: 'inherit'})
});

gulp.task('js-run', function () {
    child.spawn('clear', {stdio: 'inherit'});
    child.spawn('node', ['index.js'], {stdio: 'inherit'})
});

gulp.task('dev', function () {
    gulp.watch('./index.ts', ['ts-compile']);
    gulp.watch('./index.js', ['js-run']);
});
	
