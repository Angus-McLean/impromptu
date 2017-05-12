import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventsService } from './../event/events.service';
import { EventCardComponent } from './../event-card/event-card.component';
import { Subject, Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-view-general',
  templateUrl: './view-general.partial.html',
  styleUrls: ['../../../../assets/css/styles-overrides.css']
})
export class ViewGeneralComponent implements OnInit {

  private event: any;
  private isEditing: Observable<boolean>;

  constructor(
    private eventsService : EventsService,
    @Inject(forwardRef(() => EventCardComponent)) private _parent:EventCardComponent
  ) { }

  ngOnInit() {
    console.log('view-general');
    this.isEditing = this._parent.isEditing.share();
    console.log(this.isEditing);
    // this.isEditing.do(sdf => console.log(sdf))
    // this.isEditing.subscribe(sdf => console.log(sdf))
  }

}
