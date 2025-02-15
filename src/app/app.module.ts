import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { CreateStoryComponent } from './create-story/create-story.component';
import { SprintPlanComponent } from './sprint-plan/sprint-plan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ListingPageComponent,
    CreateStoryComponent,
    SprintPlanComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
