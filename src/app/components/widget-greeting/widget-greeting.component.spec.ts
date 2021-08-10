import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetGreetingComponent } from './widget-greeting.component';

describe('WidgetGreetingComponent', () => {
  let component: WidgetGreetingComponent;
  let fixture: ComponentFixture<WidgetGreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetGreetingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetGreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
