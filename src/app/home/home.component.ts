import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchParams: FormGroup;


  constructor(fb: FormBuilder) {
    this.searchParams =  fb.group({
      'filter': ['btc_usd'],
    });
  }

  ngOnInit(): void {
  }

}
