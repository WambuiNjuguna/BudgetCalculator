import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{
totalBudget:number=0;

budgetItem:BudgetItem[]=new Array<BudgetItem>();

  constructor(){}

 ngOnInit(): void {
  this.loadBudgetItems(); //load budget items from local storage on 
   
 }

 addItem(newItem:BudgetItem){
    this.budgetItem.push(newItem);
    this.totalBudget+= newItem.amount
    this.savedBudgetItems() //save updated budget items to local storage
 }

 deleteItem(item:BudgetItem){
  let index=this.budgetItem.indexOf(item);
   this.budgetItem.splice(index,1)
   this.totalBudget -= item.amount
   this.savedBudgetItems() 

 }

 updateItem(updateEvent:UpdateEvent){
  //result is the updated budget item
  //replace the item with the updated/submittted item from the form
    this.budgetItem [this.budgetItem.indexOf(updateEvent.old)] =updateEvent.new;
    
 //update total budget
 this.totalBudget += updateEvent.old.amount;
 this.totalBudget += updateEvent.new.amount;
 this.savedBudgetItems() 
 }

 private savedBudgetItems(){
  localStorage.setItem('budgetItems', JSON.stringify(this.budgetItem))
 }
git 
 private loadBudgetItems(){
  const storedItems = localStorage.getItem('budgetItems');
    if (storedItems) {
      this.budgetItem = JSON.parse(storedItems);
      this.totalBudget = this.budgetItem.reduce((total, item) => total + item.amount, 0);
    }
 }



}
