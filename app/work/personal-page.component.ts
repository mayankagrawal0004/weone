import {Component,OnInit} from '@angular/core';
import {IProfessional} from './prof';
import {IProducts} from './products';
import {ActivatedRoute,Router} from '@angular/router';
import {ProductService} from './product.service';

@Component({
    selector:'pm-personal',
    templateUrl:'app/work/personal-page.component.html',
   styleUrls:['app/work/personal-page.component.css'],
})
export class PersonalPageComponent implements OnInit{
outputPath:string = 'www.google.com';
showButton:boolean = false;
prof:IProfessional[];
proddebug:IProducts[];
errorMessage:string;
constructor(private _profservice: ProductService,
private _router: Router){

}

ngOnInit():void{
this._profservice.getDetails().subscribe(prof => this.prof = prof,error => this.errorMessage = <any>error);
//this._productservice.getProducts().subscribe(proddebug => this.proddebug = proddebug,error => this.errorMessage = <any>error);

    console.log("ng-onint running");
}
toggleImage():void{
    this.showButton = !this.showButton;
}


onclick():void{
     this._router.navigate(['/alternate']);
}

}