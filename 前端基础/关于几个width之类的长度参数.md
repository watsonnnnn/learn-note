offsetTop offsetLeft:相对offsetParent的top和left，没有的话相对body

offsetWidth: width+padding+border

clientWidth: padding+width

clientTop: 元素内边距的外边缘到上边框外边缘的距离，也就是上border宽度

e.clientX e.clienY: 相对于浏览器可视区的光标位置

e.pageX e.pageY： 相对于页面最左上的光标位置

ele.getBoundingRect(): 返回一个DOMRect对象，其中包含8个属性
<pre>
{
  bottom: 元素下外边框到视口的垂直距离
  height: offsetHeight
  left: 元素左外边框到视口的垂直距离
  right: 元素右外边框到视口的垂直距离
  top: 元素上外边框到视口的垂直距离
  width: offsetWidth
  x: left
  y: top
}
</pre>

window.pageXOffset: document.documentElement.scrollLeft

window.pageYOffset: document.documentElement.scrollTop
