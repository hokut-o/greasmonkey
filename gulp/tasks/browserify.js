import gulp from 'gulp';
import browserify from 'browserify';
import browserSync from 'browser-sync';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import paths from '../config';

gulp.task('browserify', () => {
	return browserify(paths.js_src)
		.transform('babelify')
		.bundle()
		.on('error', function(err) {
			console.log(err.message);
			console.log(err.stack);
		})
		.pipe(source('app.js'))
		.pipe(gulp.dest(paths.js_dist))
		.pipe(browserSync.stream());
});