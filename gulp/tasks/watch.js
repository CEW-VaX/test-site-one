let gulp = require('gulp');
let watch = require('gulp-watch');
let browserSync = require('browser-sync').create();

gulp.task('watch', function() {

	browserSync.init({
		notify: false,
		tunnel: true,
		server: {
			baseDir: "app"
		}
	});

	watch('./app/index.html', function() {
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('cssInject');
	});
});

gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
}); // cssInject will run only once the ['styles'] task has run and completed