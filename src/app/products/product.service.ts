import { Injectable } from "@angular/core";
import { IProduct } from './product'
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpErrorResponse } from "@angular/common/http/src/response";

@Injectable()
export class ProductService {
    private _productUrl = './api/products/products.json';
    private _formatsUrl = 'http://number-format-parser.factset.io/formats'

    constructor(private _http: HttpClient) {}

    getProducts(): Observable<IProduct[]> {
     return this._http.get<IProduct[]>(this._productUrl)
     .do(data => console.log('All: ' + JSON.stringify(data)))
     .catch(this.handleError);

    }

    getFormats(): Observable<any[]> {
      return this._http.get<any[]>(this._formatsUrl)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
}
