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

  pullDown() {
    $('#pull-down').animate({height:'90%'})
  }

  ngAfterViewInit() {
    console.log('triggering');
    $("#horizontal-scroll").perfectScrollbar();
  }

}
