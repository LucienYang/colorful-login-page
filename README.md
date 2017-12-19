# 动态色彩流动的登录页面
看了QQ 9.0 的登录页面，感觉还可以，自己也尝试去山寨一个~  
![qq.png](http://upload-images.jianshu.io/upload_images/1784147-c745d3e8f0320588.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


### 最后实现的效果  

### 用js+css实现色彩动态的流动效果  

![image.png](http://upload-images.jianshu.io/upload_images/1784147-d86d6c21b3f3bae8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)  

### 登录loading页面  

![image.png](http://upload-images.jianshu.io/upload_images/1784147-2a8c90670449f684.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


在线演示页面：[https://lucienyang.github.io/colorful-login-page/](https://lucienyang.github.io/colorful-login-page/)  
使用非常简单，给一个id colorful-container  

首先引入js
```html
<script type="text/javascript" src="./js/pixi.min.js"></script>
<script type="text/javascript" src="./js/colorful-min.js"></script>
```
定义一个div，然后加载初始化js 
```javascript
colorfulBackground({
  container: document.getElementById('colorful-container'),
  animation: true,
  size: [1000, 1000],
  grid:[3,2],
  speed:10
});
```
>使用的js库
>[pixijs](http://www.pixijs.com/)
>[colorful.js](http://www.zhangxinxu.com/study/201712/colorful-min.js)
>参照了[http://www.zhangxinxu.com/wordpress/2017/12/canvas-pixi-js-iphonex-colorful-wallpaper-background/](http://www.zhangxinxu.com/wordpress/2017/12/canvas-pixi-js-iphonex-colorful-wallpaper-background/)
