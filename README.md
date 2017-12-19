# 一个动态色彩流动的登录页面
看了QQ 9.0 的登录页面，感觉还可以，自己也尝试去山寨一个~  

在线演示页面：[https://lucienyang.github.io/colorful-login-page/](https://lucienyang.github.io/colorful-login-page/)  

使用非常简单，给一个id colorful-container
首先引入js
`html
<script type="text/javascript" src="./js/pixi.min.js"></script>
<script type="text/javascript" src="./js/colorful-min.js"></script>
`
定义一个div，然后加载初始化js 
`javascript
colorfulBackground({
  container: document.getElementById('colorful-container'),
  animation: true,
  size: [1000, 1000],
  grid:[3,2],
  speed:10
});
`
>使用的js库
>[pixijs](http://www.pixijs.com/)
>[colorful.js](http://www.zhangxinxu.com/study/201712/colorful-min.js)
>参照了[http://www.zhangxinxu.com/wordpress/2017/12/canvas-pixi-js-iphonex-colorful-wallpaper-background/](http://www.zhangxinxu.com/wordpress/2017/12/canvas-pixi-js-iphonex-colorful-wallpaper-background/)
