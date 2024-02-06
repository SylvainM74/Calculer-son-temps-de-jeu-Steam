from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/get_playtime', methods=['GET'])
def get_playtime():
    api_key = request.args.get('api_key')
    steam_id = request.args.get('steam_id')
    if not api_key or not steam_id:
        return jsonify({'error': 'Veuillez fournir une clé API Steam et un ID Steam'})

    url = f'https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key={api_key}&steamid={steam_id}&format=json'
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        if 'response' in data and 'games' in data['response']:
            total_playtime = sum(game['playtime_forever'] for game in data['response']['games'])
            return jsonify({'total_playtime': total_playtime})
        else:
            return jsonify({'error': 'Impossible de récupérer le temps de jeu'})
    else:
        return jsonify({'error': 'Erreur lors de la requête vers l\'API Steam'})

if __name__ == '__main__':
    app.run(debug=True)
