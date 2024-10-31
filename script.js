const stageDescriptions = {
    1: "Seu projeto está na fase de processo criativo. Nessa etapa, estamos definindo os aspectos do produto para te entregar o melhor possível!",
    2: "Seu projeto está na fase de produção. Estamos trabalhando duro para criar seu produto com a máxima qualidade!",
    3: "Seu projeto está na fase de entrega. Estamos finalizando os últimos ajustes, você receberá novidades sobre a entrega em breve!"
};

const stage1Codes = ["03541"];
const stage2Codes = ["No code"];
const stage3Codes = ["54372"];
const deliveredCodes = ["24245"]; // Exemplo de código para pedido entregue

function checkOrder() {
    const orderCode = document.getElementById('orderCode').value;
    const errorMessage = document.getElementById('error-message');

    if (stage1Codes.includes(orderCode)) {
        window.location.href = `order.html?stage=1&code=${orderCode}`;
    } else if (stage2Codes.includes(orderCode)) {
        window.location.href = `order.html?stage=2&code=${orderCode}`;
    } else if (stage3Codes.includes(orderCode)) {
        window.location.href = `order.html?stage=3&code=${orderCode}`;
    } else if (deliveredCodes.includes(orderCode)) {
        window.location.href = `order.html?stage=delivered&code=${orderCode}`;
    } else {
        errorMessage.innerText = 'Código de pedido inválido!';
        errorMessage.style.display = 'block';
    }
}
