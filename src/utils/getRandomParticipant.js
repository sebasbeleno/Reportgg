function getRandomParticipant(actualAccountID, listaParticipantes) {
    var repetido = true
    var randomParticipant

    while (repetido) {
        randomParticipant = listaParticipantes[Math.floor(Math.random() * 9)]

        if (randomParticipant.player.accountId != actualAccountID) {
            repetido = false
        }
    }

    return randomParticipant
}

module.exports = getRandomParticipant
