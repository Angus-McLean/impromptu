import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventsService } from './../event/events.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-messages',
  template: '<app-minimal-chat></app-minimal-chat>',
  styleUrls: ['../../../../assets/css/styles-overrides.css']
})
export class MessagesComponent implements OnInit {

  private event: any;

  constructor(
    private eventsService : EventsService
  ) { }

  ngOnInit() {
    console.log('messages');
  }

}
