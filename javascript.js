// Configuración de GRIK
const MAX_MESSAGES = 3; // Límite estricto de mensajes en pantalla
const FADE_TIME = 10000; // 10 segundos para desaparecer

const chatContainer = document.getElementById('chat-history');

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            const messages = chatContainer.querySelectorAll('.highlight-chat');
            
            // 1. Control de cantidad (Evitar el desborde de 700 mensajes)
            if (messages.length > MAX_MESSAGES) {
                for (let i = 0; i < messages.length - MAX_MESSAGES; i++) {
                    messages[i].remove(); // Borra el más viejo (el de más arriba)
                }
            }

            // 2. Timer de auto-limpieza (Fade out individual)
            mutation.addedNodes.forEach(node => {
                if (node.classList && node.classList.contains('highlight-chat')) {
                    setTimeout(() => {
                        node.style.transition = "opacity 0.5s ease";
                        node.style.opacity = "0";
                        setTimeout(() => node.remove(), 500);
                    }, FADE_TIME);
                }
            });
        }
    });
});

// Inicializar el observador
observer.observe(chatContainer, { childList: true });

console.log("GRIK Chat Logic Loaded: Limit " + MAX_MESSAGES);