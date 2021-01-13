import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopicsComponent } from './topics/topics.component';
import { Page1Component } from './page1/page1.component';
import { MainpComponent } from './mainp/mainp.component';
const appRoutes: Routes = [
  { path: 'page1', component: Page1Component },
  { path: 'home', component:TopicsComponent },
  { path: 'main', component:MainpComponent },
  { path: '**', redirectTo: 'main', pathMatch: 'full' }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopicsComponent,
    Page1Component,
    MainpComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
