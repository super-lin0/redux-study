(() => {
  const anElement = (element, children) => {
    if (isClazz(element)) {
      const component = new element();
      return component.render();
    }
    if (typeof element === "function") {
      return element();
    }
    const anElement = document.createElement(element);
    children.forEach(child => {
      if (typeof child === "object") {
        anElement.appendChild(child);
      } else {
        anElement.innerHTML += child;
      }
    });
    return anElement;
  };
  const isClazz = func => {
    return (
      typeof func === "function" &&
      /^class\s/.test(Function.prototype.toString.call(func))
    );
  };
  const createElement = (el, props, ...children) => {
    return anElement(el, children);
  };
  window.React = {
    createElement
  };
  window.ReactDOM = {
    render: (el, domEl) => {
      domEl.appendChild(el);
    }
  };
})();
