### Virtual DOM ：

在装载过程中，React 通过 render 方法在内存中产生了一个树形结构，树上每一个节点代表一个 React 组件或者原生的 DOM，这个树形结构就是所谓的 Virtual DOM。

用户操作引发页面更新，网页中需要更新界面，React 依然通过 render 方法获得一个新的树形结构 Virtual DOM

Reconciliation(调和): React 在更新阶段对比原有的 Virtual DOM 和新生成的 Virtual DOM，找出两者的不同，根据不同来修改 DOM 树，这样只需做最小的必要改动，其中“找不同”的过程就叫做 Reconciliation。关于这个算法，React 的假设：

- 在前端页面中，DOM 节点跨层级的移动操作特别少，可以忽略不计
- 拥有相同类型的两个组件将会生成相似的树形结构，拥有不同类型的两个组件将会生成不同的树形结构
- 对于同一层级的一组子节点，他们可以通过唯一 ID 来进行区分

针对以上三点：开发人员应该注意的事项：

- 避免作为包裹功能的节点类型被随意改变
- 使用 Key

### 调和过程

```
<ul>
  <TodoItem key="1" text="First" completed={false}>
  <TodoItem key="2" text="Second" completed={false}>
</ul>
```

更新之后

```
<ul>
  <TodoItem key="0" text="Zero" completed={false}>
  <TodoItem key="1" text="First" completed={false}>
  <TodoItem key="2" text="Second" completed={false}>
</ul>
```

- 不实用 key 的情况：
  在比较更新的过程中，React 会首先认为把 text 为 First 的 TodoItem 的组件实例的 text 改为了 Zero，以此类推，会发现个后两个 TodoItem 会被强制渲染，不是我们想要的。

- 使用 key 的情况：
  React 根据 Key 值，可以知道现在的第二个和第三个 TodoItem 实例其实就是之前的第一个和第二个实例，所以 React 会把新创建的 TodoItem 实例插在第一位，对于原有的两个 TodoItem 实例只用原有的 props 来启动更新过程。这样 shouldComponentUpdate 就会发生作用，避免无谓的更新操作

- 使用 Key 的注意事项：
  - 每个子组件的 key 值必须唯一
  - key 值必须是稳定不变的（不能用数组下标作为 key）
  - 虽然 key 是一个 Prop，但是接受 Key 的组件并不能读取到 Key 的值，因为 Key 和 Ref 是 React 保留的两个特殊的 Prop

### reselect

- 工作原理
  只要相关状态没有改变，那就直接使用上一次的缓存结果
