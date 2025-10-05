dados = [
    {
        "id": 1,
        "titulo": "Café da Manhã com a Família",
        "descricao": "Neste dia devo separar a manhã para tomar café com a minha família. Tenho que ir à padaria e comprar os itens necessários. Além dos itens necessários, posso aproveitar para comprar algo especial para tornar o momento ainda mais agradável. A melhor padaria para essa ocasião é o Café Paddock, que fica próximo à minha casa.",
        "data": {
            "dataInicio": "2025-10-09 08:00:00",
            "dataFim": "2025-10-09 09:30:00"
        },
        "local": "Casa",
        "categoria": "Tarefa",
        "icone": "fa-solid fa-list"
    },
    {
        "id": 2,
        "titulo": "Reunião do Projeto X",
        "descricao": "Reunião semanal da equipe do Projeto X para discutir o andamento das tarefas, revisar entregas e planejar as próximas etapas. Será apresentado o protótipo da nova interface e discutidos os prazos de finalização.",
        "data": {
            "dataInicio": "2025-10-11 14:00:00",
            "dataFim": "2025-10-11 15:30:00"
        },
        "local": "Escritório Central - Sala 203",
        "categoria": "Trabalho",
        "icone": "fa-solid fa-briefcase"
    },
    {
        "id": 3,
        "titulo": "Sessão de Estudos de Python",
        "descricao": "Reservar a noite para estudar programação em Python, focando em manipulação de arquivos e consumo de APIs. Preparar anotações e resolver pelo menos 5 exercícios práticos. Separar material de apoio e manter o celular em modo silencioso para melhor concentração.",
        "data": {
            "dataInicio": "2025-10-12 19:00:00",
            "dataFim": "2025-10-12 21:30:00"
        },
        "local": "Biblioteca Municipal",
        "categoria": "Estudo",
        "icone": "fa-solid fa-book"
    },
    {
        "id": 4,
        "titulo": "Consulta Médica",
        "descricao": "Consulta de rotina com o Dr. Fernando para revisão dos exames anuais e avaliação geral da saúde. Levar todos os exames laboratoriais recentes.",
        "data": {
            "dataInicio": "2025-10-15 10:30:00",
            "dataFim": "2025-10-15 11:30:00"
        },
        "local": "Clínica Vida Saudável",
        "categoria": "Saúde",
        "icone": "fa-solid fa-stethoscope"
    },
    {
        "id": 5,
        "titulo": "Sessão de Cinema",
        "descricao": "Sessão de cinema com os amigos para assistir à estreia do novo filme do anime Kimetsu no Yaiba (Demon Slayer). Comprar os ingressos com antecedência e chegar 30 minutos antes para evitar filas.",
        "data": {
            "dataInicio": "2025-10-17 20:00:00",
            "dataFim": "2025-10-17 22:30:00"
        },
        "local": "Cine Shopping Central",
        "categoria": "Lazer",
        "icone": "fa-solid fa-film"
    },
    {
        "id": 6,
        "titulo": "Corrida do Cruzeiro",
        "descricao": "Acontecerá a corrida do Cruzeiro, um evento esportivo que reúne corredores de todas as idades e níveis de habilidade. A corrida terá início às 6h da manhã, com largada na Praça da Estação. O percurso será de 10 km, passando por pontos turísticos da cidade. É uma ótima oportunidade para praticar esportes, socializar e apreciar a paisagem urbana. Como prêmio, haverá medalhas para os primeiros colocados e brindes para todos os participantes (camisa do cabuloso e bolsa esportiva).",
        "data": {
            "dataInicio": "2025-10-19 06:00:00",
            "dataFim": "2025-10-19 09:00:00"
        },
        "local": "Praça da Estação",
        "categoria": "Atividade Física",
        "icone": "fa-solid fa-dumbbell"
    }

]

function loadMainActivities() {
    const container = document.getElementById('activities-cards')
    for (let i = 0; i < dados.length; i++) {
        let activity = dados[i];
        let inicio = activity.data.dataInicio ? activity.data.dataInicio.slice(5, 13) : ""
        let fim = activity.data.dataFim ? activity.data.dataFim.slice(5, 13) : ""
        container.innerHTML += `
        <div class="col-12 col-sm-6 col-lg-4 card-style-content">
            <div class="activity-item activity-color">
                <div class="activity-header">
                    <i class="${activity.icone}"></i>
                    <span class="text">${activity.categoria}</span>
                </div>
                <p>${inicio}h | ${fim}h</p>
            </div>
        </div>`;
    }

}

function getNextAppointment() {
    const container = document.getElementById('next-appointment');

    let minData = null;
    let nextActivity = null;
    for (let i = 0; i < dados.length; i++) {
        let activity = dados[i];
        let activityDate = new Date(activity.data.dataInicio);
        if (!minData || activityDate < minData) {
            minData = activityDate;
            nextActivity = activity;
        }
    }
    if (!nextActivity) {
        container.innerHTML = "<p>Não há próximos compromissos.</p>";
        return;
    }
    let inicio = nextActivity.data.dataInicio ? nextActivity.data.dataInicio.slice(5, 16) : "";
    let fim = nextActivity.data.dataFim ? nextActivity.data.dataFim.slice(5, 16) : "";
    container.innerHTML = `
        <header class="card-style-header">
            <h3 class="card-style-title">
                <i class="fa-regular fa-clock"></i>
                Próximo Compromisso
            </h3>
        </header>
        <div class="card-style-content">
            <div class="appointment-info">
                <div class="appointment-icon">
                    <i class="${nextActivity.icone} fa-xl"></i>
                </div>
                <div class="appointment-details">
                    <h4>${nextActivity.titulo}</h4>
                    <p class="appointment-time">${inicio} | ${fim}</p>
                    <p class="appointment-desc">${nextActivity.categoria} - ${nextActivity.local}</p>
                </div>
            </div>
        </div>
    `;
}

function totalActivities() {
    const container = document.getElementById('stats-number')
    let total = dados.length
    container.innerHTML = total
}
