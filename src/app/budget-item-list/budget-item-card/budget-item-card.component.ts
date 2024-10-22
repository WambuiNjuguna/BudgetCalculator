import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  //use the @input decorator to receive data from the parent which is the budget-list-item component
@Input() item!:BudgetItem;
@Output() xButtonClick:EventEmitter <any>= new EventEmitter<any> ();
@Output() cardClick:EventEmitter<any>= new EventEmitter<any>();


  constructor(){}

  ngOnInit(): void {
        
  }

  onXButtonClick(){
    //emit an event
    this.xButtonClick.emit();
  }

  onCardClick (){
    this.cardClick.emit();
  }

}
