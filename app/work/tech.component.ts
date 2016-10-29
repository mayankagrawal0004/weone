import {Component,OnInit} from '@angular/core';
import {ITech} from './tech';
import {ActivatedRoute,Router} from '@angular/router';
import { ProductService } from './product.service';
import { Subscription }       from 'rxjs/Subscription';


@Component({
    templateUrl:'./app/work/tech.component.html',
})

export class TechComponent implements OnInit{
    pageTitle: string =`Tech Gyan`;
    tech:any[];
    errorMessage:string;
constructor(private _productservice: ProductService){

}

    ngOnInit():void{
this._productservice.getTechs().subscribe(tech => this.tech = tech,error => this.errorMessage = <any>error);
}
onRatingClicked(message:string,word:string):void{
    this.pageTitle =  message + "in " + word;
}

}


