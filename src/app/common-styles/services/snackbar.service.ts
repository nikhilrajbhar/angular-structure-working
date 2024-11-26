import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../component/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private matSnackBar: MatSnackBar
  ) { }

  /**
   * open snackbar
   */
  public openSnackBarFromComponent(snackbarconfig: any): void {
    this.matSnackBar.openFromComponent(SnackbarComponent, {
      panelClass: `snackbar-${snackbarconfig.icon}`,
      duration: snackbarconfig.duration || null,
      horizontalPosition: snackbarconfig.horizontalPosition || 'center',
      verticalPosition: snackbarconfig.verticalPosition || 'top',
      data: {
        message: snackbarconfig.message,
        hasCloseBtn: true,
        icon: snackbarconfig.icon
      }
    })
  }
}
