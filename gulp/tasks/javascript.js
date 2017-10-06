import gulp from 'gulp';
import paths from '../config';
import ms from 'gulp-monkeyscript'
const msProject = ms.createProject('./monkeyscript.json');

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
	gulp.watch(['./src/stylus/**/*.styl'], ['stylus']);
	gulp.watch(['./src/pug/**/*.pug'], ['htmlBuild']);
	gulp.watch(paths.img_src, ['imagecopy']);
});
