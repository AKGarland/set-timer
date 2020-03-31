const {startTimer} = require('../src/javascript/start-timer');
const fs = require('fs');

describe('Start timer', () => {
  beforeEach(async () => {
    document.documentElement.innerHTML = await fs.readFileSync('./src/html/timer/index.html')

    delete global.window;
  });

  it('Retrieves time values from params', () => {
    global.window = {
      location: {
        pathname: '/timer',
        search: 'hour=1&minute=20&second=0'
      }
    };

    const timer = startTimer();

    console.log(timer);
    console.log(window.location.search);

    expect(timer.hour).toBe(1);
    expect(timer.minute).toBe(20);
    expect(timer.second).toBe(0);
  });
});