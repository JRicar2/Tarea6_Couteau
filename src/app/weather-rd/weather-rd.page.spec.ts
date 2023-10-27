import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherRDPage } from './weather-rd.page';

describe('WeatherRDPage', () => {
  let component: WeatherRDPage;
  let fixture: ComponentFixture<WeatherRDPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WeatherRDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
