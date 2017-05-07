import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventsService } from './../event/events.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-view-attendees',
  templateUrl: './view-attendees.partial.html',
  styleUrls: ['./view-attendees.component.css']
})
export class ViewAttendeesComponent implements OnInit {

  private event: any;

  constructor(
    private eventsService : EventsService
  ) { }

  ngOnInit() {
    console.log('view-attendees');
  }

}
