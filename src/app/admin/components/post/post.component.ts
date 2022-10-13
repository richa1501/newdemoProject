import { Component, ViewChild } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PostApiService } from '../../service/post-api.service';
import { dataList } from './postList';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog'
import { PostModelComponent } from '../post-model/post-model.component';


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

  
  constructor(private postApi : PostApiService ,private dialog: MatDialog) { 
    this.getList();

  }
  getList(){
    this.postApi.postList().subscribe({next: (response:any)=>{
      this.apiData=response;
      console.log(this.apiData)
      this.dataSource = new MatTableDataSource(this.apiData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    }});
  }

 editPost(id:any){

 }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(){
    this.dialog.open(PostModelComponent,{
      width:'30%'    
    })
  }


}
