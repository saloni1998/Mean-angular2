import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BlogComponent } from './components/blog/blog.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import {EditBlogComponent} from './components/blog/edit-blog/edit-blog.component';
import {DeleteBlogComponent} from './components/blog/delete-blog/delete-blog.component';
import { PublicProfileComponent } from './components/public-profile/public-profile.component';

// Our Array of Angular 2 Routes
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent // Default Route
  },
  {
    path: 'dashboard',
    component: DashboardComponent, // Dashboard Route,
    canActivate: [AuthGuard] // User must be logged in to view this route
  },
  {
    path: 'register',
    component: RegisterComponent, // Register Route
    canActivate: [NotAuthGuard] // User must NOT be logged in to view this route
  },
  {
    path: 'login',
    component: LoginComponent, // Login Route
    canActivate: [NotAuthGuard] // User must NOT be logged in to view this route
  },
  {
    path: 'profile',
    component: ProfileComponent, // Profile Route
    canActivate: [AuthGuard] // User must be logged in to view this route
  },
  {
    path: 'blog',
    component: BlogComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'edit-blog/:id',
    component:EditBlogComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'delete-blog/:id',
    component:DeleteBlogComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user/:username',
    component: PublicProfileComponent, // Profile Route
    canActivate: [AuthGuard]

  },
  
  { path: '**', component: HomeComponent } // "Catch-All" Route
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }