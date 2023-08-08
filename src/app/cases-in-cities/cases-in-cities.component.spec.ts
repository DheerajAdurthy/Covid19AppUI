import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesInCitiesComponent } from './cases-in-cities.component';

describe('CasesInCitiesComponent', () => {
  let component: CasesInCitiesComponent;
  let fixture: ComponentFixture<CasesInCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasesInCitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasesInCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
