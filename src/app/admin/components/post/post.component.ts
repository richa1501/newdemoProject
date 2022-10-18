import { Component, ViewChild } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PostApiService } from '../../service/post-api.service';
import { dataList } from './postList';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog'
import { PostModelComponent } from '../post-model/post-model.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent{

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) 

  sort: MatSort = new MatSort;
  apiData: dataList[] | any;
  displayedColumns: string[] = ['id', 'name', 'username','email','action'];
  dataSource = new MatTableDataSource();  
id: any;

  
  constructor(private postApi : PostApiService ,private dialog: MatDialog,private toastrservice: ToastrService,) { 
    this.getList();

  }

  openDialog(){
    this.dialog.open(PostModelComponent,{
      width:'30%'    
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getList();
      }
    })
  }   


  getList(){
    this.postApi.getPostList().subscribe({next: (response:any)=>{
      this.apiData=response;    
      this.dataSource = new MatTableDataSource(this.apiData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    }});
  }

 editPost(row:any){
  this.dialog.open(PostModelComponent,{
    width:'30%',
    data:row,   
  }).afterClosed().subscribe(val=>{
    if(val=== 'update'){
      this.getList();
    }
  })
 }


 deletePost(id:number){
  this.postApi.deletepostData(id).subscribe({next: (response)=>{
    alert("You want to delete this record?");
    this.getList();
  },error:()=>{
    this.toastrservice.error("Something went wrong!")
  }
  
});
 }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }




}
