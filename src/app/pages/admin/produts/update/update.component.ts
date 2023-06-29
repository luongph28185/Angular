import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/service.service'; 
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent {
  product!: any;
  
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [],
    cost: [],
    image: [],
  });

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: ActivatedRoute
  ) {
    this.router.paramMap.subscribe((params) => {
      const id = String(params.get('id'));
      this.productService.getProduct(id).subscribe(
        (data) => {
          console.log(data);
          this.product = data;

          this.productForm.patchValue({
            name: data.name,
            price: data.price,
            cost: data.cost,
            image: data.image,
          });
        },
        (error) => console.log(error.message)
      );
    });
  }
  onHandleSubmit() {
    if (this.productForm.valid) {
      const product: any = {
        id: '',
        name: this.productForm.value.name,
        price: this.productForm.value.price,
        cost: this.productForm.value.cost,
        image: this.productForm.value.price,
      };

      this.productService.updateProduct(product).subscribe((product) => {
        console.log(product);
        console.log('product', product);
      });
    }
  }
}
