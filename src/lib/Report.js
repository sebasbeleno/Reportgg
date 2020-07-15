import Summoner from '../api/summoner'
import Match from '../api/match'

import { REPORT_DEFAULT_CONFIG } from './ReportConfig'
class Report {
    constructor(
        key = process.env.RIOT_API_KEY,
        config = REPORT_DEFAULT_CONFIG
    ) {

        //Configuración de Report

        this.config = config

        console.log(this.config.region)

        this.summoner = new Summoner(config.region)
        this.match = new Match(this.config)
    }
}

export default Report
