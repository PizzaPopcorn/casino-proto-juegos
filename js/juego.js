let pUnlocked = 0;
let needed = 1;
let active_user;


function getActiveUser() {
    hot_request(`batman`, user => {
        active_user = user;
    }, err => {
        console.log(err);
        alert(err);
    })
}

function toggle_menu() {
    alert(`Hola ${active_user.name}`);
}

function updateTexts() {
    document.getElementById("pUnlocked").innerHTML = pUnlocked;
    if (pUnlocked >= needed) {
        setTimeout(() => {
            claimPrize();
        }, 495);
    }
}

function unlockCard(clicked) {
    const card = document.getElementById(clicked);
    for (i of cards) {
        if (i.ref === card) {
            if (!i.state) return;
            pUnlocked++;
            updateTexts();
            i.state = false;
            card.className = "juegos-panel_juego_unlocking";
            setTimeout(() => {
                card.className = "juegos-panel_juego_unlocked";
            }, 495);
            return;
        }
    }
}

function selectFriend() {
    hot_request(`batman`, user => {
        active_user = user;
    }, err => {
        console.log(err);
        alert(err);
    })
}