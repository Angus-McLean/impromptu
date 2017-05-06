import { Injectable } from '@angular/core';
import { Event } from './Event.model';
import { MyEvents } from './events.tempdata';

@Injectable()
export class EventsService {

  public events:Event[] = MyEvents;

  constructor() {
    // this.events = MyEvents;
  }

  public getEvent(eventId: string) {
    return this.events.filter(ev => ev.id === eventId)[0];
  }

}
