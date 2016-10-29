import {Component,OnInit} from "@angular/core";
import {IProfessional} from './prof';
import {ActivatedRoute,Router} from '@angular/router';
import { ProductService } from './product.service';
import { Subscription }       from 'rxjs/Subscription';

@Component({
    templateUrl:"./app/work/alternate.component.html",
    styleUrls:['app/work/alternate.component.css'],
})

export class AlternateComponent implements OnInit{
pageTitle:string = "Project Details";
prof:IProfessional[];

constructor(private _productService: ProductService,
private _router: Router) {
    }

    ngOnInit(): void {
                this._productService.getDetails().subscribe(prof => this.prof = prof,error => this.errorMessage = <any>error);

    }
    
    onBackclick(): void {
        this._router.navigate(['/professional']);
    }

    

}