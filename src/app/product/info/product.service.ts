import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/observable/of';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: AngularFireList<any>;
  selectedProduct: Product = new Product ();
  constructor(private firebase: AngularFireDatabase) { }


  getData()
  {
    this.productList = this.firebase.list('products');
    return this.productList;
  }

  insert(product : Product);
  {
    this.productList.push({

      name : product.name,
      price : product.price,
      seller : product.seller,
      availible : product.availible
    });
  }
    updateProduct(product : Product){
      this.productList.update(product.$key
      {
        name : product.name,
        price : product.price,
        seller : product.seller,
        availible : product.availible
      });
    }

    deleteProduct($key : string){
      this.productList.remove($key)
    }

  }
