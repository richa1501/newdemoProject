import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { PostComponent } from 'src/app/admin/components/post/post.component';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {


  constructor(private dialog: MatDialog ,
    @Inject(MAT_DIALOG_DATA) public deletePost: any,
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,) { }

  ngOnInit(): void {
  }

}
