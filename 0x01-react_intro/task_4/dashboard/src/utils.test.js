import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utils Test Suite', () => {
  test('getFullYear returns the current year', () => {
    expect(getFullYear()).toBe(new Date().getFullYear());
  });

  test('getFooterCopy returns correct string for true or false argument', () => {
    expect(getFooterCopy(true)).toBe('All rights reserved');
    expect(getFooterCopy(false)).toBe('Privacy Policy');
  });

  test('getLatestNotification returns a non-empty string', () => {
    const latestNotification = getLatestNotification();
    expect(typeof latestNotification).toBe('string');
    expect(latestNotification.length).toBeGreaterThan(0);
  });
});
