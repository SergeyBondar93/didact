import { createDom } from './createDom';
import { reconcileChildren } from './reconcileChildren';

export function updateHostComponent(fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber);
  }
  reconcileChildren(fiber, fiber.props.children);
}
