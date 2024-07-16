
let second = document.getElementById('second');

function startCountdown() {
    
    let seconds = second.value;

    
    let countdownTime = setInterval(function() {

        let minutes = Math.floor(seconds / 60);
        let remainingSeconds = seconds % 60;

        let displaytime = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;

        document.getElementById('countdown').textContent = displaytime;

        seconds--;

        if (seconds < 0) {
            clearInterval(countdownTime);
            document.getElementById('countdown').textContent = '00:00:00';
            alert('Countdown finished');
        }
    }, 1000);
}