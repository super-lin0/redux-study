(() => {
  function div(element, children) {
    const aDiv = document.createElement(element);
    aDiv.innerHTML = children.join(" ");
    return aDiv;
  }
  function createElement(el, prop, ...children) {
    return div(el, children);
  }
  window.React = {
    createElement
  };
  window.ReactDOM = {
    render: (el, domEl) => {
      domEl.appendChild(el);
    }
  };
})();
