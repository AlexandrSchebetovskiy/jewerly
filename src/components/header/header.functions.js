import {localStorageUtil} from '@core/LocalStorageUtil';

export function getCount() {
  const count = localStorageUtil.getProducts().length
  return count
}
