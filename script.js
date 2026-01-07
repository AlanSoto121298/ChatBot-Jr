//Aqui declaramos las 3 variables a trabajar
const chat = document.querySelector("#chat");
const input = document.querySelector("#messageInput");
const boton = document.querySelector("#sendBtn");

//Funcion para agregar el msg al chat
function agregarMensaje(text, ClassName) {
    const div = document.createElement("div");  // Creamos un elemento "DIV"
    div.textContent = text;  // El div va ser igual al texto
    div.ClassName = ClassName;  //Agregamos clase al bott
    chat.appendChild("div");  // hacemos que el chat sea un hijo
    chat.scrollTop = chat.scrollHeight;  // Hacemos que tenga scroll el chat

}

//Funcion para que el Chat nos responda
function respuestaBot(text) {
    text = text.toLowerCase();

    if (text.includes("Hola") || text.includes("Mucho gusto")) return "Hola es un gusto conocerte";
    if (text.includes("Como estas")) return "Estoy bien y tu";
    if (text.includes("Bien")) return "Me da gusto ";
    if (text.includes("Mal")) return "Lo lamento mucho";
    if (text.includes("Que haces")) return "Tratando de mejorar";
    if (text.includes("Quien eres")) return "Soy un chat bot en crecimiento";
    if (text.includes("Ocupo ayuda")) return "Como te puedo ayudar ?";
    if(text.includes("Tonto")) return "No digas malas palabras";


    return "Estoy trabajando para poder comprenderte mejor , gracias"

}