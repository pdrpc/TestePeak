import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelaComponent } from './parcela.component';

describe('ParcelaComponent', () => {
  let component: ParcelaComponent;
  let fixture: ComponentFixture<ParcelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
