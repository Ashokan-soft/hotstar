import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetaversionComponent } from './betaversion.component';

describe('BetaversionComponent', () => {
  let component: BetaversionComponent;
  let fixture: ComponentFixture<BetaversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetaversionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetaversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
