function redirectToWhatsApp() {
    const message = encodeURIComponent("Oi, quero ser revendedor da Renen Store");
    const phone = "5583991534841";
    const url = `https://wa.me/${phone}?text=${message}`;
    window.location.href = url;
}

function closePage() {
    // Create a modal overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    `;

    // Create the access denied message
    const message = document.createElement('div');
    message.style.cssText = `
        background: white;
        padding: 20px;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    `;
    message.innerHTML = `
        <h2 style="color: #f44336; margin-bottom: 10px;">Acesso Negado</h2>
        <p style="color: #555;">Você decidiu não se tornar revendedor da Renen Store.</p>
    `;

    overlay.appendChild(message);
    document.body.appendChild(overlay);

    // Disable all interactions
    document.body.style.overflow = 'hidden';
    document.body.style.pointerEvents = 'none';

    // Automatically close the page after 3 seconds
    setTimeout(() => {
        window.close();
    }, 3000);
}
