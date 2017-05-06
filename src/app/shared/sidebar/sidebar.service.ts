import { Injectable } from '@angular/core';

declare const $: any;

@Injectable()
export class SidebarService {

  initBarAnimation ($this: any) {
    let $current_li_distance: number;
    try {
      $current_li_distance = $this.parent('li').position().top - 10;
    } catch (e) {
      setTimeout(() => { this.initBarAnimation($this); }, 100);
    }

    const button_text = $this.html();

    $(".moving-tab").css("width", 230 + "px");

    $('.moving-tab').css({
      'transform':'translate3d(0,' + $current_li_distance + 'px, 0)',
      'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
    });

    setTimeout(function(){
      $('.moving-tab').html(button_text);
    }, 100);
  }

  animateRoutesTransition (next) {
    let activeLink = $('.sidebar .nav').find('li a[href="'+next.url+'"]');
    this.initBarAnimation(activeLink);
  }
}
