import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PricingComponent } from './pricing/pricing.component';
import { SocialComponent } from './social/social.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { IntroComponent } from './intro/intro.component';
import { ConfigService } from './config.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ContentComponent,
    FooterComponent,
    GalleryComponent,
    HeaderComponent,
    NavigationComponent,
    PricingComponent,
    SocialComponent,
    TestimonialComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
