import { Component, OnInit } from '@angular/core';
import { EventsService } from 'app/shared/events/event/events.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {

  constructor(
    private eventsService: EventsService
  ) { }

  ngOnInit() {
  }

}
