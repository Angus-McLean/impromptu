import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [
    './search.component.css',
    '../../../assets/css/styles-overrides.css'
  ]
})
export class SearchComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  closeModal(route:string, event?: any) {
    this.router.navigate([route]);
  }

  stopPropagation($event: any) {
    $event.stopPropagation();
  }

}
