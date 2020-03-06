import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

productData:any[]=[
  {'code': 'prod001', 'name': 'Mobile', 'brand': 'Sony'},
  {'code': 'prod002', 'name': 'Charger', 'brand': 'MI'},
  {'code': 'prod003', 'name': 'Laptop', 'brand': 'Apple'},
  {'code': 'prod004', 'name': 'Keyboard', 'brand': 34003},
]



  constructor() { }

  ngOnInit() {
  }

}
