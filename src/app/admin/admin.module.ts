import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostComponent } from './components/post/post.component';
import { MaterialModule } from '../material/mateial.module';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,MaterialModule,SharedModule,
  ]
})
export class AdminModule { }
