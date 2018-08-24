import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angularfire2';
import { angularFireDatabaseModule } from '@angularfire2/database';

import { AppComponent } from './app.component';
import { environment } from '..environments/environment';
import { ProductComponent } from './product/product.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductsComponent } from './product/product/product.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    EmployeeComponent,
    ProductsComponent

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    angularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
