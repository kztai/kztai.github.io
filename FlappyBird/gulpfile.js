var gulp = require('gulp');
//合并js文件
var	concat = require('gulp-concat');
 // js 压缩
var uglify = require('gulp-uglify');
// gulp版本定义
var rev = require('gulp-rev');
// html 压缩
var minifyHtml = require('gulp-minify-html');

gulp.task('concat', function() {
  gulp.src(['src/js/*.js']).pipe(concat('main.js')).pipe(uglify({
  	mangle: true  //混淆，压缩变量名
  })).pipe(rev()).pipe(gulp.dest('./jsmin'));
});

// html 压缩
gulp.task('html', function (e) {
  return gulp.src(['./src/**/*.html'])
    .pipe(minifyHtml({
      empty: true,
      spare: true
    }))
    .pipe(gulp.dest('./jsmin/')); //- 替换后的文件输出的目录
});
