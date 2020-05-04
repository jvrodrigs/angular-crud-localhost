import { Injectable } from '@angular/core';
import { HeaderDt } from './header-data.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  
  private _headerData = new BehaviorSubject<HeaderDt>({
    title: 'Inicio',
    icon: 'home',
    routeUrl: ''
  });

  constructor() { }

  get headerData(): HeaderDt {
    return this._headerData.value;
  }

  set headerData(headerData: HeaderDt) {
    this._headerData.next(headerData);
  }
}
