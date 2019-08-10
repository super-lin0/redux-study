# React 高阶组件

## 定义

- 高阶组件就是一个函数，这个函数接受一个组件作为输入，然后返回一个新的组件作为结果。

## 意义：

- 重用代码
- 修改现有 React 组件的行为

## 分类：

### 代理方式的高阶组件

- 实例

```
function removeUserProp(WrappedComponent) {
  return class WrappingComponent extends Component {
    render() {
      const { user, ...otherProps } = this.props;
      return <WrappedComponent {...otherProps} />;
    }
  };
}
```

```
const removeUserProp1 = WrappedComponent => props => {
  const { user, ...otherProps } = props;
  return <WrappedComponent {...otherProps} />;
};
```

- 应用场景

  1、操纵 Props

  2、访问 ref

  3、抽取状态

  4、包装组件

### 继承方式的高阶组件

- 应用场景

  1、操纵 props

  2、操纵生命周期函数
