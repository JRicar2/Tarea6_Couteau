import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutmePage } from './aboutme.page';

describe('AboutmePage', () => {
  let component: AboutmePage;
  let fixture: ComponentFixture<AboutmePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AboutmePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
