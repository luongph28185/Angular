import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/service.service';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  
})
export class ProductListComponent {
  
  
    
  
  products: any[] | undefined;
   _keywords: string = '';
  mess = "";
  searchResults: any[] = [];

  
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.getProducts();
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

  navigateToDetail(id: string) {
    
    this.router.navigate(['/products', id]);
  }

  deleteProduct(id: string) {
    var result = confirm("Bạn có muốn xóa không?");
    if (result) {
      // Người dùng đã chọn Đồng ý
      console.log("Người dùng đã chọn xóa.");
      // Gọi hàm xóa hoặc thực hiện các hành động khác tùy ý
      this.productService.deleteProduct(id).subscribe(
        response => {
          alert('Sản phẩm đã được xóa');
          // Thực hiện các hành động sau khi sản phẩm được xóa thành công
        },
        error => {
          console.error('Lỗi khi xóa sản phẩm:', error);
          // Xử lý lỗi nếu có
        }
      )
    } else {
      // Người dùng đã chọn Hủy
      alert("Người dùng đã chọn không xóa.");
      // Thực hiện các hành động khác tùy ý
    }
    }
 
    search() {
      this.productService.searchProducts(this._keywords).subscribe(
        data => {
          this.searchResults = data;
        },
        error => {
          console.log(error);
        }
      );
    }

    // search(searchValue:string){
    //   let searchData = this.productService.getProducts().filter((item) => item.name.includes(searchValue))
    //   if(searchData.length > 0){
    //     this.products = searchData
    //   } else {
    //     this.products = []
    //     this.mess = 'khong tim thay san pham nao'
    //   }
    // }
}