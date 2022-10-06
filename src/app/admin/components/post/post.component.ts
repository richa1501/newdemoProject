import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PostApiService } from '../../service/post-api.service';
import { dataList } from './postList';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent{
  apiData: dataList[] | any;
  displayedColumns: string[] = ['id', 'email', 'first_name', 'last_name','avatar'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  
  constructor(private postApi : PostApiService) { 
    this.fatchList();

  }
  fatchList(){
    this.postApi.postList().subscribe({next: (response:any)=>{
      this.apiData=response.data;
      this.dataSource = new MatTableDataSource(this.apiData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    }});
  }


  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.apiData = this.sort;
  // }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  

}
