const quotes = [{
        quote: "성공으로 가는 길과 실패로 가는 길을 거의 같다.",
        author: "Colin R. Davies",
    },
    {
        quote: "창의적으로 실패하는 것이 모방해서 성공하는 것보다 낫다",
        author: "Herman Melville",
    },
    {
        quote: "성공이란 열정을 잃지 않고 실패에서 실패로 걸어가는 것이다.",
        author: "Winston Churchill",
    },
    {
        quote: "모든 성과는 요령을 피우지 않을 때 생긴다. ",
        author: "Michael John Bobak",
    },
    {
        quote: "성공은 주로 성공을 찾느라 바쁜 사람들에게 찾아온다.",
        author: "Henry David Thoreau",
    },
    {
        quote: "무언가를 시작하려면 말은 멈추고 행동해야 한다.",
        author: "Walt Disney",
    },
    {
        quote: "성공은 행복을 여는 열쇠가 아니다. 행복이 성공을 여는 열쇠다. 당신이 하고 있는 것을 사랑하면, 당신은 성공할 것이다.",
        author: "Albert Schweitzer",
    },
    {
        quote: "성공은 행동과 연결되어 있다. 성공적인 사람들은 계속해서 움직인다. ",
        author: "Conrad Hilton",
    },
    {
        quote: "성공하기 위해서, 우리는 먼저 우리 자신이 할 수 있다는 것을 믿어야 한다.",
        author: "Nikos Kazantzakis",
    },
    {
        quote: "노력 전에 성공이 나오는 곳은 사전뿐이다.",
        author: "Vidal Sassoon",
    },
];
const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");
const quoteDiv = document.querySelector("#quotes");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

function handleQuoteOver() {
    author.classList.remove("hidden");
}

function handleQuoteOut() {
    author.classList.add("hidden");
}

quoteDiv.addEventListener("mouseover", handleQuoteOver);
quoteDiv.addEventListener("mouseout", handleQuoteOut);