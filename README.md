[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=20903456&assignment_repo_type=AssignmentRepo)
# Trabalho Prático 05 - Semanas 7 e 8

**Páginas de detalhes dinâmicas**

Nessa etapa, vamos evoluir o trabalho anterior, acrescentando a página de detalhes, conforme o  projeto escolhido. Imagine que a página principal (home-page) mostre um visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado pra a página de detalhes. A página de detalhe vai mostrar todas as informações sobre o item do seu projeto. seja esse item uma notícia, filme, receita, lugar turístico ou evento.

Leia o enunciado completo no Canvas. 

**IMPORTANTE:** Assim como informado anteriormente, capriche na etapa pois você vai precisar dessa parte para as próximas semanas. 

**IMPORTANTE:** Você deve trabalhar e alterar apenas arquivos dentro da pasta **`public`,** mantendo os arquivos **`index.html`**, **`styles.css`** e **`app.js`** com estes nomes, conforme enunciado. Deixe todos os demais arquivos e pastas desse repositório inalterados. **PRESTE MUITA ATENÇÃO NISSO.**

## Informações Gerais

- Nome: Arthur Isaque Colen de Paula
- Matricula: 897597
- Proposta de projeto escolhida: Agenda Organizacional
- Breve descrição sobre seu projeto: A ideia desse projeto é prover uma agenda que permita organizar seu dia a dia, independente do seu objetivo, já que a aplicação é versátil, abrigando trabalho, estudos e vida pessoal.

## Print da Home-Page

[!Home Page](images/homepage.png)

## Print da página de detalhes do item

[!Página de Detalhes](images/details.png)

## Cole aqui abaixo a estrutura JSON utilizada no app.js

```javascript
const dados = [
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
    },
    
    {
        "id": 7,
        "titulo": "Consulta Oftalmologista",
        "descricao": "Consulta trimestral para avaliação da condição atual do astigmatismo da minha avó. Buscar ela com antecedência e também planejar chegar mais cedo, pois o trânsito estará ruim.",
        "data": {
            "dataInicio": "2025-10-21 08:30:00",
            "dataFim": "2025-10-21 10:30:00"
        },
        "local": "Hospital Life Center",
        "categoria": "Saúde",
        "icone": "fa-solid fa-stethoscope"
    }

]
```