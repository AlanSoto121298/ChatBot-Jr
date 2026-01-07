//Aqui declaramos las 3 variables a trabajar
const chat = document.querySelector("#chat");
const input = document.querySelector("#messageInput");
const boton = document.querySelector("#sendBtn");

//Funcion para agregar el msg al chat
 function agregarMensaje(text,ClassName){
    const div = document.createElement("div");  // Creamos un elemento "DIV"
    div.textContent = text;  // El div va ser igual al texto
    div.ClassName = ClassName;  //Agregamos clase al bott
    chat.appendChild("div");  // hacemos que el chat sea un hijo
    chat.scrollTop = chat.scrollHeight;  // Hacemos que tenga scroll el chat

 }