import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleMapsService } from './googlemaps.service';
import { EventsService } from './../../shared/event/events.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor(
    private googleMapsService: GoogleMapsService,
    private eventsService : EventsService,
    private router : Router,

  ) { }

  ngAfterViewInit() {
    this.googleMapsService.initGoogleMaps()

    this.eventsService.events.forEach(event => {
      this.googleMapsService.markerFromEvent(event)
        .addListener('click', ev => {
          this.router.navigate(['home', event.id])
        });
    });
  }

}
