### `npm install`
安装依赖

### `gulp sprite`
生成雪碧图

###配置

雪碧图支持扩展名
.png/.jpg/.jpeg

生成css支持扩展名
.css/.sass/.scss/.less

雪碧图各个图标间距：padding Number类型 默认0

雪碧图排列方式：algorithm String类型 默认'binary-tree' 
可选值：
top-down(上到下)
left-right(左到右)
diagonal(左上到右下)
alt-diagonal(右上到左下)
binary-tree(左到右上到下)