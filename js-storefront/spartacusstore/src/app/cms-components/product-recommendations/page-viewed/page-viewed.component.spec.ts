import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageViewedComponent } from './page-viewed.component';

describe('PageViewedComponent', () => {
  let component: PageViewedComponent;
  let fixture: ComponentFixture<PageViewedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageViewedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageViewedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
