import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[];

  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private productServRead: ProductService) { }

  ngOnInit():void {
    this.productServRead.readApi().subscribe( products => {
      this.products = products;      
    }, (error) => {[
      this.productServRead.errorHandler('Ocorreu um erro na listagem dos produtos!')
    ]});
    
  }

}
