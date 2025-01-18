//créer le compte à rebours en créant une date à partir de la soustraction de la date d'aujourd'hui à la date de départ.
function compteARebours() {
    let dateDepart = (new Date(2342, 10, 4, 12, 0, 0));
    let now = (new Date());

    let test = new Date((dateDepart.getFullYear() - now.getFullYear()), (dateDepart.getMonth() - now.getMonth()), (dateDepart.getDate() - now.getDate()), (dateDepart.getHours() - now.getHours()), (dateDepart.getMinutes() - now.getMinutes()), (dateDepart.getSeconds() - now.getSeconds()));

    document.getElementById("comptearebour").innerText =
        test.getFullYear().toLocaleString("fr", { minimumIntegerDigits: 3, useGrouping: false }) + " ans "
        + test.getMonth().toLocaleString("fr", { minimumIntegerDigits: 2, useGrouping: false }) + " mois "
        + test.getDate().toLocaleString("fr", { minimumIntegerDigits: 2, useGrouping: false }) + " jours "
        + test.getHours().toLocaleString("fr", { minimumIntegerDigits: 2, useGrouping: false }) + " heures "
        + test.getMinutes().toLocaleString("fr", { minimumIntegerDigits: 2, useGrouping: false }) + " minutes "
        + test.getSeconds().toLocaleString("fr", { minimumIntegerDigits: 2, useGrouping: false }) + " secondes "
}

//affiche l'horloge
function horloge() {
    let h = new Date();
    document.getElementById("horloge").innerText =
        h.getHours().toLocaleString("fr", { minimumIntegerDigits: 2, useGrouping: false }) + ":"
        + h.getMinutes().toLocaleString("fr", { minimumIntegerDigits: 2, useGrouping: false }) + ":"
        + h.getSeconds().toLocaleString("fr", { minimumIntegerDigits: 2, useGrouping: false });
}

//fonction qui permet de créer une boîte de dialogue plus sympatique que celle de js
function modal(titre, message) {
    if (titre && message) {
        document.querySelector("#modal>#content>h3").innerText = titre;
        document.querySelector("#modal>#content>div").innerText = message;

        document.querySelector("#modal").classList.toggle("active");
    }
}


window.addEventListener("load", () => {
    //temps réel 
    //lance CompteARebours toutes les secondes 
    setInterval(compteARebours, 1000);
    //lance horloge toutes les secondes
    setInterval(horloge, 1000);

    // Création d'une boîte de dialogue quand on click sur le boutton commander
    document.getElementById("commander").addEventListener("click", () => {
        modal("Page en construction", "Désolé, commander n'est pas pour tout de suite");
    });

    //on récupère la liste des boutons des produits vedettes et on ajoute l'ouverture du modal avec un texte personnalisé
    document.querySelectorAll(".vedettes .btn").forEach((elt) => {
        let t = (elt.parentElement.innerText).replaceAll("Réservez maintenant", "");
        // console.log(t);

        elt.addEventListener("click", () => {
            modal(t, "Désolé, commander n'est pas pour tout de suite");
        });
    })
    //evenement pour fermer la modal
    document.querySelector("#close").addEventListener("click", () => {
        document.querySelector("#modal").classList.remove("active");
    });
    document.querySelector("#modal").addEventListener("click", () => {
        document.querySelector("#modal").classList.remove("active");
    });
})