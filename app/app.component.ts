import {Component} from '@angular/core';
import { ProductService} from './work/product.service'

@Component({
    selector: 'pm-app',
    templateUrl:'./app/app.component.html',
    styleUrls:['./app/app.component.css'],

    providers:[ProductService]
})

export class AppComponent{
    pageTitle: string =`Mayank Agrawal`;
}


