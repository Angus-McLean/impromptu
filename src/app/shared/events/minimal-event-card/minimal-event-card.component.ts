import { Component, OnInit, Input } from '@angular/core';
import { Event } from './../event/Event.model';

@Component({
  selector: 'app-minimal-event-card',
  templateUrl: './minimal-event-card.component.html',
  styleUrls: ['../../../../assets/css/styles-overrides.css']
})
export class MinimalEventCardComponent implements OnInit {

  @Input() event: Event;

  constructor() { }

  ngOnInit() {
  }

}
