import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  products: any = {};

  constructor(private productService: ProductService,private router: Router) { }
  

  onsubmit() {
    this.productService.addProduct(this.products).subscribe(
      response => {
        console.log('Sản phẩm đã được thêm:', response);
        
        this.router.navigate(['/admin/listproducts']);
        alert("add thanh cong")
        // Thực hiện các hành động sau khi sản phẩm được thêm thành công
      },
      error => {
        console.error('Lỗi khi thêm sản phẩm:', error);
        // Xử lý lỗi nếu có
      }
    );
  }
}
