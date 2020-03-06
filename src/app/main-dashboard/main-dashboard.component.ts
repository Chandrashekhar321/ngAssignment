import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {

  userName = "Chandrashekhar Dhakad"
  age = 27
  address = "4/1 Vallabh Nagar Indore"
  designation = "UI Developer"
  constructor() {
  }

  ngOnInit() {
  }

}
