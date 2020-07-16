import RiotRateLimiter from 'riot-ratelimiter'
const limiter = new RiotRateLimiter()

/**
 *  Modulo que se encarga de hacer los llamados a las API
 *
 * @param {url} url la url a la cual se le hará el llado
 * @param {*} config - la configuración de Report
 */
async function Request(url, config) {
    let response = await limiter.executing({
        url: url,
        token: config.api_key,
    })

    response = JSON.parse(response)

    return response
}

export default Request
