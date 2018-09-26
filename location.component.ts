import { Component, OnInit } from '@angular/core';
import {Location} from '../location';
import {LOCATIONS} from '../mock-locations';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  locations= LOCATIONS; 
  
  constructor() { }

  ngOnInit() {
  }
  
}
