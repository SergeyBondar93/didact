import { commitRoot } from './commits';
import { performUnitOfWork } from './performUnitOfWork';
import { reactState } from './state';

export function workLoop(deadline) {
  let shouldYield = false;
  while (reactState.nextUnitOfWork && !shouldYield) {
    reactState.nextUnitOfWork = performUnitOfWork(
      reactState.nextUnitOfWork,
    );
    shouldYield = deadline.timeRemaining() < 1;
  }

  if (!reactState.nextUnitOfWork && reactState.wipRoot) {
    commitRoot();
  }

  requestIdleCallback(workLoop);
}
