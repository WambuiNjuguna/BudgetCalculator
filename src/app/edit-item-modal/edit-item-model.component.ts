import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss']
})
export class EditItemModalComponent implements OnInit {

  // @Input () item!: BudgetItem; //remove input here because we will not be using it as it is injected through the modal

  constructor(
    public dialogRef:MatDialogRef<EditItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public item:BudgetItem  ){}

  ngOnInit(): void {
    
  }

  onSubmitted(updatedItem:BudgetItem){
    this.dialogRef.close(updatedItem)
  }
}
