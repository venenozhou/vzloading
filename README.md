# kd-loading loading插件

## 依赖安装
```
npm install 
```

## 本地运行
运行 `npm run dev` 来查看演示 demo 

## 上线打包
```
npm run build 
```

## 项目结构
```
├─build                    // webpack 构建文件
├─example                  // 组件展示页面
│  ├─views                 // 组件源码
│  ├─app.js                // app.js入口
├──└─index.html            // example 入口文件
├─dist                     // dist 目录
├─src                      // 组件源码
│  ├─loading               // 组件模块
└──└─main.js               // 入口文件
```

## 使用方式
1.  引入
```
//main.js
  import kdLoading from '@kd-components/kd-loading';
  import '@kd-components/kd-loading/theme/lib/light/index.css';
  Vue.use(kdLoading);
```

2.  调用方式
```
//开始loading
let myloading = this.$kdLoading.show({
      type: 'type2', //loading类型，不传的话默认type2
      target: document.querySelector('.loadingarea'), //loading区域，不传默认全屏loading
      contant: 'loading...'//加载中文字，默认为loading...
});
//结束loding
myloading.hide();
```
3.  建议调用方式
```
由于加载动画未结束时再次调用可能会再增加一个loading遮罩层建议调用方式如下
watch: {
      isloading (newVal) {
            if (newVal) {
                  this.loadingcom = this.$kdLoading.show({
                        type: 'type2', //loading类型，不传的话默认type2
                        target: document.querySelector('.clue-audit-list-loading'), //loading区域，不传默认整个页面
                        contant: '正在加载线索列表。。。'
                  });	
            }else {
                  this.loadingcom.hide();
            }
      }
}
然后通过控制isloading 的true或false来控制加载动画的显示隐藏。
这种调用方式也可以方便请求接口函数写在vuex中的情况，isloading放到state中，监听isloading来判断是否启用loading。
```

## 备注
1. 现在只放了三种动效，以后还会持续增加。
2. 关于调用方式的问题好像稍微有点繁琐，如果有什么好的建议，欢迎提出来



