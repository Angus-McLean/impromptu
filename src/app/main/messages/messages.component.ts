import { Component, OnInit, AfterViewInit } from '@angular/core';

declare const $;

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: [
    './messages.component.css',
    '../../../assets/css/styles-overrides.css'
  ]
})
export class MessagesComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('triggering');
    $("#horizontal-scroll").perfectScrollbar();
    $("#inner").perfectScrollbar();
  }

}
