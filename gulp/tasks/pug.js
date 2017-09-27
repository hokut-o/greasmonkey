import gulp        from 'gulp';
import pug         from 'gulp-pug';
import plumber     from 'gulp-plumber';
import paths       from '../config';

gulp.task('pug', function(){
	return gulp.src(paths.pug_src)
		.pipe(plumber())
		.on('error', function(err) {
			console.log(err.message);
			console.log(err.stack);
		})
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest(paths.dist));
});