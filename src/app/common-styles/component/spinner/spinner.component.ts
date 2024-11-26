import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  public color: string;
  public mode: any;
  public value: number;
  public diameter: number;

  constructor(
    public spinnerService: SpinnerService
  ) { }

  ngOnInit(): void {
    console.log('here');
    this.color = 'primary';
    this.mode = 'indeterminate';
    this.value = 50;
    this.diameter = 70;
  }

}
