import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  currentProduct = null;
  message = '';
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.message = '';
    this.getProduct(this.route.snapshot.paramMap.get('id'));
  }
  getProduct(id) {
    this.productService.get(id)
      .subscribe(
        data => {
          this.currentProduct = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status) {
    const data = {
      title: this.currentProduct.title,
      description: this.currentProduct.description,
      published: status
    };

    this.productService.update(this.currentProduct.id, data)
      .subscribe(
        response => {
          this.currentProduct.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateProduct() {
    this.productService.update(this.currentProduct.id, this.currentProduct)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The product was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteProduct() {
    this.productService.delete(this.currentProduct.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/products']);
        },
        error => {
          console.log(error);
        });
  }
}

