const success = {
    message: "Your action was successful!",
    type: "suc",
};

const info = {
    message: "Here is some important information for you.",
    type: "inf",
};

const warning = {
    message: "Please be cautious with this action.",
    type: "war",
};

const fail = {
    message: "An error occurred. Please try again.",
    type: "fai",
};

function showPopup(notification) {
    const popupbox = document.getElementById('popupbox');
    const popup = document.createElement('div');
    popup.classList.add('popup', notification.type);

    const icon = document.createElement('i');
    switch (notification.type) {
        case 'suc':
            icon.classList.add('fas', 'fa-check-circle');
            break;
        case 'inf':
            icon.classList.add('fas', 'fa-info-circle');
            break;
        case 'war':
            icon.classList.add('fas', 'fa-exclamation-circle');
            break;
        case 'fai':
            icon.classList.add('fas', 'fa-times-circle');
            break;
    }

    const text = document.createElement('span');
    text.textContent = notification.message;

    popup.appendChild(icon);
    popup.appendChild(text);
    popupbox.appendChild(popup);

    setTimeout(() => {
        popup.classList.add('fade-out');
        setTimeout(() => popup.remove(), 500);
    }, 3000);
}
