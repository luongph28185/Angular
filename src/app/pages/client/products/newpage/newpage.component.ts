import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/service.service';
@Component({
  selector: 'app-newpage',
  templateUrl: './newpage.component.html',
  styleUrls: ['./newpage.component.css']
})
export class NewpageComponent implements OnInit{
  productId: string | undefined;
  product: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  // ngOnInit() {
  //   this.route.params.subscribe((params) => {
  //     this.productId = params['id'];
  //     this.getProduct();
  //   })};
  
  ngOnInit() {
    // this.getProducts();
    this.productService.getProducts()
    .subscribe(data => {
      this.product = data.slice(0, 5); // Lấy 5 sản phẩm đầu tiên từ dữ liệu lấy được
    })
  }
  navigateToCart(productId: string) {
    this.router.navigate(['/cart', productId]);
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
