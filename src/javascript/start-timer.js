const startTimer = () => {
  const queryPairs = window.location.search.split('&');

  let params = {};
  queryPairs.forEach(pair => {
    pair = pair.split('=');
    params[pair[0]] = decodeURIComponent(pair[1] || 0);
  });
  let json = JSON.parse(JSON.stringify(params));

  const hour = json.hour;
  const minute = json.minute;
  const second = json.second;
  const timer = new Timer(hour, minute, second);

  return timer;
};

class Timer  {
  constructor(hour, minute, second) {
    this.hour = parseInt(hour, 10);
    this.minute = parseInt(minute, 10);
    this.second = parseInt(second, 10);
  }
}

module.exports = {
  startTimer: startTimer
};