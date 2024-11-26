import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private loadingSubject = new BehaviorSubject<boolean>(false); // other component cannot use that why made private
  public isLoading$ = this.loadingSubject.asObservable(); // making loadsubject as Observable so that next() function cannnot be access only subscribe can be done
  
  constructor() { }

  /**
   * show
   */
  public show():void {
    this.loadingSubject.next(true);
  }

  public hide():void {
    this.loadingSubject.next(false);
  }
}
