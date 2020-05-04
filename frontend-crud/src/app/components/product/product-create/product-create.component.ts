import { Product } from './../product.model';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name:'',
    price: null
  } 

  constructor(private ProductService: ProductService,
    private Router: Router) { }

  ngOnInit(): void {
    
  }

  //Criação de um novo produto.
  createProduct(): void {
    this.ProductService.createNewProduct(this.product).subscribe(
      () => {
        this.ProductService.showMessage('Operação executada com sucesso!');
        this.Router.navigate(['/products'])
      });


  }

  cancelProduct(): void {
    this.Router.navigate(['/products'])
  }

}
