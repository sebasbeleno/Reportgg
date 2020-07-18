import Request from '../lib/request'
import generateURL from '../utils/URLManager'
import endpoints from '../utils/endpoints'
let url

/** Modulo que se encarga de los endpoints de League
 *
 */
class League {
    constructor(config) {
        this.config = config

        this.by = {
            summonerId: this.summonerId.bind(this),
        }
    }

    /**
     * Retorna el estado actual en ligas de un invocador.
     *
     * @param {summonerId} summonerId - encryptedSummonerId, se obtiene en el endpoint summoner.by.name
     */
    summonerId(summonerId) {
        let endpoint = endpoints.league.summonerId

        url = generateURL(this.config, endpoint, summonerId)

        return Request(url, this.config)
    }
}

export default League
