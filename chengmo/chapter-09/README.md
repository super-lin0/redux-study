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

## Store Enhancer
