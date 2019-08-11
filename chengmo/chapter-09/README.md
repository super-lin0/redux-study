# 扩展 Redux

## 中间件

### 特点

- 中间件是独立的函数

- 中间件可以组合使用

- 中间件有一个统一的接口
  1、中间件处理的是 action 接口，而派发 action 对象的就是 Store 上的 dispatch 函数，通过 dispatch 派发的 action 对象会经历中间件的管道再进入 reducer

  ```

  const middleware = store => next => action => next(action)

  ```

### 中间件开发原则

- 一个中间件只完成一个功能
- 每个中间件必须是独立存在的（不依赖于和其他中间件的顺序）
- 一个中间件如果产生了新的 action 对象，正确的方式是使用 dispatch 函数派发，而不是使用 next 函数

### Note

中间件可以用来增强 Redux Store 的 dispatch 方法，但仅限于 dispatch 方法，也就是从 dispatch 函数调用到 action 对象被 reducer 处理这个过程中的操作

## Store Enhancer

### 特点

Store Enhancer 是一个函数，这个函数接受一个 createStore 模样的函数为参数，返回一个新的 createStore 函数

```
const enhancer = createStore => (reducer,preloadedState, enhancer) => {
  const store = createStore(reducer, preloadedState, enhancer);
  return store;
}
```
