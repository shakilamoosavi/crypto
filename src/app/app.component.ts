import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crypto';
  showFullMenu: boolean = true;
  searchParams: FormGroup;


  constructor(fb: FormBuilder) {
    this.searchParams =  fb.group({
      'filter': ['btc_usd'],
    });
  }
}
