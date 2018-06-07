import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveBlockComponent } from './live-block.component';

describe('LiveBlockComponent', () => {
  let component: LiveBlockComponent;
  let fixture: ComponentFixture<LiveBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
