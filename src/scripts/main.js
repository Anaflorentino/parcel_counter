
document.addEventListener('DOMContentLoaded', function() {
    // Define a data do evento
    const eventDate = new Date("Feb 26, 2025 23:00:00").getTime();

    // Atualiza o contador a cada segundo
    const countdownInterval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        // Calcula a diferença entre a data atual e a data do evento
        let currentTime = new Date().getTime();
        let timeDifference = eventDate - currentTime;

        // Seleciona os elementos do DOM onde o tempo será exibido
        let daysElement = document.querySelector("#days");
        let hoursElement = document.querySelector("#hours");
        let minutesElement = document.querySelector("#minutes");
        let secondsElement = document.querySelector("#seconds");
        let titleElement = document.querySelector("#title");

        // Calcula o tempo restante em dias, horas, minutos e segundos
        let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Atualiza os elementos do DOM com o tempo restante
        daysElement.innerHTML = `${days} :`;
        hoursElement.innerHTML = `${hours < 10 ? '0' + hours : hours} :`;
        minutesElement.innerHTML = `${minutes < 10 ? '0' + minutes : minutes} :`;
        secondsElement.innerHTML = `${seconds < 10 ? '0' + seconds : seconds} `;

        // Se o tempo for menor que 0, limpa o intervalo e exibe a mensagem de fim
        if (timeDifference < 0) {
            clearInterval(countdownInterval);
            titleElement.innerHTML = "A festa já foi T.T";
            daysElement.innerHTML = "00 :";
            hoursElement.innerHTML = "00 :";
            minutesElement.innerHTML = "00 :";
            secondsElement.innerHTML = "00 ";
        }
    }
});
