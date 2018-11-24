import { NgModule } from '@angular/core';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { ProductGaurdService } from './product-gaurd.service';
import { ProductService } from './product.service';
import { SharedModule } from './../shared/shared.module';
import { ProductRoutingModule } from './../routes/product-routing.module';
import { ProductDetailComponent } from './../products/product-detail.component';
import { ProductListComponent } from './../products/product-list.component';

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [
    ConvertToSpacesPipe,
    ProductDetailComponent,
    ProductListComponent,
  ],
  providers: [
    ProductService,
    ProductGaurdService
  ] 
})
export class ProductModule { }
