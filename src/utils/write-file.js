const fs = require('fs')

function writeFile(fileName, data) {
    let dataTo = `[ ${data}]`

    fs.writeFile(fileName, dataTo, function (err) {
        if (err) console.log(err)
        console.log(`Archivo ${fileName} fue escrito con éxito,`)
    })
}

module.exports = writeFile
