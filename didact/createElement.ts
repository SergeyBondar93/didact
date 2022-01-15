function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

export function createElement(type, { children, ...props }) {
  let _children = Array.isArray(children) ? children : [children]

  return {
    type,
    props: {
      ...props,
      children: _children.map((child) => (typeof child === 'object'
        ? child
        : createTextElement(child))),
    },
  };
}
