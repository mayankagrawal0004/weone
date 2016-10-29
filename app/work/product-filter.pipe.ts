import {PipeTransform,Pipe} from '@angular/core';
import {IProducts} from './products';
import { HomePageComponent } from './home-page.component';

@Pipe({
    name:'productFilter'
})
export class ProductFilterPipe implements PipeTransform{
transform(value: IProducts[], filterBy: string): IProducts[]
{
    filterBy = filterBy ? filterBy.toLocaleLowerCase():null;
    return filterBy ? value.filter((prod: IProducts) => prod.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
   // return filterBy ? value.filter((prod : IProducts)) => prod.productName.toLocaleLowerCase().indexof(filterBy) !==-1) : value;
}
}