import { Component, OnInit } from '@angular/core';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: 'home', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: 'process', title: 'Processos',  icon:'dvr', class: '' }
];

@Component({
  selector: 'app-sidebar-body',
  templateUrl: './sidebar-body.component.html',
  styleUrls: ['./sidebar-body.component.css']
})
export class SidebarBodyComponent implements OnInit {

    public menuItems: any[];
    
    shareLocation(location): void{
        console.log(location);
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

}
