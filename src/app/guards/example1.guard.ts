import { CanActivateFn } from '@angular/router';


export const example1Guard: CanActivateFn = (route, state) => {
  return true;
};
