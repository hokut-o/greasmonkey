import gulp from 'gulp';
import paths from '../config';

gulp.task('bs-reload', () => {
	browserSync.reload();
});

gulp.task('htmlBuild', (cb) => {
	return runSequence(
		'pug',
		'bs-reload',
		cb
	);
});


gulp.task('watch', () => {
	gulp.watch(['./src/js/**/*.js'], ['browserify']);
});
