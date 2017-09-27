import gulp        from 'gulp';
import imagemin    from 'gulp-imagemin';
import consolidate from 'gulp-consolidate';
import iconfont    from 'gulp-iconfont';
import rename      from 'gulp-rename';
import paths       from '../config';

const fontName = 'icon';

gulp.task('iconfont', () => {
	return gulp.src(paths.iconfont_src)
		.pipe(imagemin())
		.pipe(iconfont({
			fontName: fontName,
			formats: ['ttf', 'eot', 'woff'],
			normalize: true,
			fontHeight: 1001
		}))

		.on('glyphs', (glyphs) => {
			const options = {
				glyphs: glyphs.map((glyph) => {
					return {
						name: glyph.name,
						codepoint: glyph.unicode[0].charCodeAt(0).toString(16).toUpperCase()
					};
				}),
				fontName: fontName,
				fontPath: '../font/',
				className: 'c-icon--',
			};
			gulp.src(paths.iconfont_template_src + '*.css')
				.pipe(consolidate('lodash', options))
				.pipe(gulp.dest(paths.iconfont_template_dist))
				.pipe(rename({
					basename: 'iconfont',
					extname: '.styl'
				}))
				.pipe(gulp.dest(paths.iconfont_stylus_dist));

			gulp.src(paths.iconfont_template_src + '*.html')
				.pipe(consolidate('lodash', options))
				.pipe(gulp.dest(paths.iconfont_template_dist));
		})
		.pipe(gulp.dest(paths.iconfont_dist));
});