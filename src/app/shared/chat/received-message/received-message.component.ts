import { Component, OnInit, Input } from '@angular/core';
import { Message } from './../message/Message.model';
import { MessagesService } from './../message/messages.service';

@Component({
  selector: 'app-received-message',
  templateUrl: './received-message.component.html',
  styleUrls: [
    './../assets/chat.component.css',
    '../../../../assets/css/styles-overrides.css'
  ]
})
export class ReceivedMessageComponent implements OnInit {

  @Input() message: Message;
  @Input() messageId: string;
  @Input() includeAlignment: boolean;

  constructor(
    private messageService: MessagesService
  ) { }

  ngOnInit() {
    if(!this.message) {
      this.message = this.messageService.getMessage(this.messageId);
    }
  }

}
