'use strict';
var base64 = require('gulp-base64');
var gulp = require('gulp');
// var px2rem = require('gulp-px2rem-plugin');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');

gulp.task('compile', function () {
	return gulp.src('./index.scss')
		.pipe(sass.sync())
		.pipe(autoprefixer({
			browsers: ['ie > 9', 'last 2 versions'],
			cascade: false
		}))
		.pipe(cssmin())
    .pipe(base64({ maxImageSize: 20 * 1024 }))
    .pipe(gulp.dest('../../lib/light'))
		// .pipe(px2rem({'width_design': 200, 'valid_num': 6, 'pieces': 10, 'ignore_px': [], 'ignore_selector': []}));
});

gulp.task('build', ['compile']);
