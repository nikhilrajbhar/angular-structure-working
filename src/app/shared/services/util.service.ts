import { Injectable } from '@angular/core';
import { SnackbarService } from 'src/app/common-styles/services/snackbar.service';
import { AlertType } from '../models/alert-type';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    private snackbarServices: SnackbarService
  ) { }

  /**
   * alert
   */
  public alert(msg: string, alertType: AlertType, isCloseBtnRequired = true, duration?: number): void {
    const config = {
      message: msg,
      icon: AlertType[alertType],
      hasCloseBtn: isCloseBtnRequired,
      duration: duration
    }
    this.snackbarServices.openSnackBarFromComponent(config)
  }
}
