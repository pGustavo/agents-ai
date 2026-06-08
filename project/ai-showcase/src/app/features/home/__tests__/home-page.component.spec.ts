import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HomePage } from '../pages/home-page/home-page';

describe('HomePage', () => {
  it('should render framework summary section', async () => {
    await TestBed.configureTestingModule({
      imports: [HomePage],
      providers: [provideRouter([])],
    }).compileComponents();
    const fixture = TestBed.createComponent(HomePage);
    fixture.detectChanges();
    expect((fixture.nativeElement.textContent as string)).toContain('Framework summary');
  });
});
