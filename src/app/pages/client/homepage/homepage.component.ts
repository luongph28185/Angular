import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  products: any[] | undefined;
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    // this.getProducts();
    this.productService.getProducts()
    .subscribe(data => {
      this.products = data.slice(0, 5); // Lấy 5 sản phẩm đầu tiên từ dữ liệu lấy được
    })
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (response) => {
        this.products = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  navigateToDetail(productId: string) {
    this.router.navigate(['/', productId]);
  }

  deleteProduct(productId: string) {
    this.router.navigate(['/', productId]);
  }


}
