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
        document.querySelector("#modal>#content>div").innerHTML = message;

        document.querySelector("#modal").classList.toggle("active");
    }
}

let produits = [
    { titre: "Spéléologie sur le mont Olympe", image: "Mars.png", desc: "Venez explorer les grottes spectaculaires du mont Olympe, le plus grand volcan du système solaire. Accompagné de guides experts, découvrez des formations rocheuses uniques et une vue imprenable sur la planète rouge.", prix: 19000000.00, dateDepart: new Date(2342, 11, 4, 12, 0, 0) },
    { titre: "Surf sur les anneaux de Saturne", image: "Saturne.png", desc: "Équipez-vous d’un hoverboard gravitationnel et défiez les vagues de glace et de poussière des majestueux anneaux de Saturne. Une expérience sportive et visuellement époustouflante.", prix: 39000000.00, dateDepart: new Date(2343, 1, 4, 12, 0, 0) },
    { titre: "Plongée dans les profondeurs de Neptune", image: "Neptune.png", desc: "Explorez les mystérieux océans de méthane et d’ammoniac de Neptune. Nos submersibles dernier cri vous emmèneront dans un monde bleu profond, où règne une sérénité cosmique.", prix: 79000000.00, dateDepart: new Date(2342, 12, 4, 12, 0, 0) },
    { titre: "Chasse aux diamants dans le cyclone de Jupiter", image: "Jupiter.png", desc: "Plongez dans l’atmosphère turbulente de Jupiter pour une aventure étincelante. Munis de combinaisons de haute technologie, récoltez des diamants formés par la pression extrême des tempêtes joviennes.", prix: 29000000.00, dateDepart: new Date(2343, 2, 4, 12, 0, 0) },
    { titre: "Croisière à travers le système solaire", image: "solar-system-11111_1280.jpg", desc: "Montez à bord de notre vaisseau de luxe et traversez les merveilles de notre voisinage cosmique. Une aventure panoramique parfaite pour les amateurs de découvertes et de détente.", prix: 900000000.00, dateDepart: new Date(2342, 10, 4, 12, 0, 0) },
    { titre: "Balade romantique sur la Lune", image: "Lune.png", desc: "Redécouvrez la beauté de notre satellite naturel. Admirez la Terre depuis le point de vue unique d’un clair de Terre et profitez d’un dîner sous une bulle pressurisée.", prix: 9000000.00, dateDepart: new Date(2342, 11, 15, 12, 0, 0) },
    { titre: "Trek glaciaire sur Europe", image: "Europe.png", desc: "Parcourez les étendues glacées de la lune de Jupiter. Une aventure idéale pour les amateurs de paysages polaires et de découvertes scientifiques.", prix: 59000000.00, dateDepart: new Date(2343, 3, 4, 12, 0, 0) },
    { titre: "Bivouac sous les aurores de Titan", image: "Titan.png", desc: "Installez votre camp sous les aurores boréales de Titan, la lune de Saturne. Une expérience magique entre science et nature.", prix: 69000000.00, dateDepart: new Date(2343, 4, 6, 12, 0, 0) },
    { titre: "Randonnée gravitationnelle sur Mercure", image: "Mercure.png", desc: "Vivez un lever et un coucher de Soleil à couper le souffle sur Mercure, où les journées durent des mois. Une expédition pour les aventuriers aguerris.", prix: 29000000.00, dateDepart: new Date(2343, 5, 8, 12, 0, 0) },
    { titre: "Vol libre autour d’Uranus", image: "Uranus.png", desc: "Profitez d’un vol en combinaison spatiale pour admirer les paysages renversants et les anneaux discrets de cette planète mystérieuse.", prix: 89000000.00, dateDepart: new Date(2343, 6, 15, 12, 0, 0) },
    { titre: "Safari météorique dans la ceinture d’astéroïdes", image: "Mars.png", desc: "Partez à la chasse aux météores et explorez les richesses minières de la ceinture d’astéroïdes, accompagnés par des guides spécialisés.", prix: 49000000.00, dateDepart: new Date(2343, 8, 23, 12, 0, 0) },
    { titre: "Excursion culturelle sur Vénus", image: "Venus.png", desc: "Découvrez les bases humaines installées dans les nuages de Vénus et apprenez l’histoire fascinante de la conquête de cette planète inhospitalière.", prix: 19000000.00, dateDepart: new Date(2342, 11, 29, 12, 0, 0) }
]

function createProduct(produit) {
    let sec = document.createElement("section")
    sec.classList.add("produit")

    let fig = document.createElement("figure")
    sec.appendChild(fig);
    let img = document.createElement("img")
    img.setAttribute("src", "Images/src/" + produit.image)
    img.setAttribute("alt", produit.titre)
    fig.appendChild(img);
    let figc = document.createElement("figcaption")
    figc.innerHTML = "<h2>" + produit.titre + "</h2>";
    fig.appendChild(figc);

    let asi = document.createElement("aside")
    sec.appendChild(asi);
    let div = document.createElement("div")
    //div.innerHTML = "<h2>" + produit.titre + "</h2>";
    asi.appendChild(div);

    let h = document.createElement("h4");
    h.innerHTML = "Prix : " + (produit.prix).toLocaleString("fr") + " €"
    div.appendChild(h);
    let p = document.createElement("p");
    p.innerHTML = "Départ le " + (produit.dateDepart).toLocaleString()
    div.appendChild(p);


    let btn = document.createElement("button")
    btn.classList.add("btn")
    btn.innerHTML = "Réservez maintenant";
    asi.appendChild(btn);

    let art = document.createElement("article");
    art.innerHTML = produit.desc
    sec.appendChild(art);

    return sec;
}


window.addEventListener("load", () => {
    //temps réel 
    //lance CompteARebours toutes les secondes 
    if (document.querySelector("#horloge") != null) {
        setInterval(compteARebours, 1000);
    }
    //lance horloge toutes les secondes
    if (document.querySelector("#comptearebour") != null) {
        setInterval(horloge, 1000);
    }

    let products = document.querySelector("#produits");
    if (products != null) {
        produits.forEach((produit) => {
            let prod = createProduct(produit)
            products.appendChild(prod);
            prod.querySelector(".btn").addEventListener("click", () => {
                modal(produit.titre, produit.desc + "<br><br><strong>Les réservations ne sont pas encore ouvertes !</strong>");
            })
        })
    }

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


    if (document.querySelector('.carousel') != null) {
        const track = document.querySelector('.carousel-track');
        const slides = Array.from(track.children);
        const nextButton = document.getElementById('next');
        const prevButton = document.getElementById('prev');
        let currentIndex = 0;

        function updateCarousel(index) {
            track.style.transform = `translateX(-${index * 100}%)`;
        }

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel(currentIndex);
        });

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateCarousel(currentIndex);
        });

        // Auto-play functionality
        setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel(currentIndex);
        }, 3000); // Change slide every 3 seconds
    }
})