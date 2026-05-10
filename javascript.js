(function() {
    console.log("GRIK-JS: Iniciando sistema de control de flujo...");

    const MAX_MESSAGES = 3; 
    const FADE_TIME = 10000;

    const startGrikLogic = () => {
        const chatContainer = document.getElementById('chat-history');
        
        // Si SocialStream aún no crea el div, esperamos 500ms y reintentamos
        if (!chatContainer) {
            console.warn("GRIK-JS: #chat-history no encontrado. Reintentando...");
            setTimeout(startGrikLogic, 500);
            return;
        }

        console.log("%c GRIK-JS: CONECTADO AL CHAT ", "background: #00f2ff; color: #000; font-weight: bold;");

        const observer = new MutationObserver((mutations) => {
            let needsCleanup = false;

            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach(node => {
                    // Validamos que sea un elemento real y tenga la clase correcta
                    if (node.nodeType === 1 && node.classList.contains('highlight-chat')) {
                        needsCleanup = true;
                        
                        // Timer de auto-limpieza (Fade out)
                        setTimeout(() => {
                            node.style.transition = "all 0.5s ease";
                            node.style.opacity = "0";
                            node.style.transform = "translateX(20px)";
                            setTimeout(() => { if(node.parentNode) node.remove(); }, 500);
                        }, FADE_TIME);
                    }
                });
            });

            // Si se añadieron mensajes, verificamos el límite de 3
            if (needsCleanup) {
                const messages = Array.from(chatContainer.querySelectorAll('.highlight-chat'));
                if (messages.length > MAX_MESSAGES) {
                    const excess = messages.length - MAX_MESSAGES;
                    console.log(`GRIK-JS: Limpiando ${excess} mensajes excedentes.`);
                    for (let i = 0; i < excess; i++) {
                        messages[i].remove(); // Borra los más antiguos
                    }
                }
            }
        });

        observer.observe(chatContainer, { childList: true });
    };

    // Ejecutar cuando el DOM base esté listo
    if (document.readyState === "complete" || document.readyState === "interactive") {
        startGrikLogic();
    } else {
        window.addEventListener("DOMContentLoaded", startGrikLogic);
    }
})();