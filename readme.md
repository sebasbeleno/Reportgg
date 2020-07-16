![Welcome to StackEdit!](https://i.imgur.com/1pgt3Dm.png)

Una librería donde podrás trabajar fácilmente con la API de RiotGames.

# Report.gg

Bienvenido [Report.gg](https://github.com/SebastianHerrera/Report.gg), podrás con nosotros obtener data de la API de RiotGames

Todos los días trabajamos en Streaming en este hermosos proyecto a las 12 PM hora Colombia en: [mi canal de Twitch](https://www.twitch.tv/justbel2), no dudes de darte una pasada ^^

# Uso

npm i reportgg

const Report = require('reportgg')

const report = new Report('TU-RIOT-API-KEY')

try {

let summoner = await report.summoner.by.name('justbel')

console.log(summoner)

} catch (err){

console.log(err)

}

# Endpoint

> Se planean añadir más en el futuro ^^

report.summoner

report.match

## Rate Limiting

Utilizamos el modulo de [colorfulstan](https://github.com/colorfulstan), llamado [riot-ratelimiter](https://www.npmjs.com/package/riot-ratelimiter)

## Colaborar

Siéntete completamente libre de aportar tus valiosos conocimientos al proyecto.

### Disclaimer

Report.gg isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.
