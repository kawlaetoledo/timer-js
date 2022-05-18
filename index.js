(function () {

    let temporizador = document.getElementById('temporizador');

    let botoes = {
        iniciar: document.getElementById('btn-iniciar'),
        pausar: document.getElementById('btn-pausar'),
        zerar: document.getElementById('btn-zerar')
    }

    botoes.iniciar.addEventListener('click', (e) => {
        e.preventDefault();
        iniciar();
    });

    botoes.pausar.addEventListener('click', (e) => {
        e.preventDefault();
        parar();
    });

    botoes.zerar.addEventListener('click', (e) => {
        e.preventDefault();
        zerar();
    });

    // var cronometro:
    let ss = 0;
    let mm = 0;
    let hh = 0;
    let cron;

    function iniciar() {
        cron = setInterval(() => {
            timer();
        }, 1000);
    }

    function parar() {
        clearInterval(cron);

    }

    function zerar() {
        parar();
        ss = 0;
        mm = 0;
        hh = 0;

        atualizarTempo();
    }

    function timer() {
        ss++;

        if (ss == 60) {
            mm++;
            ss = 0;
        } else if (mm == 60) {
            hh++;
            mm = 0;
        }
        atualizarTempo();
    }

    function retornarTempoAtualizado() {
        var segundos = (ss < 10) ? "0" + ss : ss;
        var minutos = (mm < 10) ? "0" + mm : mm;
        var horas = (hh < 10) ? "0" + hh : hh;

        return `${horas}:${minutos}:${segundos}`;
    }

    function atualizarTempo() {
        temporizador.textContent = retornarTempoAtualizado();
    }

})()