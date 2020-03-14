function getTimeRemaining(startTime) {
    const t = Date.parse(new Date()) - Date.parse(startTime);

    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
}

function initializeClock(startTime) {
    const daysSpan = document.querySelector('#days');
    const hoursSpan = document.querySelector('#hours');
    const minutesSpan = document.querySelector('#minutes');
    const secondsSpan = document.querySelector('#seconds');

    function updateClock() {
        const t = getTimeRemaining(startTime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if(t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
}

const startTime = new Date("March 13 2020 23:36:00");
initializeClock(startTime);