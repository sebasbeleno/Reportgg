import Request from '../lib/request'
import generateURL from '../utils/URLManager'
import endponts from '../utils/endpoints'
let url

/**
 * Class manager de Match
 */
class Match {
    constructor(config) {
        this.config = config

        this.by = {
            accountId: this.accountId.bind(this),
            matchId: this.matchId.bind(this),
        }
    }

    /**
     * Obtiene el match dato un gameId
     *
     *
     * @param {matchId} matchId - El gameId del match
     */
    matchId(matchId) {
        let endpont = endponts.match.matches.matchId

        url = generateURL(this.config, endpont, matchId)

        return Request(url, this.config)
    }

    /**
     * Obtiene la lista de partidas de un invocador dato.
     *
     * @param {accoundId} accountId El AccoundId del invocador
     */
    accountId(accountId) {
        let endpoint = endponts.match.matchlist.accountId

        url = generateURL(this.config, endpoint, accountId)

        return Request(url, this.config)
    }
}

export default Match
