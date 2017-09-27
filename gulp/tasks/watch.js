import gulp from 'gulp';
import browserSync from 'browser-sync';
import runSequence from 'run-sequence';
import paths      from '../config';

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

gulp.task('imagecopy', () => {
	return gulp.src(paths.img_src)
		.pipe(gulp.dest(paths.img_dist));
});

gulp.task('watch', () => {
	gulp.watch(['./src/js/**/*.js'], ['browserify']);
	gulp.watch(['./src/stylus/**/*.styl'], ['stylus']);
	gulp.watch(['./src/pug/**/*.pug'], ['htmlBuild']);
	gulp.watch(paths.img_src, ['imagecopy']);
});
