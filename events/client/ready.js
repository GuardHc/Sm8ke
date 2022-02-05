const config = require("../../config.json");
module.exports = async client => {

  console.log(`Jesli masz jakieś pytanie lub problem, skontaktuj się ze mną na discordzie: Derex#0001`);
    setInterval(() => {
        const statuses = [
            `Wersja aplikacji: 2.0`,
            `by Derex#0001`,
            `www.derex.xyz`,
            `discord.gg/derex`
        ]

        const status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, { type: "STREAMING"}) 
    }, 2000)}


