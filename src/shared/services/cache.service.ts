import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService<T> {

  private readonly localStorage: Storage;

  constructor() {
    this.localStorage = window.localStorage;
  }

  public get(key: string): T {
    if (this.isLocalStorageSupported) {
      return JSON.parse(this.localStorage.getItem(key));
    }
  }

  public set(key: string, value: T): boolean {
    if (this.isLocalStorageSupported) {
      this.localStorage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  }

  public remove(key: string): boolean {
    if (this.isLocalStorageSupported) {
      this.localStorage.removeItem(key);
      return true;
    }
    return false;
  }

  get isLocalStorageSupported(): boolean {
    return !!this.localStorage;
  }
}
