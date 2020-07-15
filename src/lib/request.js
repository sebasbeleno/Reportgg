import axios from 'axios'

async function Request(url) {
    let response = await axios.get(url)

    return response.data
}

export default Request
