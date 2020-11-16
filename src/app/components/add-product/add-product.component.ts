import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product = {
    title: '',
    description: '',
    price: ''
  };
  submitted = false;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  saveProduct() {
    const data = {
      title: this.product.title,
      description: this.product.description,
      price: this.product.price
    };

    this.productService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newProduct() {
    this.submitted = false;
    this.product = {
      title: '',
      description: '',
      price: ''
    };
  }
}