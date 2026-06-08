import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AppShell } from './app-shell';
import { routes } from '../../../app.routes';

describe('AppShell', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppShell],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should render navigation links', () => {
    const fixture = TestBed.createComponent(AppShell);
    fixture.detectChanges();
    const text = fixture.nativeElement.textContent as string;
    expect(text).toContain('Home');
    expect(text).toContain('Angular');
    expect(text).toContain('React');
    expect(text).toContain('Next.js');
  });
});
