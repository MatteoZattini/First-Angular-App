import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingerCardComponent } from './singer-card.component';

describe('SingerCardComponent', () => {
  let component: SingerCardComponent;
  let fixture: ComponentFixture<SingerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingerCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
