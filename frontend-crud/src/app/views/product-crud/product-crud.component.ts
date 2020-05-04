import { HeaderService } from './../../components/template/header/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router, private HeaderService: HeaderService) {
    HeaderService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
   }

  ngOnInit() {
  }

  navigateToProductCreate(): void {
    // console.log('Navengando');
    this.router.navigate(['/products/create'])
    
  }
}
