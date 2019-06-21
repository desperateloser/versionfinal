import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/home', title: 'Accueil',  icon: 'home', class: '' },
    { path: '/user-profile', title: 'Mon profil',  icon:'person', class: '' },
    { path: '/users', title: 'Trombinoscope',  icon:'perm_contact_calendar', class: '' },
    { path: '/documents', title: 'Bibliothéque',  icon:'library_books', class: '' },
    { path: '/no-path', title: 'Contact admin ' ,  icon:'markunread' ,class: '' },
    { path: '/feedback', title: 'Feedback' ,  icon:'' ,class: '' },
    { path: '/request', title: 'Demande de congés' ,  icon:'' ,class: '' },
    { path: '/manageusers', title: 'Gérer membres',  icon:'supervisor_account', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
