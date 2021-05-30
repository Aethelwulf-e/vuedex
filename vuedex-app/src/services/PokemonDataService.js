import https from "../http-common"

class PokemonDataService {
  getByName(name) {
    return https.get(`/pokemon/${name}`)
  }
}

export default new PokemonDataService()