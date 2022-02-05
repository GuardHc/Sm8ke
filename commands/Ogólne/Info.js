const { MessageEmbed, Message } = require("discord.js");
const config = require("../../config.json")
const fs = require('fs');
const { MessageButton } = require('discord-buttons')

module.exports = {
  config: {
    name: "info",
    description: "Informacje o bocie",
  },
  run: async (client, message, args) => {
      const moment = require("moment");
      require("moment-duration-format");
      const duration = moment.duration(client.uptime).format(" D[d], H[g], m[min]");

      let button = new MessageButton()
        .setStyle('url')
        .setLabel('Skontaktuj się z właścicielem bota!')
        .setURL('http://www.derex.xyz/')

      const info = new MessageEmbed()
        .setColor("#009CF5")
        .setAuthor(client.user.username, client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL())
        .setDescription(`Autor bota: [**Derex#0001**](http://www.derex.xyz/) | <@650842472875950100>\nBot napisany w: **discord.js@12**\nPrefix: **${config["Konfiguracja"].prefix}**`)
        .addField(`Ping bota`, `${Math.round(client.ws.ping)}ms`, true)
        .addField(`Kanały`, client.channels.cache.size, true)
        .addField(`Użytkownicy`, client.users.cache.size, true)
        .addField(`Wersja(CapeSystem)`, `2.0.0`, true)
        .addField(`Ostatni update`, duration, true)
        .addField(`Na serwerze`, message.guild.name, true)
        .setFooter(`Rumble    •   Użyte przez: ${message.author.tag}`, client.user.displayAvatarURL());
	if (message.channel.id !== `${config["Opcje"].MachineChannelID}`) {
        	message.channel.send(info, button)
	}
  }
}