import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeathermodalPage } from './weathermodal.page';

describe('WeathermodalPage', () => {
  let component: WeathermodalPage;
  let fixture: ComponentFixture<WeathermodalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WeathermodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
