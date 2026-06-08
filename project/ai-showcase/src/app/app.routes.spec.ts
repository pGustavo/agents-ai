import { routes } from './app.routes';

describe('app routes', () => {
  it('should define home and framework routes', () => {
    const paths = routes.map((route) => route.path);
    expect(paths).toContain('');
    expect(paths).toContain('angular');
    expect(paths).toContain('react');
    expect(paths).toContain('nextjs');
  });
});
