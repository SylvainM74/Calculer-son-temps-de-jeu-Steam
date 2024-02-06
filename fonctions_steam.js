// Cette fonction simule la récupération du temps de jeu depuis une API
function getPlaytime(apiKey, steamId) {
    // Vous pouvez remplacer ce code par une vraie requête AJAX vers votre serveur ou l'API Steam
    // Pour cet exemple, nous renvoyons simplement un temps de jeu fictif en minutes
    return Math.floor(Math.random() * 10000); // Temps de jeu aléatoire entre 0 et 10000 minutes
}

// Convertit le temps de jeu total en heures et minutes
function convertPlaytime(playtime) {
    var hours = Math.floor(playtime / 60);
    var minutes = playtime % 60;
    return [hours, minutes];
}

// Convertit le temps de jeu total en années et mois
function convertPlaytimeToYearsMonths(playtime) {
    var totalMonths = playtime / (30 * 24 * 60); // Approximation de 30 jours par mois
    var years = Math.floor(totalMonths / 12);
    var months = Math.floor(totalMonths % 12);
    return [years, months];
}
