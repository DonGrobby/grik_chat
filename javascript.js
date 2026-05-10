(function() {
    console.log("GRIK-DEBUG: Script remoto detectado y ejecutado.");

    // Creamos un objeto visual innegable
    const testBox = document.createElement('div');
    testBox.id = "grik-debug-box";
    testBox.style.position = 'fixed';
    testBox.style.top = '10px';
    testBox.style.left = '10px';
    testBox.style.width = '150px';
    testBox.style.height = '50px';
    testBox.style.backgroundColor = '#ff0000'; // Rojo puro
    testBox.style.color = '#ffffff';
    testBox.style.zIndex = '10000';
    testBox.style.display = 'flex';
    testBox.style.alignItems = 'center';
    testBox.style.justifyContent = 'center';
    testBox.style.fontWeight = 'bold';
    testBox.style.fontFamily = 'sans-serif';
    testBox.style.border = '2px solid white';
    testBox.innerText = 'JS VIVO';

    // Lo inyectamos al body
    document.body.appendChild(testBox);
    
    // Cambiamos el fondo del body a un color chillón para confirmar
    document.body.style.border = "5px solid yellow";
})();

// // Configuración de GRIK
// const MAX_MESSAGES = 3; // Límite estricto de mensajes en pantalla
// const FADE_TIME = 10000; // 10 segundos para desaparecer

// const chatContainer = document.getElementById('chat-history');

// const observer = new MutationObserver((mutations) => {
//     mutations.forEach((mutation) => {
//         if (mutation.addedNodes.length) {
//             const messages = chatContainer.querySelectorAll('.highlight-chat');
            
//             // 1. Control de cantidad (Evitar el desborde de 700 mensajes)
//             if (messages.length > MAX_MESSAGES) {
//                 for (let i = 0; i < messages.length - MAX_MESSAGES; i++) {
//                     messages[i].remove(); // Borra el más viejo (el de más arriba)
//                 }
//             }

//             // 2. Timer de auto-limpieza (Fade out individual)
//             mutation.addedNodes.forEach(node => {
//                 if (node.classList && node.classList.contains('highlight-chat')) {
//                     setTimeout(() => {
//                         node.style.transition = "opacity 0.5s ease";
//                         node.style.opacity = "0";
//                         setTimeout(() => node.remove(), 500);
//                     }, FADE_TIME);
//                 }
//             });
//         }
//     });
// });

// // Inicializar el observador
// observer.observe(chatContainer, { childList: true });

// console.log("GRIK Chat Logic Loaded: Limit " + MAX_MESSAGES);

// //https://socialstream.ninja/view.html?session=aGeGkc7VtZ&css=https://raw.githubusercontent.com/DonGrobby/grik_chat/blob/main/style.css&js=https://raw.githubusercontent.com/DonGrobby/grik_chat/blob/main/javascript.js