import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdButtonSlideComponent } from './ad-button-slide.component';

describe('AdButtonSlideComponent', () => {
  let component: AdButtonSlideComponent;
  let fixture: ComponentFixture<AdButtonSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdButtonSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdButtonSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
