import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPanelBodyComponent } from './main-panel-body.component';

describe('MainPanelBodyComponent', () => {
  let component: MainPanelBodyComponent;
  let fixture: ComponentFixture<MainPanelBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPanelBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPanelBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
