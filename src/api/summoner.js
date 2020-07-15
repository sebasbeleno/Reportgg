import Request from '../lib/request'
import 'dotenv/config'

let url
import { REPORT_DEFAULT_CONFIG } from '../lib/ReportConfig'

class Summoner {
    constructor(config) {

        this.config = config

        this.by = {
            name: this.summonerName.bind(config),
        }
    }

    /** Retorna la información
     * de un invocador dando el nombre del mismo
     *
     * @param {summonerName} summonerName - Nombre del invocador
     */

    /*
     TODO: BUG: No Se lee la configuración enviada desde Report
     Se establece directamente el llamado a la región como recurso
     mientras se investiga el porqué de esto.
    */
    summonerName(summonerName) {


        url = `https://${REPORT_DEFAULT_CONFIG.region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.RIOT_API_KEY}`

        return Request(url)
    }
}

export default Summoner
