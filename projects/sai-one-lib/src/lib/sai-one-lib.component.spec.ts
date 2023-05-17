import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaiOneLibComponent } from './sai-one-lib.component';

describe('SaiOneLibComponent', () => {
  let component: SaiOneLibComponent;
  let fixture: ComponentFixture<SaiOneLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaiOneLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaiOneLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
