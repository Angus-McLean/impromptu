import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventsService } from './../event/events.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-edit-attendees',
  templateUrl: './edit-attendees.partial.html',
  styleUrls: ['./edit-attendees.component.css']
})
export class ViewAttendeesComponent implements OnInit {

  private event: any;

  constructor(
    private eventsService : EventsService
  ) { }

  ngOnInit() {
    console.log('edit-attendees');
  }

}
