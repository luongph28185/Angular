import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  Users: any = {};

  constructor(private productService: ProductService,private router: Router) { }
  Signin = {
    email: '',
    password: ''
  }
  onSubmit(){
    this.productService.addSignin(this.Signin).subscribe(
      response => {
        console.log('đăng nhập thành công:', response);
        
        this.router.navigate(['/admin/dashboard']);
        alert("đăng nhập thành công !")
        // Thực hiện các hành động sau khi sản phẩm được thêm thành công
      },
      error => {
        console.error('Lỗi khi thêm sản phẩm:', error);
        // Xử lý lỗi nếu có
      }
    );
   }
}
