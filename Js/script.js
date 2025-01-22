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
    // console.log(typeof (message) == "object");
    document.querySelector("#modal>#content>div").classList.remove("products")
    document.querySelector("#modal>#content>div").setAttribute("id", "")
    if (titre && typeof (message) == "object") {
        //console.log("test");
        document.querySelector("#modal>#content>h3").innerText = titre;
        document.querySelector("#modal>#content>div").innerHTML = ""
        document.querySelector("#modal>#content>div").setAttribute("id", "produits")
        document.querySelector("#modal>#content>div").classList.add("products")
        document.querySelector("#modal>#content>div").appendChild(message)
    }
    else if (titre && message) {
        document.querySelector("#modal>#content>h3").innerText = titre;
        document.querySelector("#modal>#content>div").innerHTML = message;


    }
    if (!document.querySelector("#modal").classList.contains("active")) {
        document.querySelector("#modal").classList.add("active");
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

function filtrerProduitsParDate(dateCible) {
    return produits.filter(produit => produit.dateDepart.getTime() === dateCible.getTime());
}


function createProduct(produit, btn) {
    if (typeof (btn) != "boolean") {
        btn = true
    }
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

    if (btn) {
        let btn = document.createElement("button")
        btn.classList.add("btn")
        btn.innerHTML = "Réservez maintenant";
        asi.appendChild(btn);
    }


    let art = document.createElement("article");
    art.innerHTML = produit.desc
    sec.appendChild(art);

    return sec;
}

function generateCalendar(d) {

    if (!d) {
        d = new Date();
    }
    // je créais une variable tableau
    var table = document.createElement('table');
    table.className = "cal_calendrier";
    // je vais chercher dans l'élément calendrier dans le dom et j'attache l'enfant table
    document.getElementById('calendrier').innerHTML = '';
    document.getElementById('calendrier').appendChild(table);
    // first line 
    var tr = document.createElement('tr');
    table.appendChild(tr);

    var th = document.createElement('th');
    th.classList.add("navigation")
    // on fusionne 2 cellules
    th.setAttribute('colspan', '2');

    // on attribue un boutton avec un evenement
    var button = document.createElement("button");
    button.innerHTML = "<<";
    button.setAttribute("id", "moinsUnAn");
    th.appendChild(button);

    //l'evenement
    button.addEventListener("click", function () {
        generateCalendar(new Date(d.getFullYear() - 1, d.getMonth(), d.getDate()));
    });
    // on attribue un boutton avec un evenement
    button = document.createElement("button");
    button.innerHTML = "<";
    button.setAttribute("id", "moinsUnMoi");
    button.addEventListener("click", function () {
        generateCalendar(new Date(d.getFullYear(), d.getMonth() - 1, d.getDate()));
    });
    th.appendChild(button);

    tr.appendChild(th);

    th = document.createElement('th');
    th.setAttribute('colspan', '3');
    th.classList.add("navigation")
    tr.appendChild(th);

    // on a besoin d'une date

    // on a besoin d'une variable mois contenant le texte
    var month = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    // on met ce qu'on veut
    th.innerHTML = month[d.getMonth()] + ' ' + d.getFullYear();
    // on met ce qu'on veut mais le HTML ne sera pas interprété
    // th.textContent = 
    // version la plus propre, cohérence dans la méthode
    // th.appendChild(document.createTextNode(""));

    th = document.createElement('th');
    th.classList.add("navigation")
    th.setAttribute('colspan', '2');
    // on attribue un boutton avec un evenement
    button = document.createElement("button");
    button.innerHTML = ">";
    button.setAttribute("id", "plusUnMois");
    button.addEventListener("click", function () {
        generateCalendar(new Date(d.getFullYear(), d.getMonth() + 1, d.getDate()));
    });
    th.appendChild(button);
    button = document.createElement("button");
    button.innerHTML = ">>";
    button.setAttribute("id", "plusUnAn");

    button.addEventListener("click", function () {
        generateCalendar(new Date(d.getFullYear() + 1, d.getMonth(), d.getDate()));
    });

    th.appendChild(button);

    tr.appendChild(th);

    var day = ['dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam'];
    tr = document.createElement('tr');
    table.appendChild(tr);


    for (i = 0; i < day.length; i++) {
        th = document.createElement("th");
        th.innerHTML = day[i];
        tr.appendChild(th);
    }

    function daysInMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }

    var firstDay = new Date(d.getFullYear(), d.getMonth(), 1).getDay();

    var numero = 1;
    // variable permettant d'afficher les jours du mois suivant
    var nextMonth = 1;
    // variable permettant d'afficher les jours du mois précédent
    var previousMonth = daysInMonth(d.getFullYear(), d.getMonth() - 1) - firstDay + 1;

    for (var i = 0; i < 6; i++) {
        tr = document.createElement('tr');
        table.appendChild(tr);
        for (var j = 0; j < 7; j++) {
            var td = document.createElement('td');
            tr.appendChild(td);
            // console.log(i);
            if (i == 0 && j < firstDay) {
                td.innerHTML = (previousMonth++).toLocaleString("fr", { minimumIntegerDigits: 2, useGrouping: false });
                td.className = "cal_jours_av_ap";
            } else if (numero <= daysInMonth(d.getFullYear(), d.getMonth())) {
                td.innerHTML = numero.toLocaleString("fr", { minimumIntegerDigits: 2, useGrouping: false });
                // Si j'arrive au dernier jour je ne rajoute pas d'autres lignes 
                if (numero == daysInMonth(d.getFullYear(), d.getMonth())) {
                    i = 6;
                }
                // alert(new Date(d.getFullYear(), d.getMonth(), d.getDate()));
                // si aujourdhui tombe a ce moment il faut le mettre en valeur
                var aujourdhui = new Date();
                if (aujourdhui.getFullYear() == d.getFullYear() && aujourdhui.getMonth() == d.getMonth() && aujourdhui.getDate() == numero) {
                    td.className = "cal_aujourdhui";
                }
                let dateCible = new Date(d.getFullYear(), d.getMonth(), numero, 12, 0, 0);
                let sejour = filtrerProduitsParDate(dateCible);
                if (sejour.length == 1) {
                    //on rajoute l'event
                    const s = sejour[0]
                    let img = document.createElement("img");
                    img.setAttribute("src", "Images/src/" + s.image);
                    img.setAttribute("alt", s.titre);
                    img.classList.add("depart")

                    img.addEventListener("click", () => {
                        modal(s.titre, createProduct(s, false))
                    })
                    td.appendChild(img)
                    //console.log(s)
                }
                numero++;
            } else {
                // je rajoute les numéros du mois suivant si besoin
                td.innerHTML = (nextMonth++).toLocaleString("fr", { minimumIntegerDigits: 2, useGrouping: false });
                td.className = "cal_jours_av_ap";
                i = 6;
            }
        }
    }
}


window.addEventListener("load", () => {



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

    // Gestion du carrousel
    if (document.querySelector('.carousel') != null) {
        const track = document.querySelector('.carousel-track');
        const slides = Array.from(track.children);
        const nextButton = document.getElementById('next');
        const prevButton = document.getElementById('prev');
        const togglePlayButton = document.getElementById('togglePlay');
        let currentIndex = 0;
        let autoPlayInterval;
        let isPlaying = true;

        function updateCarousel(index) {
            track.style.transform = `translateX(-${index * 100}%)`;
        }

        function startAutoPlay() {
            autoPlayInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % slides.length;
                updateCarousel(currentIndex);
            }, 3000);
        }

        function stopAutoPlay() {
            clearInterval(autoPlayInterval);
        }

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel(currentIndex);
        });

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateCarousel(currentIndex);
        });

        togglePlayButton.addEventListener('click', () => {
            if (isPlaying) {
                stopAutoPlay();
                togglePlayButton.innerHTML = '<i class="fa-solid fa-play"></i> Reprendre';
            } else {
                startAutoPlay();
                togglePlayButton.innerHTML = '<i class="fa-solid fa-pause"></i> Pause';
            }
            isPlaying = !isPlaying;
        });

        // Start auto-play on load
        startAutoPlay();
    }

    //gestion du calendrier
    if (document.querySelector('#calendrier') != null) {
        generateCalendar()
    }

    //temps réel
    //lance CompteARebours toutes les secondes 
    if (document.querySelector("#horloge") != null) {
        setInterval(horloge, 1000);
    }
    //lance horloge toutes les secondes
    if (document.querySelector("#comptearebour") != null) {
        setInterval(compteARebours, 1000);
    }

    //pour charger les dates du calendrier 
    if (document.querySelector("a.jourj") != null) {
        document.querySelector("a.jourj").addEventListener("click", () => {
            generateCalendar(new Date(2342, 10, 4))
        })
    }

    if (document.querySelector("a.now") != null) {
        document.querySelector("a.now").addEventListener("click", () => {
            generateCalendar(new Date())
        })
    }

    if (document.querySelector("#editor")) {
        var quill = new Quill('#editor', {
            theme: 'snow'
        });
    }

    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Empêche l'envoi du formulaire

        // Réinitialise les messages d'erreur
        document.getElementById('nameError').textContent = "";
        document.getElementById('emailError').textContent = "";
        document.getElementById('messageError').textContent = "";

        // Récupère les valeurs des champs
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = quill.getText(); //document.getElementById('editor').innerHTML.trim();


        let isValid = true;

        // Validation du nom
        if (name === "") {
            document.getElementById('nameError').textContent = "Le nom est obligatoire.";
            isValid = false;
        }

        // Validation de l'e-mail
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            document.getElementById('emailError').textContent = "L'e-mail est obligatoire.";
            isValid = false;
        } else if (!emailPattern.test(email)) {
            document.getElementById('emailError').textContent = "L'e-mail n'est pas valide.";
            isValid = false;
        }

        // Validation du message
        console.log(message.length);

        if (message.length < 15 || message === "<br>") {
            document.getElementById('messageError').textContent = "Le message doit contenir au moins 15 caractères.";
            isValid = false;
        }

        // Si tout est valide, afficher un message ou envoyer le formulaire
        if (isValid) {


            const enrichedMessage = `<strong>Nom :</strong> ${name}<br><strong>E-mail :</strong> ${email}<br><strong>Votre message :</strong> ${quill.getSemanticHTML()}`;
            modal("Votre message a bien été envoyé !", enrichedMessage)
        }
    });

})