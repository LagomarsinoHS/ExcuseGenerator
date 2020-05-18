
let who = ["The dog", "My Grandma", "His Turtle", "My bird"];
let what = ["eat", "pissed", "crushed", "broked"];
let when = ["before the class", "right in time", "when I finished", "during my lunch", "while I was praying"];


function aleatorio(item) {
    let numero = Math.floor(Math.random() * item.length);
    return item[numero];
}
let excusa = `${aleatorio(who)} ${aleatorio(what)} ${aleatorio(when)}`;
document.querySelector("#aleatorio").innerHTML = excusa;