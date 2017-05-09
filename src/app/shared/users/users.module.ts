import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersService } from './users.service';
import { SmallUserCardComponent } from './small-user-card/small-user-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SmallUserCardComponent],
  exports: [ SmallUserCardComponent ],
  providers: [ UsersService ]
})
export class UsersModule { }
