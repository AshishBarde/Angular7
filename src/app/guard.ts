import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class Guard implements CanActivate {

  constructor() {}

  canActivate() {
    return true;
  }
}