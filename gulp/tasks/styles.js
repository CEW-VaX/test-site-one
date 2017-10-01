let gulp = require('gulp');
let postcss = require('gulp-postcss');
let autoprefixer = require('autoprefixer');
let cssvars = require('postcss-simple-vars');
let cssnest = require('postcss-nested');
let cssImport = require('postcss-import');
let mixins = require('postcss-mixins');

gulp.task('styles', function() {
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, mixins, cssnest, cssvars, autoprefixer]))
		.on('error', function(errorInfo) {
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./app/temp/styles'));

}); // make gulp aware of when this completes with the return