import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { SidebarHeadComponent } from './sidebar-head/sidebar-head.component';
import { SidebarBodyComponent } from './sidebar-body/sidebar-body.component';
import { MainPanelHeadComponent } from './main-panel-head/main-panel-head.component';
import { MainPanelBodyComponent } from './main-panel-body/main-panel-body.component';
import { ChartModule } from 'angular-highcharts';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SidebarComponent,
    MainPanelComponent,
    SidebarHeadComponent,
    SidebarBodyComponent,
    MainPanelHeadComponent,
    MainPanelBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
