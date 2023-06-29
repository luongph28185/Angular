import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';
import { HomepageComponent } from './pages/client/homepage/homepage.component';
import { ListproductComponent } from './pages/client/products/listproduct/listproduct.component';
import { ProductDetailComponent } from './pages/client/products/productdetail/productdetail.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { SigninComponent } from './pages/client/signin/signin.component';
import { SignupComponent } from './pages/client/signup/signup.component';
import { NotfoundpageComponent } from './pages/client/notfoundpage/notfoundpage.component';
import { RecuitmentComponent } from './pages/client/recuitment/recuitment.component';
import { CartComponent } from './pages/client/cart/cart.component';
import { ProductListComponent } from './pages/admin/produts/product-list/product-list.component';
import { AddComponent } from './pages/admin/produts/add/add.component';
import { UpdateComponent } from './pages/admin/produts/update/update.component';
import { NewpageComponent } from './pages/client/products/newpage/newpage.component';

const routes: Routes = [
  // Client
  {
    path: '',
    component: WebsiteLayoutComponent,
    children: [
      { path: '', component: HomepageComponent },
      { path: 'products', component: ListproductComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'new-page', component: NewpageComponent },
      { path: 'recruitment', component: RecuitmentComponent },
      { path: 'cart/:id', component: CartComponent },
      // Auth
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },
  // Admin
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      { path: 'dashboard', component: DashboardComponent },
      
      { path: 'listproducts', component: ProductListComponent },
      { path: 'listproducts/add', component: AddComponent },
      { path: 'listproducts/update', component: UpdateComponent },
      // { path: 'products/:id', component: ProductDetailComponent },
    ],
  },
  

  // Not Found Page
  { path: '**', component: NotfoundpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule {}
