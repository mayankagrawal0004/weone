import {Injectable} from '@angular/core';
import {IProducts} from './products';
import {IProfessional} from './prof';
import {ITech} from './tech'; 
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService{
private _productUrl = '/products.json';
private _professionalurl = '/professional.json';
private _itechUrl= '/tech.json';

    constructor(private _http: Http) { }
    
    getDetails(): Observable<IProfessional[]> {
        return this._http.get(this._professionalurl)
            .map((response: Response) => <IProfessional[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }
    
   
    
    getTechs(): Observable<any[]> {
        return this._http.get(this._itechUrl)
            .map((response: Response) => <any[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProducts(): Observable<IProducts[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProducts[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    getDetail(id: number): Observable<IProfessional> {
        return this.getDetails()
        .map((detail: IProfessional[]) => detail.find(a => a.projectyear === id));
    }
    getProduct(id: number): Observable<IProducts> {
        console.log("magic");
        return this.getProducts()
            .map((products: IProducts[]) => products.find(p => p.productId === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}