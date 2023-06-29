import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  Users: any = {};

  constructor(private productService: ProductService,private router: Router) { }
  User = {
    name :'',
    email: '',
    password: '',
    confirmPass: '',
  }
  onSubmit(){
    this.productService.addSignup(this.User).subscribe(
      response => {
        console.log('đăng ký thành công:', response);
        
        this.router.navigate(['/signin']);
        alert("Đăng ký thành công !")
        // Thực hiện các hành động sau khi sản phẩm được thêm thành công
      },
      error => {
        console.error('Lỗi khi thêm sản phẩm:', error);
        
        
        // Xử lý lỗi nếu có
      }
    );
  }
}
