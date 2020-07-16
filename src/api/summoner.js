import Request from '../lib/request'
import 'dotenv/config'

let url

class Summoner {
    constructor(config) {
        this.config = config

        this.by = {
            name: this.summonerName.bind(this),
        }
    }

    /** Retorna la información
     * de un invocador dando el nombre del mismo
     *
     * @param {summonerName} summonerName - Nombre del invocador
     */

    summonerName(summonerName) {
        url = `https://${this.config.region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${this.config.api_key}`

        return Request(url)
    }
}

export default Summoner
