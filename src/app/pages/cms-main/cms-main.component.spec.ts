import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsMainComponent } from './cms-main.component';

describe('CmsMainComponent', () => {
  let component: CmsMainComponent;
  let fixture: ComponentFixture<CmsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
