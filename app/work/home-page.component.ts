import {Component,OnInit} from '@angular/core';
import {IProducts} from './products';
import {ProductService} from './product.service';

@Component({
    templateUrl:'app/work/home-page.component.html'
   //template:`<h2>testing</h2>`
})
export class HomePageComponent implements OnInit{
  yourName:String = 'Vipur Surana';
  product = 'app/work/20160904_175345.jpg';
  imageWidth:number = 50;
  imageMargin:number = 2;
  showButton:boolean = false;
  listItem:string;
  errorMessage:string;
  proddebug: IProducts[];
toggleImage():void{
    this.showButton = !this.showButton;
}
ngOnInit():void{
//this._productservice.getProducts().subscribe(proddebug => this.proddebug = proddebug,error => this.errorMessage = <any>error);

    console.log("ng-onint running");
}
constructor(private _productservice: ProductService){

}
onRatingClicked(message:string):void{
    this.yourName = 'Product List' + message;
}
}