import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ad-button-slide',
  templateUrl: './ad-button-slide.component.html',
  styleUrls: ['./ad-button-slide.component.css']
})
export class AdButtonSlideComponent implements OnInit {

  @Input() icon: string;
  @Input() label: string;
  @Input() background = '#aaa';
  @Input() foreground = 'white';
  @Input() mini = false;

  constructor() { }

  ngOnInit() {
  }

}
