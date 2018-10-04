## BriefBook

### 虚拟 Dom

> JSX -> creatElement -> 虚拟Dom「js对象」 -> 真实Dom

1. 获得 `state` 数据和 JSX 模板
2. 数据 + 模板生成虚拟 dom
3. 用虚拟 Dom 的结构生成真实的节点
4. 当 `state` 发生变化时, 再重新生成一个新的虚拟 Dom
5. 比较原始虚拟 Dom 和 新生成的虚拟 Dom
6. 将区别应用到真实 Dom 中

#### setState

异步，可以将多次修改揉成一次

#### 关于key

尽量不要使用 index，删除前面一项后，所有的元素 Index 值都会减一

### 生命周期函数

> 生命周期函数在某一时刻组件自动调用来执行

#### 初始化时

`constructor`

#### Mounting

```js
// 在组件即将被挂载之前执行的方法
componentWillMount() {
console.log('componentWillMount');
};

// 组件挂载
render() {
console.log('render');
};

// 组件被挂载之后执行
componentDidMount() {
console.log('componentDidMount');
};
```

#### Updation

`state` 和 `props` 共有的生命周期

```js
// 组件被更新之前会更新
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    // 返回 true 表示组件需要被更新
    return true;
  }

  // 组件被更新之前,如果 shouldComponentUpdate 返回 true 才执行
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  // 渲染
  render() {
  
  }
  //  组件更新完后会执行
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
```

`props` 独有

```js
componentWillReceiveProps () {
  console.log('componentWillReceiveProps')
}
```

#### Unmounting

```js
// 从页面中去除
componentWillUnmount() {
console.log('componentWillUnmount')
}
```