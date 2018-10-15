import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPanelHeadComponent } from './main-panel-head.component';

describe('MainPanelHeadComponent', () => {
  let component: MainPanelHeadComponent;
  let fixture: ComponentFixture<MainPanelHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPanelHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPanelHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
