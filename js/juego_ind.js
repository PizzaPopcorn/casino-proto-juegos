let cards;

function goBack() {
    window.location.href = "juego_grp.html";
}

function makeCardList() {
    cards = [
        {
            ID: "c1",
            ref: document.getElementById("c1"),
            state: true
        }, {
            ID: "c2",
            ref: document.getElementById("c2"),
            state: true
        }, {
            ID: "c3",
            ref: document.getElementById("c3"),
            state: true
        }, {
            ID: "c4",
            ref: document.getElementById("c4"),
            state: true
        }, {
            ID: "c5",
            ref: document.getElementById("c5"),
            state: true
        }, {
            ID: "c6",
            ref: document.getElementById("c6"),
            state: true
        }, {
            ID: "c7",
            ref: document.getElementById("c7"),
            state: true
        }, {
            ID: "c8",
            ref: document.getElementById("c8"),
            state: true
        }, {
            ID: "c9",
            ref: document.getElementById("c9"),
            state: true
        }];

    needed = 9;
}

function claimPrize() {
    alert(`FELICIDADES: Ganaste ${active_user.prize_solo.description}`);
}