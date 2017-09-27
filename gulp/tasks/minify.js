import gulp       from 'gulp';
import imagemin   from 'gulp-imagemin';
import svgmin     from 'gulp-svgmin';
import pngquant   from 'imagemin-pngquant';
import uglify     from 'gulp-uglify';
import paths      from '../config';

gulp.task('imagemin', () => {
	return gulp.src(paths.img_src + '*.png')
		.pipe(imagemin(
			[pngquant({quality: '0-95', speed: 1})]
		))
		.pipe(imagemin())
		.pipe(gulp.dest(paths.img_build));
});

gulp.task('svgmin', () => {
	return gulp.src(paths.img_src + '*.svg')
		.pipe(svgmin())
		.pipe(gulp.dest(paths.img_build));
});

gulp.task('jsmin', () => {
	return gulp.src(paths.js_dist + 'app.js')
		.pipe(uglify())
		.pipe(gulp.dest(paths.js_build));
});
