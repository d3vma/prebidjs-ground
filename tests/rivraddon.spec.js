let rivraddon = require('../src/rivraddon');
global.rivraddon = rivraddon // Add rivraddon object to global for NodeJS compiler instead of window for browsers

describe('Rivraddon object', () => {
  it('Rivraddon exists in Window object', () => {
    expect(global.rivraddon).toBeTruthy()
  });
});

describe('Analytics', () => {
  it('Rivraddon object contain analytics', () => {
    expect(global.rivraddon.analytics).toBeTruthy()
  });

  it('Rivraddon analytics to have two functions', () => {
    expect(global.rivraddon.analytics).toMatchObject({
      enableAnalytics: expect.anything(),
      trackPbjsEvent: expect.anything()
    })
  });

  it('enableAnalytics function should return logs', () => {
    const consoleSpy = jest.spyOn(console, 'log')
    global.rivraddon.analytics.enableAnalytics()
    expect(consoleSpy).toHaveBeenCalledWith(
      'SIMPLAEX CODE CHALLENGE LOG rivraddon analytics.enableAnalytics'
    );
  });
});
