import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full'},
	{ path: 'home', component: HomeComponent },
	{	path: 'blog', component: BlogComponent },
	{	path: 'post/:id', component: PostComponent },
	{ path: '404', component: NotfoundComponent },
	{ path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
