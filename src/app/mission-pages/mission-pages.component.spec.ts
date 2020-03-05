import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionPagesComponent } from './mission-pages.component';

describe('MissionPagesComponent', () => {
  let component: MissionPagesComponent;
  let fixture: ComponentFixture<MissionPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
