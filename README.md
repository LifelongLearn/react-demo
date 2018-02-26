# test-new-feature
尝试js新特性

[http://cn.mobx.js.org/](http://cn.mobx.js.org/)

[react portal](https://zhuanlan.zhihu.com/p/29880992)

<br>
error boundaries（处理错误）

portals (挂载方式)

custom DOM attributes （支持自定义DOM属性）

```javascript
// v16之后可以这样
const  hoc = (Component) => {
  return (props) => [
        <Component {...props} />
        <div>extra content</div>
  ];
};
```


组件Dialog 利用v16 的portal 俩实现传送门


v16新引入的生命周期函数 componentDidCatch
