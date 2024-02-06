document.getElementById('calculate-btn').addEventListener('click', function() {
    var apiKey = document.getElementById('api-key').value;
    var steamId = document.getElementById('steam-id').value;

    if (!apiKey || !steamId) {
        alert("Veuillez entrer votre clé API Steam et votre ID Steam.");
        return;
    }

    // Ici, vous pouvez effectuer une requête AJAX pour récupérer les données du temps de jeu depuis votre serveur
    // Pour cet exemple, je vais simplement afficher un message statique
    var totalTime = "10 heures et 30 minutes"; // Exemple de temps total de jeu
    var totalYearsMonths = "1 année et 2 mois"; // Exemple de temps total de jeu en années et mois

    document.getElementById('result').innerHTML = "Temps total de jeu sur Steam : " + totalTime;
    document.getElementById('result-years-months').innerHTML = "Temps total de jeu sur Steam : " + totalYearsMonths;
});
