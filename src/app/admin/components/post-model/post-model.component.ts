import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { emailValidator } from 'src/app/auth/customeValidation';
import { HttpClient } from '@angular/common/http';
import { PostApiService } from '../../service/post-api.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-post-model',
  templateUrl: './post-model.component.html',
  styleUrls: ['./post-model.component.scss']
})

export class PostModelComponent implements OnInit {
  postForm = this.formbuilder.group({
    name: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, emailValidator,]),
  })

  title: string = "";

  actionBtn: string = 'save';
  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private postapiservice: PostApiService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    public dialogRef: MatDialogRef<PostModelComponent>,
    private toastrservice: ToastrService,
  ) { }

  ngOnInit(): void {
     /** If condition to get data in edit form */ 
    if (this.editData) {
      this.title = 'Edit Post';
      this.actionBtn = 'Update'
      this.postForm.controls['name'].setValue(this.editData.name);
      this.postForm.controls['username'].setValue(this.editData.username);
      this.postForm.controls['email'].setValue(this.editData.email);
    }
    else {
      this.title = 'Add Post';
    }
  }
   /** Function to add new record */ 
  addPost() {
    if (!this.editData) {
      if (this.postForm.valid) {
        this.postapiservice.addpostData(this.postForm.value).subscribe({
          next: (res) => {
       
            this.toastrservice.success("Post Added Successfully");
            this.postForm.reset();
            this.dialogRef.close('save');
          }
        })
      }

    } else {
      this.updatepost(this.editData.id)
    }
  }
   /** Function to update exixting record*/ 
  updatepost(id: number) {
    if (this.postForm.valid) {
      this.postapiservice.editpostData(this.postForm.value, this.editData.id).subscribe({
        next: (res) => {
          this.toastrservice.success("Post updated Successfully");
          this.postForm.reset();
          this.dialogRef.close('update');
        }
      })
    }
    else {
      this.toastrservice.error("Error while updating post")
    }
  }

}
