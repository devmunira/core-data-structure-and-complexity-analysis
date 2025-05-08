import { IHashNode } from '../libs/interfaces/linked-list-interface';

export function isIHashNode(data: any): data is IHashNode {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof data.key === 'string' &&
    (typeof data.value === 'number' || typeof data.value === 'boolean')
  );
}
