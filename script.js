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

    if (text.includes("hola") || text.includes("mucho gusto")) return "Hola!!!  un gusto conocerte soy Chat AMSR";
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


function mandarMensaje() {
    const text = input.value;

    if (text === "") return; //si esta vacio no se manda

    //mensaje de la persona
    agregarMensaje(text, "user");

    //ponemos algo que simule tardar una respuesta
    setTimeout(() => {
        const reply = respuestaBot(text);
        agregarMensaje(reply, "bot");
    }, 300);

    input.value = "";  //limpiamos el input xd
}

//evento click como siempre
boton.addEventListener("click", mandarMensaje);

//Evento presionar enter 
input.addEventListener("keyup", function (a) {
    if (a.key === "Enter") {
        mandarMensaje();
    }
});
