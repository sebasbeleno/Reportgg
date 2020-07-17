/**
 * Añade la url a la url host
 *
 * @param {config} config - La configuración de Report.
 */
function addRegion(config) {
    return config.host_url.replace('/%s', config.region)
}

/**
 * Añade el endpoint deseado a la url suminstrada.
 *
 * Los endpoints se encuentran en 'utils/endpoints,js'
 *
 * @param {url} url - url sin el endpoint
 * @param {url} endpoint - endpoint a agrergar a la ur
 */
function addEndpoint(url, endpoint) {
    return `${url}${endpoint}`
}

/**
 * Añade data que se desea buscar a la url
 *
 * @param {url} url - La url a la cual se le añadirá la data a buscar
 * @param {*} data  - la data que se desea buscar
 */
function addData(url, data) {
    return `${url}${data}`
}

/**
 * Añade el token a la url
 *
 * @param {url} url - url a la cual se desea añadir el token
 * @param {config} config - La configuración de Report
 */
function addToken(url, config) {
    return `${url}?api_key=${config.api_key}`
}

/**
 * Retorna la url a consumir por Request
 *
 * @param {config} config - La configuración de Report
 * @param {endpoint} endpoint  - Endpoint a la cual se le quiere hacer la llamada
 * @param {data} data - data a la cual se quiere buscar
 */
function generateURL(config, endpoint, data) {
    let url

    url = addRegion(config)

    url = addEndpoint(url, endpoint)

    url = addData(url, data)

    url = addToken(url, config)

    return url
}

module.exports = generateURL
