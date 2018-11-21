import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'ad-button-slide',
  templateUrl: './ad-button-slide.component.html',
  styleUrls: ['./ad-button-slide.component.css']
})
export class AdButtonSlideComponent implements OnInit {

  @Input() icon: string;
  @Input() label: string;
  @Input() background = '#aaa';
  @Input() backgroundOver = null;
  @Input() foreground = 'white';
  @Input() foregroundOver = null;
  @Input() mini = false;

  @ViewChild('adbuttonslidediv') div: ElementRef<any>;

  constructor() { }

  ngOnInit() {
    this.initStateCss();
  }

  mouseOverButton($event) {
    this.initStateCssOver();
  }

  mouseOutButton($event) {
    this.initStateCss();
  }

  initStateCss() {
    this.changeCss('background', this.background);
    this.changeCss('color', this.foreground);
  }

  initStateCssOver() {
    this.changeCss('background', this.backgroundOver);
    this.changeCss('color', this.foregroundOver);
  }

  changeCss(property, value) {
    if (value === null) {
      return;
    }
    this.div.nativeElement.style[property] = value;
  }

}
