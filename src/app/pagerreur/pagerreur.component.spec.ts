import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagerreurComponent } from './pagerreur.component';

describe('PagerreurComponent', () => {
  let component: PagerreurComponent;
  let fixture: ComponentFixture<PagerreurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagerreurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagerreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
