import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventsService } from './../event/events.service';
import { Subject, Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['../../../../assets/css/styles-overrides.css']
})
export class EventCardComponent implements OnInit {

  private event: any;
  editClick = new Subject()
  isEditing: Observable<boolean> = this.editClick.asObservable().scan(a => !a);

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
