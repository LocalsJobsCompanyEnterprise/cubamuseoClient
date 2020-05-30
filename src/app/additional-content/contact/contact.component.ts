import { MatDialogRef,MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    
   }

   onNoClick(): void {
    this.dialogRef.close();
  }
  
  ngOnInit(): void {
  }

}
