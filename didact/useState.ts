import { reactState } from './state';

export function useState(initial) {
  const oldHook = reactState.wipFiber.alternate
    && reactState.wipFiber.alternate.hooks
    && reactState.wipFiber.alternate.hooks[reactState.hookIndex];
  const hook = {
    state: oldHook ? oldHook.state : initial,
    queue: [],
  };

  const actions = oldHook ? oldHook.queue : [];
  actions.forEach((action) => {
    hook.state = action(hook.state);
  });

  const setState = (action) => {
    const _action = typeof action === 'function' ? action : () => action

    hook.queue.push(_action);
    reactState.wipRoot = {
      dom: reactState.currentRoot.dom,
      props: reactState.currentRoot.props,
      alternate: reactState.currentRoot,
    };
    reactState.nextUnitOfWork = reactState.wipRoot;
    reactState.deletions = [];
  };

  reactState.wipFiber.hooks.push(hook);
  reactState.hookIndex++;
  return [hook.state, setState];
}
