connect 的过程实际上产生了一个无名的 React 组件类，这个类定制类了 shouldComponentUpdate 的实现，实现逻辑是对比这次传递给内层傻瓜组件的 props 和上一次的 props
