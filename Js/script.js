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

function modal(titre, message) {
    if (titre && message) {
        document.querySelector("#modal>#content>h3").innerText = titre;
        document.querySelector("#modal>#content>div").innerText = message;

        document.querySelector("#modal").classList.toggle("active");
    }
}


window.addEventListener("load", () => {
    setInterval(compteARebours, 1000);
    document.getElementById("commander").addEventListener("click", () => {
        modal("Page en construction", "Désolé, commander n'est pas pour tout de suite");
    });
    document.querySelectorAll(".vedettes .btn").forEach((elt) => {
        let t = (elt.parentElement.innerText).replaceAll("Réservez maintenant", "");
        // console.log(t);

        elt.addEventListener("click", () => {
            modal(t, "Désolé, commander n'est pas pour tout de suite");
        });
    })

    document.querySelector("#close").addEventListener("click", () => {
        document.querySelector("#modal").classList.remove("active");
    });
    document.querySelector("#modal").addEventListener("click", () => {
        document.querySelector("#modal").classList.remove("active");
    });
})