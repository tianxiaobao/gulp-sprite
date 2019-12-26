### `npm install`
安装依赖

### `gulp sprite`
生成雪碧图

### `gulp clean`
删除雪碧图


**使用**
将图片放在images文件夹下，图片名将为最终的css类名
生成的雪碧图及样式在dest目录下

**雪碧图支持扩展名**
.png/.jpg/.jpeg

**生成css支持扩展名**
.css/.sass/.scss/.less

**雪碧图各个图标间距**
padding：Number类型，默认0

**雪碧图排列方式**
algorithm：String类型，默认'binary-tree'
可选值：
top-down(上到下)
left-right(左到右)
diagonal(左上到右下)
alt-diagonal(右上到左下)
binary-tree(左到右上到下)