import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetImageComponent } from './widget-image.component';

describe('WidgetImageComponent', () => {
  let component: WidgetImageComponent;
  let fixture: ComponentFixture<WidgetImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
