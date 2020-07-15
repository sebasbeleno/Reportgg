import Request from '../lib/request'
import { REPORT_DEFAULT_CONFIG } from '../lib/ReportConfig'

let url

/**
 * TODO: BUG: No Se lee la configuración enviada desde Report
 * Se establece directamente el llamado a la región como recurso
 * mientras se investiga el porqué de esto.
 *
 */

class Match {
    constructor() {
        this.by = {
            accountId: this.accountId.bind(),
            matchId: this.matchId.bind(),
        }
    }

    /**
     * Obtiene el match dato un gameId
     *
     *
     * @param {matchId} matchId - El gameId del match
     */
    matchId(matchId) {
        //url = `https://${region}.api.riotgames.com/lol/match/v4/matches/${matchId}?api_key=${process.env.RIOT_API_KEY}`
        url = `https://${REPORT_DEFAULT_CONFIG.region}.api.riotgames.com/lol/match/v4/matches/${matchId}?api_key=${process.env.RIOT_API_KEY}`

        return Request(url)
    }

    /**
     * Obtiene la lista de partidas de un invocador dato.
     *
     * @param {accoundId} accountId El AccoundId del invocador
     */
    accountId(accountId, endIndex) {
        //url = `https://${region}.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountID}?endIndex=${endIndex}&api_key=${process.env.RIOT_API_KEY}`
        url = `https://${REPORT_DEFAULT_CONFIG.region}.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?endIndex=${endIndex}&api_key=${process.env.RIOT_API_KEY}`

        return Request(url)
    }
}

export default Match
