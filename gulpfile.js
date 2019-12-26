var gulp = require('gulp');
var buffer = require('vinyl-buffer');
var clean = require('gulp-clean');
var imagemin = require('gulp-imagemin');
var merge = require('merge-stream');
var spritesmith = require('gulp.spritesmith');

// 删除之前的目录
gulp.task('clean', function() {
    // 允许目录不存在
    return gulp.src('dest', {allowEmpty: true})
    .pipe(clean());
});

// 生成雪碧图
gulp.task('sprite', function () {
    // 配置源文件与生成的css、雪碧图
    var spriteData = gulp.src('images/*.png').pipe(spritesmith({
        imgName: 'sprite.png', //支持扩展名.png/.jpg/.jpeg
        cssName: 'sprite.css', //支持扩展名.css/.sass/.scss/.less
        padding: 0, //间距,默认0
        algorithm: 'binary-tree' //排列方式,默认binary-tree.可选top-down(上到下)/left-right(左到右)/diagonal(左上到右下)/alt-diagonal(右上到左下)/binary-tree(左到右上到下)
    }));

    var imgStream = spriteData.img
        .pipe(buffer())
        .pipe(imagemin())
        .pipe(gulp.dest('dest/image/')); //图片路径

    var cssStream = spriteData.css
        .pipe(gulp.dest('dest/css/')); //css路径

    return merge(imgStream, cssStream);
});