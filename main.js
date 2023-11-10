// Obtendo os elementos de input de range para as componentes de cor (vermelho, verde e azul)
const redRange = document.querySelector('.red')
const greenRange = document.querySelector('.green')
const blueRange = document.querySelector('.blue')

// Obtendo o elemento onde a cor do usuário será exibida
const userColor = document.querySelector('.user')

// Adicionando ouvintes de eventos para os inputs de range
redRange.addEventListener('input', updateColor)
greenRange.addEventListener('input', updateColor)
blueRange.addEventListener('input', updateColor)

// Função chamada quando ocorrem alterações em qualquer um dos inputs de range
function updateColor() {
    const redValue = redRange.value;
    const greenValue = greenRange.value;
    const blueValue = blueRange.value;

    // Atualizando a cor do elemento de exibição do usuário com base nos valores obtidos
    userColor.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}

// Função para gerar um número aleatório
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

 // Gerar números aleatórios para red, green e blue
const red = getRandomNumber(0, 255);
const green = getRandomNumber(0, 255);
const blue = getRandomNumber(0, 255);

//
const randomColor = document.querySelector('.random');

 //
 const redRandom = red;
 const greenRandom = green;
 const blueRandom = blue;

 //
 randomColor.style.backgroundColor = `rgb(${redRandom}, ${greenRandom}, ${blueRandom})`;