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

  getPokemonContentByUrl(url) {
    return https.get(url)
  }
}

export default new PokemonDataService()