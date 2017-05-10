var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('transSass',function(){
	gulp.src(['sass/*.scss'])
	.pipe(sass({outputStyle:'expanded'}).on('error',sass.logError))
	.pipe(gulp.dest('./css'))
});

gulp.task('jtSass',function(){
	gulp.watch('sass/*',['transSass'])
});

var browserSync =require('browser-sync');
gulp.task('server',function(){
	browserSync({
		file:['./index.html','./html/*.html'],
		proxy:'http://localhost/shasha/'
	});
});