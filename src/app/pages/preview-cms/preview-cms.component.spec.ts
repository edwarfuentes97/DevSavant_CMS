import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCmsComponent } from './preview-cms.component';

describe('PreviewCmsComponent', () => {
  let component: PreviewCmsComponent;
  let fixture: ComponentFixture<PreviewCmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewCmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
