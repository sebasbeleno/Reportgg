import Request from '../lib/request'

let url

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
        url = `https://${this.config.region}.api.riotgames.com/lol/match/v4/matches/${matchId}?api_key=${this.config.api_key}`

        return Request(url, this.config)
    }

    /**
     * Obtiene la lista de partidas de un invocador dato.
     *
     * @param {accoundId} accountId El AccoundId del invocador
     */
    accountId(accountId, endIndex) {
        url = `https://${this.config.region}.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?endIndex=${endIndex}&api_key=${this.config.api_key}`

        return Request(url, this.config)
    }
}

export default Match
