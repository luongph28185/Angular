import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError, of } from 'rxjs';
import { Iproduct } from '../interfaces/product';
// import { Product } from './common/product';
import { switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})

export class ProductService {
  
  private apiUrl = 'http://localhost:8080/api/products'; // Thay đổi URL tương ứng với server của bạn

  constructor(private http: HttpClient) {}

  // getProducts(): Observable<Iproduct[]> {
  //   return this.http.get<any>(this.apiUrl).pipe(
  //     map((response) =>
  //       response.datas.map((data: any) => ({
  //         id: data._id,
  //         name: data.name,
  //         price: data.price,
  //         desc: data.description,
  //       }))
  //     ),
  //     catchError(this.handleError)
  //   );
  // }
  
  getProducts(): Observable<Iproduct[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      switchMap((response) => {
        console.log(response);

        return of(response.docs);
      })
    );
  }
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Đã xảy ra lỗi';
    if (error.error instanceof ErrorEvent) {
      // Xử lý lỗi client-side
      errorMessage = error.error.message;
    } else {
      // Xử lý lỗi server-side
      errorMessage = `Mã lỗi: ${error.status}\nThông báo: ${error.error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  getProduct(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  addProduct(product: any): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/products/add`, product);
    
  }
  

  updateProduct(product: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${product.id}`, product);
  }
  // updateProduct(id: string, product: any): Observable<any> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.put<any>(url, product);
  // }

  

  deleteProduct(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
  
 
  searchProducts(keyword: string) {
    // Gửi yêu cầu GET đến API để tìm kiếm các sản phẩm từ MongoDB
    const url = `${`http://localhost:8080/api`}/products?_keywords=${keyword}`;
    return this.http.get<any[]>(url);
  }
  
  
  addSignup(User: any): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/signup`, User);
    
  }

  addSignin(Signin: any): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/signin`, Signin);
    
  }
}
