import {Component,OnChanges,Input
    ,Output,EventEmitter} from '@angular/core';
@Component({
    selector:'ai-star',
    templateUrl:'app/work/star.component.html',
    styleUrls:['app/work/star.component.css'],
})
export class StarComponent implements OnChanges{
   @Input() rating:number;
    starWidth:number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

ngOnChanges(): void{
    this.starWidth = this.rating * 86/5;
   //  this.starWidth = 1000;
}
onClick(){
    this.ratingClicked.emit(`I give myself ${this.rating} star rating `);
    //this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
}

}