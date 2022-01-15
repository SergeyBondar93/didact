import { reactState } from './state';

export function render(element, container) {
  reactState.wipRoot = {
    dom: container,
    props: {
      children: [element],
    },
    alternate: reactState.currentRoot,
  };
  reactState.deletions = [];
  reactState.nextUnitOfWork = reactState.wipRoot;
}
