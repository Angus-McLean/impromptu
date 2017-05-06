import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ROUTES } from './sidebar-routes';
import { SidebarService } from './sidebar.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pairwise';

declare var $:any;
@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements AfterViewInit, OnInit {
    public menuItems: any[];

    constructor(
      private sidebarService: SidebarService,
      private router: Router
    ){}

    ngOnInit() {
      this.menuItems = ROUTES;
    }

    ngAfterViewInit() {
        // $.getScript('../../assets/js/sidebar-moving-tab.js');
        this.router.events.filter(event => event instanceof NavigationEnd)
          .subscribe(nextRoute => this.sidebarService.animateRoutesTransition(nextRoute));
    }


}
