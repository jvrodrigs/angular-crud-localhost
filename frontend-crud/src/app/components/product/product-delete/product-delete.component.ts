import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product;

  constructor(private deleteService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.deleteService.readById(id).subscribe(product => {
      this.product = product;
    })
  }
  deleteProduct(): void {
    this.deleteService.delete(this.product.id).subscribe(() =>{
      this.deleteService.showMessage('Produto excluido com sucesso!');
      this.router.navigate(['/products']);
    })
  }

  cancelProduct() {
    this.router.navigate(['/products']);
  }
}
