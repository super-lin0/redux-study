### 高阶组件

```
const newComponent = higherOrderComponent(WrappedComponent);
```

**Notes**

使用高阶组件需要注意到的事项和遵守的原则：

- 高阶组件不可以直接修改接收到的组件的自身行为，只能进行功能组合
- 高阶组件是纯函数，需要保证没有副作用
- 在进行功能组合时，一般通过增加不相关的``props``的形式给原油组件传递信息
- 不要在``render``方法中使用高阶组件
- 高阶组件不会传递``refs``