import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventsService } from './../event/events.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  private event: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventsService : EventsService
  ) { }

  ngOnInit() {
    this.route.params
      .map(ev => ev.eventId)
      .subscribe(eventId => {
        this.event = this.eventsService.getEvent(eventId);
      });
  }

  closeModal(route:string, event?: any) {
    this.router.navigate([route]);
  }

  stopPropagation($event: any) {
    $event.stopPropagation();
  }
}
