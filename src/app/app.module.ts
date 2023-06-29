import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductListComponent } from './pages/admin/produts/product-list/product-list.component';
import { AddComponent } from './pages/admin/produts/add/add.component';
import { UpdateComponent } from './pages/admin/produts/update/update.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { HomepageComponent } from './pages/client/homepage/homepage.component';
import { ListproductComponent } from './pages/client/products/listproduct/listproduct.component';
import { ProductDetailComponent } from './pages/client/products/productdetail/productdetail.component';
import { NotfoundpageComponent } from './pages/client/notfoundpage/notfoundpage.component';
import { SigninComponent } from './pages/client/signin/signin.component';
import { SignupComponent } from './pages/client/signup/signup.component';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HeaderAdminComponent } from './components/admin/header-admin/header-admin.component';
import { FooterAdminComponent } from './components/admin/footer-admin/footer-admin.component';
import { HeaderComponent } from './components/client/header/header.component';
import { FooterComponent } from './components/client/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';
import { RecuitmentComponent } from './pages/client/recuitment/recuitment.component';
import { CartComponent } from './pages/client/cart/cart.component';
import { NewpageComponent } from './pages/client/products/newpage/newpage.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductListComponent,
    AddComponent,
    UpdateComponent,
    SidebarComponent,
    HomepageComponent,
    ListproductComponent,
    ProductDetailComponent,
    NotfoundpageComponent,
    SigninComponent,
    SignupComponent,
    WebsiteLayoutComponent,
    AdminLayoutComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    HeaderComponent,
    FooterComponent,
    SidebarAdminComponent,
    RecuitmentComponent,
    CartComponent,
    NewpageComponent,
   
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
