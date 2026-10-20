import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferanceDetails } from './conferance-details';

describe('ConferanceDetails', () => {
  let component: ConferanceDetails;
  let fixture: ComponentFixture<ConferanceDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConferanceDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(ConferanceDetails);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('id', '1');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the conference matching the route id', () => {
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('angular');
    expect(fixture.nativeElement.textContent).toContain('2023-01-01');
    expect(fixture.nativeElement.textContent).toContain('tunis');
  });

  it('should show a not-found message for an unknown id', () => {
    fixture.componentRef.setInput('id', '99');
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Conférence introuvable');
  });
});
