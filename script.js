document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('calculer_temps_jeu').addEventListener('click', () => {
      const api_key = document.getElementById('api_key').value.trim();
      const steam_id = document.getElementById('steam_id').value.trim();
  
      if (!api_key || !steam_id) {
        alert('Veuillez saisir votre clé API Steam et votre ID Steam.');
        return;
      }
  
      fetch(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${api_key}&steamid=${steam_id}`)
        .then(response => response.json())
        .then(data => {
          const jeux = data.response.games;
          let tempsTotalJeu = 0;
          jeux.forEach(jeu => {
            tempsTotalJeu += jeu.playtime_forever;
          });
  
          const heures = Math.floor(tempsTotalJeu / 60);
          const minutes = tempsTotalJeu % 60;
  
          document.getElementById('resultat').innerText = `Temps total de jeu sur Steam : ${heures} heures et ${minutes} minutes.`;
        })
        .catch(error => {
          console.error('Une erreur s\'est produite lors de la récupération du temps de jeu :', error);
          document.getElementById('resultat').innerText = 'Erreur lors de la récupération du temps de jeu.';
        });
    });
  });
  