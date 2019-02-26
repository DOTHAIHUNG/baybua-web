import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomepageComponent} from './homepage/homepage.component';
import {NavbarComponent} from './homepage/navbar/navbar.component';
import {BannerComponent} from './homepage/banner/banner.component';
import {ProductsComponent} from './homepage/products/products.component';
import {AboutUsComponent} from './homepage/about-us/about-us.component';
import {ServicesComponent} from './homepage/services/services.component';
import { FooterComponent } from './homepage/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    BannerComponent,
    ProductsComponent,
    AboutUsComponent,
    ServicesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
