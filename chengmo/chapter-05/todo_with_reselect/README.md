Virtual DOM ：在装载过程中，React 通过 render 方法在内存中产生了一个树形结构，树上每一个节点代表一个 React 组件或者原生的 DOM，这个树形结构就是所谓的 Virtual DOM。

用户操作引发页面更新，网页中需要更新界面，React 依然通过 render 方法获得一个新的树形结构 Virtual DOM

Reconciliation(调和): React 在更新阶段对比原有的 Virtual DOM 和新生成的 Virtual DOM，找出两者的不同，根据不同来修改 DOM 树，这样只需做最小的必要改动，其中“找不同”的过程就叫做 Reconciliation。关于这个算法，React 的假设：

- 在前端页面中，DOM 节点跨层级的移动操作特别少，可以忽略不计
- 拥有相同类型的两个组件将会生成相似的树形结构，拥有不同类型的两个组件将会生成不同的树形结构
- 对于同一层级的一组子节点，他们可以通过唯一 ID 来进行区分
