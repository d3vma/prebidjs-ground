let rivraddon = require('../src/rivraddon');
global.rivraddon = rivraddon // Add rivraddon object to global for NodeJS compiler instead of window for browsers

describe('Rivraddon object', () => {
  it('Rivraddon exists in global object', () => {
    expect(global.rivraddon).toBeTruthy()
  });

  it('Assign global to window object, rivraddon exists in window object', () => {
    Object.defineProperty(global, 'window', { value: global });
    expect(window.rivraddon).toBeDefined()
  });

  it('Rivraddon exists in window object', () => {
    expect(window.rivraddon).toBeDefined()
  });
});

describe('Analytics', () => {
  it('Rivraddon object contain analytics', () => {
    expect(window.rivraddon.analytics).toBeTruthy()
  });

  it('Rivraddon analytics to have two functions', () => {
    expect(window.rivraddon.analytics).toMatchObject({
      enableAnalytics: expect.anything(),
      trackPbjsEvent: expect.anything()
    })
  });

  it('enableAnalytics function should return logs', () => {
    const consoleSpy = jest.spyOn(console, 'log')
    window.rivraddon.analytics.enableAnalytics()
    expect(consoleSpy).toHaveBeenCalledWith(
      'SIMPLAEX CODE CHALLENGE LOG rivraddon analytics.enableAnalytics'
    );
  });
});
