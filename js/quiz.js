var reponsesCorrectes = {
    check1: true,
    check2: true,
    check3: false,
    check4: true,
    check5: false,
    check6: true,
    check7: true,
    check8: false,
    check9: true,
    check10: true
};

function afficherResultat() {
    var quiz = document.forms["quiz"];
    var score = 0;
    var reponsesCorrectesListe = [];

    for (var i = 1; i <= 10; i++) {
        var questionName = "check" + i;

        if (quiz[questionName].checked && reponsesCorrectes[questionName]) {
            score++;
            reponsesCorrectesListe.push("Question " + i);
        }
    }

    // Vérification des cas spéciaux
    var message = "Réponses correctes :\n";
    if (reponsesCorrectesListe.length > 0) {
        message += reponsesCorrectesListe.join(", ") + "\n";
    } else {
        message += "Aucune réponse correcte.\n";
    }

    // Vérification du cas où toutes les réponses sont correctes
    if (score === 10) {
        message += "Félicitations! Toutes vos réponses sont correctes!\n";
    }

    // Vérification du cas où aucune réponse n'est correcte
    if (score === 0) {
        message += "Aucune réponse correcte. Continuez à vous entraîner!\n";
    }

    // Affiche le score
    message += "Votre score est de " + score + " sur 10.";

    // Affiche les résultats sous forme d'alerte
    alert(message);
}
