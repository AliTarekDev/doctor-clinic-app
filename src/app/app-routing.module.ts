import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { BlogContentComponent } from './blog-content/blog-content.component';
import { AboutComponent } from './components/about/about.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { BookComponent } from './components/book/book.component';
import { DoctorAreaComponent } from './components/doctor-area/doctor-area.component';
import { MainComponent } from './components/main/main.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: OurServicesComponent},
  {path: 'articles', component: ArticlesComponent},
  {path: 'join', component: AppointmentComponent},
  {path: 'doctors', component: DoctorAreaComponent},
  {path: 'book-now', component: BookComponent},
  {path: 'article/:id', component: ArticleComponent},
  {path: 'article-content/:id', component: BlogContentComponent},
  /*{path: 'book-now', component: WorkSoonComponent}*/
  {path: '**', component: NotFoundComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
