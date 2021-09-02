import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StorageservicesService {

  private storageSub = new Subject<string>();
  private sessionStorageChange = new Subject<any>();

  constructor() { }

  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }
  
  getItem(id: any) {
    return localStorage.getItem(id);
  }
  
  setItem(key: any, value: any) {
    if(key == 'printErrLang'){
      localStorage.setItem(key, value);
      this.storageSub.next('changed');
    }
    return localStorage.setItem(key, value);
  }
  
  removeItem(key: any) {
    return localStorage.removeItem(key);
  }
  
  clear() {
    return localStorage.clear();
  }
  
  setTools(toolTypes: any[]) {
    let myTools: string[] = [];
    toolTypes.forEach((toolObj: any) => {
      myTools.push(toolObj.type);
    });
    sessionStorage.setItem('accessible_tools', JSON.stringify(myTools));
    this.sessionStorageUpdatedKeys(['accessible_tools']);
    return this.setItem('accessible_tools', JSON.stringify(myTools));
  }

  public updateLocalStorageFromSession() {
    this.setItem('token', sessionStorage.getItem('token'));
    this.setItem('snippet_id', sessionStorage.getItem('snippet_id'));
    this.setItem('language', sessionStorage.getItem('language'));
  }

  //to watch session storage changes
  watchSessionStorage(): Observable<any> {
    return this.sessionStorageChange.asObservable();
  }

  sessionStorageUpdatedKeys(updatedItemKey: string[]) {
    updatedItemKey.forEach((key: string) => {
      return this.sessionStorageChange.next(key);
    })
  }
}
