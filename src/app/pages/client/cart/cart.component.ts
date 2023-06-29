import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/service.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productId: string | undefined;
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
      this.getProduct();
    });
  }

  getProduct() {
    if (this.productId !== undefined && this.productId !== null) {
      if (this.productId) {
        this.productService.getProduct(this.productId).subscribe(
          (response) => {
            this.product = response;
          },
          (error) => {
            console.log(error);
          }
        );
      }
    }
  }
}
