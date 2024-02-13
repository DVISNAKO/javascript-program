//1. создание элемента в js
let div = document.createElement("div");

//2. разместить контент в div
div.innerHTML = `<div class="child"><span class="text">text</span><button id="btn">Click</button></button></div>`;

//3. разместить div на страницу
document.body.append(div);

//4. получение элемента со страницы
let child = document.querySelector(".child");
console.log(child);

//5. добавление стилей
child.style.cssText = `
display: flex;
justify-content: center;
align-items: center;
height: 200px;
width: 350px;
flex-direction: column;
background: grey;
`;

//6. получить другой элемент через class
let text = document.querySelector(".text");
console.log(text);

text.style.cssText = `
margin-bottom: 5px;
color: white;
font-size: 20px;
`;

//7. получить другой элемент через id
let btn = document.querySelector("#btn");
console.log(btn);

//8. добавим css на элемент полученый через id
btn.style.fontSize = "20px";

//9. напишим функцию, которая примет аргумент
function myFunction(arr) {
  //10. применим функции Math
  const randomIndex = Math.floor(Math.random() * arr.length);
  //11. получим случайный индекс элемента из массива
  const randomStatus = arr[randomIndex];
  //12. пропишем условия через switch конструкцию
  switch (randomStatus) {
    case "no":
      text.textContent = "no result - hard work";
      break;
    case "bad":
      text.textContent = "bad result - hard work";
      break;
    case "good":
      text.textContent = "have a good result - hard work";
      break;
    default:
        console("no status");
  }
}

//13. создадим массив со статусами
let arr = ["no", "bad", "good"];

//14. передадим массив в функцию
//15. повесим на кнопку обработчик событий

// btn.onclick = function(){
//     myFunction(arr);
//     console.log(text);
// }

// 16. выведим рандомный текст на страницу после нажатия на кнопку

function handler1 (){
    text.textContent = 'new text';
}

function handler2 (){
    alert("new text");
}

btn.addEventListener("click", handler1);
btn.addEventListener("click", handler2);