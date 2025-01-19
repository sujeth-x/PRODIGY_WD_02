<script>
        let minutes = 0, seconds = 0, milliseconds = 0;
        let timer;

        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');
        const millisecondsElement = document.getElementById('milliseconds');

        function updateDisplay() {
            minutesElement.textContent = String(minutes).padStart(2, '0');
            secondsElement.textContent = String(seconds).padStart(2, '0');
            millisecondsElement.textContent = String(milliseconds).padStart(2, '0');
        }

        function startStopwatch() {
            if (timer) return; // Prevent multiple timers

            timer = setInterval(() => {
                milliseconds += 1;

                if (milliseconds >= 100) {
                    milliseconds = 0;
                    seconds += 1;
                }

                if (seconds >= 60) {
                    seconds = 0;
                    minutes += 1;
                }

                updateDisplay();
            }, 10);
        }

        function stopStopwatch() {
            clearInterval(timer);
            timer = null;
        }

        function resetStopwatch() {
            stopStopwatch();
            minutes = 0;
            seconds = 0;
            milliseconds = 0;
            updateDisplay();
        }

        document.getElementById('start').addEventListener('click', startStopwatch);
        document.getElementById('stop').addEventListener('click', stopStopwatch);
        document.getElementById('reset').addEventListener('click', resetStopwatch);

        updateDisplay();
    </script>
