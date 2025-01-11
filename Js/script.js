function compteARebours() {
    let dateDepart = new Date(2342, 10, 4);
    let now = new Date();
    let nbJt = Math.floor((dateDepart - now) / 1000 / 60 / 60 / 24)

    let nbS = Math.floor((nbJt / 365.25) / 100);
    let nbA = Math.floor((nbJt - (nbS * 100 * 365.25)) / 365.25);
    let nbM = Math.floor((nbJt - (((nbS * 100) + nbA) * 365.25)) / (365.25 / 12));
    let nbJ = Math.floor((nbJt - nbM) / 365.25 / 12);
    //00s00a00m00j

    document.getElementById("comptearebour").innerText = nbS.toLocaleString("fr", { minimumIntegerDigits: 2, useGrouping: false }) + ":" + nbA.toLocaleString("fr", { minimumIntegerDigits: 2, useGrouping: false }) + ":"
        + nbM.toLocaleString("fr", { minimumIntegerDigits: 2, useGrouping: false }) + ":"
        + nbJ.toLocaleString("fr", { minimumIntegerDigits: 2, useGrouping: false })
}

function modal(titre, message) {
    if (titre && message) {
        document.querySelector("#modal>#content>h3").innerText = titre;
        document.querySelector("#modal>#content>div").innerText = message;

        document.querySelector("#modal").classList.toggle("active");
    }
}


window.addEventListener("load", () => {
    compteARebours();
    document.getElementById("commander").addEventListener("click", () => {
        modal("Page en construction", "Désolé, commander n'est pas pour tout de suite");
    });
    document.querySelector("#close").addEventListener("click", () => {
        document.querySelector("#modal").classList.remove("active");
    });
    document.querySelector("#modal").addEventListener("click", () => {
        document.querySelector("#modal").classList.remove("active");
    });
})