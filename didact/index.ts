import { workLoop } from './workLoop';

export { createElement } from './createElement';
export { render } from './render';
export { useState } from './useState';

requestIdleCallback(workLoop);
