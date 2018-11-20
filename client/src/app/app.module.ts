import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CardComponent } from './components/card/card.component';
import { LogoComponent } from './components/logo/logo.component';
import { SocialComponent } from './components/social/social.component';
import { HeroTextComponent } from './pages/home/hero-text/hero-text.component';
import { ParallaxDirective } from './parallax.directive';
import { PostPreviewComponent } from './pages/blog/post-preview/post-preview.component';
import { BlogHeaderComponent } from './pages/blog/blog-header/blog-header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HomeComponent,
    BlogComponent,
    CardComponent,
    LogoComponent,
    SocialComponent,
    HeroTextComponent,
    ParallaxDirective,
    PostPreviewComponent,
    BlogHeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
