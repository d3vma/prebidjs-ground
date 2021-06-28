const httpRequest = require('./services/api')

let rivraddon = {}

rivraddon = {
  analytics: {
    enableAnalytics() {
      console.log('SIMPLAEX CODE CHALLENGE LOG rivraddon analytics.enableAnalytics');
    },
    trackPbjsEvent(e) {
      httpRequest.post(
        'https://tracker.simplaex-code-challenge.com',
        { "eventType": e.eventType }
      )
    }
  }
}

window.rivraddon = rivraddon;
module.exports = rivraddon
