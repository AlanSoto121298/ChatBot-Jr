//Aqui declaramos las 3 variables a trabajar
const chat = document.querySelector("#chat");
const input = document.querySelector("#messageInput");
const boton = document.querySelector("#sendBtn");

//Funcion para agregar el msg al chat
function agregarMensaje(text, className) {
    const div = document.createElement("div");  // Creamos un elemento "DIV"
    div.textContent = text;  // El div va ser igual al texto
    div.className = className;  //Agregamos clase al bott
    chat.appendChild(div);  // hacemos que el chat sea un hijo
    chat.scrollTop = chat.scrollHeight;  // Hacemos que tenga scroll el chat

}

//Funcion para que el Chat nos responda
function respuestaBot(text) {
    text = text.toLowerCase();

    if (text.includes("hola") || text.includes("mucho gusto")) return "Hola es un gusto conocerte";
    if (text.includes("soy tu creador")) return "Es un gusto que me hagas mejorar Alan";
    if (text.includes("como estas")) return "Estoy bien y tu";
    if (text.includes("bien")) return "Me da gusto ";
    if (text.includes("mal")) return "Lo lamento mucho";
    if (text.includes("que haces")) return "Tratando de mejorar";
    if (text.includes("quien eres")) return "Soy un chat bot en crecimiento";
    if (text.includes("ocupo ayuda")) return "Como te puedo ayudar ?";
    if(text.includes("tonto")) return "No digas malas palabras";
    if(text.includes("adios")) return "cuidate";


    return "Estoy trabajando arduamente  para poder comprenderte mejor , gracias"

}

//Funcion para mandar el MSG

function mandarMensaje(){
    const text = input.value;
    if(text === "") return;  // Si no ponen nada no lo mandamos

    //Mensaje de la persona (usamos la primer funcion)

    agregarMensaje(text, "user");

    //Agregamos un setTimeOut para un tiempo de respuesta(aqui podemos juguetearle con el tiempo)

    setTimeout(() =>{
        const reply = respuestaBot(text);
        agregarMensaje(reply, "bot");
    },300);

    input.value = " ";  // aqui limpiamos el input xd

}
  

//un evento click pa mandar el msg de la funcion

boton.addEventListener("click",mandarMensaje);

//Evento keyup para mandar el msg al soltar boton

input.addEventListener("keyup",function (a) {
    if(a.key === "Enter"){
        mandarMensaje();
    }
})

