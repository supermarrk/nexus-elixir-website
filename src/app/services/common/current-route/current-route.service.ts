import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY_STRING, SLASH_DELIMITER } from '../../../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class CurrentRouteService {

  constructor(private router: Router) {}

  getCurrentRouteSnapshot(): string {
    const pathName = this.router.url;
    const currentRoute = pathName.split(SLASH_DELIMITER).pop() || EMPTY_STRING;
    return currentRoute;
  }
}
