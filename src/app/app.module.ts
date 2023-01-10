import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderContentComponent } from './components/header-content/header-content.component';
import { BookNowComponent } from './components/book-now/book-now.component';
import { MainComponent } from './components/main/main.component';
import { TmNgOdometerModule } from 'tm-ng-odometer'; 
import { ServicesComponent } from './components/services/services.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FactsAreaComponent } from './components/facts-area/facts-area.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FeedbackAreaComponent } from './components/feedback-area/feedback-area.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PartenersComponent } from './components/parteners/parteners.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { BlogComponent } from './components/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { OurVisionComponent } from './coomponents/our-vision/our-vision.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { DoctorAreaComponent } from './components/doctor-area/doctor-area.component';
import { BookComponent } from './components/book/book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkSoonComponent } from './work-soon/work-soon.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import {  RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { ArticleComponent } from './article/article.component';
import { BlogContentComponent } from './blog-content/blog-content.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderContentComponent,
    BookNowComponent,
    MainComponent,
    ServicesComponent,
    AboutUsComponent,
    FactsAreaComponent,
    DoctorsComponent,
    FeedbackAreaComponent,
    PartenersComponent,
    QuestionsComponent,
    BlogComponent,
    FooterComponent,
    AboutComponent,
    OurVisionComponent,
    OurServicesComponent,
    ArticlesComponent,
    AppointmentComponent,
    DoctorAreaComponent,
    BookComponent,
    WorkSoonComponent,
    NotFoundComponentComponent,
    ArticleComponent,
    BlogContentComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TmNgOdometerModule,
    CarouselModule,
    SlickCarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
