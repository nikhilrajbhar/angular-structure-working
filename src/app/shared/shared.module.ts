import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PhonenumberPipe } from './pipes/phonenumber.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { CommonStylesModule } from '../common-styles/common-styles.module';



@NgModule({
  declarations: [
    PhonenumberPipe
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule
    
  ],
  exports: [
    MatIconModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    PhonenumberPipe,
    MatProgressSpinnerModule  
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class SharedModule { }
