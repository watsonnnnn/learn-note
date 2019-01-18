http://caibaojian.com/canvas/

### beginPath

https://www.cnblogs.com/xuehaoyue/p/6549682.html

https://segmentfault.com/a/1190000010330319

绘制方法，stroke fill都会以上次beginPath后的所有路径为基础进行绘制。也就是说，如果之前stroke了一次red颜色，然后moveTo另一个位置，重新绘制一条子路径，再换个颜色，但是还是会将之前存在的路径重新画一次，因为子路径列表还存在。

beginPath表示清除之前已存在的子路径列表，也就是之后的绘制和之前不会影响。

首次创建context时，会自动调一次beginPath，所以第一次的可以省略。

closePath表示将路径闭合，也就是把终点和起点连线，基本和beginpath没啥关系。

moveTo表示将新的子路径的起点移到指定位置。

### arc

arc会自动将上一条的子路径终点和这条的起点连接起来（前提是不beginpath），如果是closePath了，那之前的起点即终点，就会从那个点开始连接到新的路径的起点。

使用arc()绘制图形时，如果没有设置moveTo()那么会从圆弧的开始的点（startRad处）作为起始点。如果设置了moveTo()，那么该点会连线到圆弧起始点。

如果使用stroke()方法，那么会从开始连线到圆弧的起始位置。 如果是 fill 方法, 会自动闭合路径填充。

https://www.w3cplus.com/canvas/drawing-arc-and-circle.html