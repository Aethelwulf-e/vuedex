import https from "../https-common"

class PokemonDataService {
  getByName(name) {
    return https.get(`/pokemon/${name}`)
  }

  getPokemonById(id) {
    return https.get(`/pokemon/${id}`)
  }

  getKantoPokemon() {
    return https.get(`/pokemon?limit=151`)
  }

  getJohtoPokemon() {
    return https.get(`/pokemon?offset=151&limit=100`)
  }

  getHoennPokemon() {
    return https.get(`/pokemon?offset=251&limit=135`)
  }

  getSinnohPokemon() {
    return https.get(`/pokemon?offset=386&limit=107`)
  }

  getUnovaPokemon() {
    return https.get(`/pokemon?offset=493&limit=156`)
  }

  getKalosPokemon() {
    return https.get(`/pokemon?offset=649&limit=72`)
  }

  getAlolaPokemon() {
    return https.get(`/pokemon?offset=721&limit=88`)
  }

  getGalarPokemon() {
    return https.get(`/pokemon?offset=809&limit=89`)
  }

  getPokemonContentByUrl(url) {
    return https.get(url)
  }
}

export default new PokemonDataService()