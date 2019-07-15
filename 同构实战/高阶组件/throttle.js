/**
 * 事件节流，在某些场景下，某些事件可能会在短时间内被多次触发。
 * 为了保证性能，我们预期处理函数及其相关计算逻辑并不是每次都会执行。
 * @param {*} fn  用于定义计算逻辑
 * @param {*} interval  最短的重复计算时间
 */

const throttle = (fn, interval) => {
  const doing = false;

  return () => {
    if (doing) {
      return;
    }
    doing = true;
    fn.apply(this, arguments);
    setTimeout(() => (doing = false), interval);
  };
};

// 复用
window.onresize = throttle(() => console.log("resize execute"), 500);
window.onscroll = throttle(() => console.log("scroll execute"), 500);
