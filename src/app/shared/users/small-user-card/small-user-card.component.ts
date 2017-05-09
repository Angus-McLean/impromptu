import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from './../users.service';
import { User } from './../User.model';

@Component({
  selector: 'app-small-user-card',
  templateUrl: './small-user-card.component.html',
  styleUrls: ['./small-user-card.component.css']
})
export class SmallUserCardComponent implements OnInit {

  @Input() user: User;
  @Input() userId: string;
  @Input() actions: string[] = [];

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    if(this.userId) {
      this.user = this.usersService.getUser(this.userId);
    }
  }

}
