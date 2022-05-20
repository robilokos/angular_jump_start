import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobertLokosComponent } from './robert-lokos.component';

describe('RobertLokosComponent', () => {
  let component: RobertLokosComponent;
  let fixture: ComponentFixture<RobertLokosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RobertLokosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RobertLokosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
