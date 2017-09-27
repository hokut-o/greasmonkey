import gulp from 'gulp';
import stylus from 'gulp-stylus';
import autoprefixer from 'gulp-autoprefixer';
import plumber from 'gulp-plumber';
import browserSync from 'browser-sync';
import sourcemaps from 'gulp-sourcemaps';
import paths from '../config';

gulp.task('stylus', () => {
	return gulp.src(paths.stylus_src)
		.pipe(sourcemaps.init())
		.pipe(plumber())
		.pipe(stylus({
				compress: true
			}
		))
		.pipe(autoprefixer({
				remove: false,
				"browsers": ["last 4 versions"]
		}))
		.on('error', function(err) {
			console.log(err.message);
			console.log(err.stack);
		})
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(paths.stylus_dist))
		.pipe(browserSync.stream());
});