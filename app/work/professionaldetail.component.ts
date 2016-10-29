import {Component,OnInit} from "@angular/core";
import {IProfessional} from './prof';
import {ActivatedRoute,Router} from '@angular/router';
import { ProductService } from './product.service';
import { Subscription }       from 'rxjs/Subscription';

@Component({
    templateUrl:"./app/work/professionaldetail.component.html",
    styleUrls:['app/work/professionaldetail.component.css'],
})

export class ProfessionalDetailComponent implements OnInit{
pageTitle:string = "Project Details";
profdetail:IProfessional;
private sub: Subscription;
errorMessage:string;


constructor(private _routed: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService) {
    }

    ngOnInit(): void {
          console.log("print something");
        this.sub = this._routed.params.subscribe(
            params => {
                let id = +params['id'];
                 console.log("print something to check" + id);
                this.getProduct(id);
        });
      
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getProduct(id: number) { 
         console.log("print if it is coming here" + id);
        this._productService.getDetail(id).subscribe(
            profdetail => this.profdetail = profdetail,
            error => this.errorMessage = <any>error);
    }

    //onBack(): void {
      //  this._router.navigate(['/products']);
    //}


}