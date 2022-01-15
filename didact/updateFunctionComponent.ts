import { reconcileChildren } from './reconcileChildren';
import { reactState } from './state';

export function updateFunctionComponent(fiber) {
  reactState.wipFiber = fiber;
  reactState.hookIndex = 0;
  reactState.wipFiber.hooks = [];
  const children = [fiber.type(fiber.props)];
  reconcileChildren(fiber, children);
}
