import Request from '../lib/request'
import generateURL from '../utils/URLManager'
import endponts from '../utils/endpoints'

let url

/**
 * Modulo encargado de los invocadores
 */
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
        let endpont = endponts.summoner.byName

        url = generateURL(this.config, endpont, summonerName)

        return Request(url, this.config)
    }
}

export default Summoner
