import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { emailValidator } from 'src/app/auth/customeValidation';
import { HttpClient} from '@angular/common/http';
import { PostApiService } from '../../service/post-api.service';
import { MatDialog, MatDialogRef , MAT_DIALOG_DATA } from '@angular/material/dialog'
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-post-model',
  templateUrl: './post-model.component.html',
  styleUrls: ['./post-model.component.scss']
})
export class PostModelComponent  {
   addPostForm = this.formbuilder.group({
    
    name: new FormControl('', [Validators.required ]),
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, emailValidator,]),

   })

  constructor(
    private formbuilder : FormBuilder, 
    private http : HttpClient, 
    private postapiservice : PostApiService, 
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<PostModelComponent>,
    @Inject(MAT_DIALOG_DATA) public editdata: any,
    private toastrservice : ToastrService,  
   
    ) { }

 
  addPost(){    
    return this.postapiservice.addpostData(this.addPostForm.value).subscribe({next:(res)=>{
      console.log(res);
      this.toastrservice.success("Post Added Successfully");
      this.addPostForm.reset();
      this.dialogRef.close('save');

    }      
    });    
  }
  editData(row:any){
    this.dialog.open(PostModelComponent,{
      width:'30%',
      data:row
    })
  }
}
