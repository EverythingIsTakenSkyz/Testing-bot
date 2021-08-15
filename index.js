const Discord = require("discord.js");
const client = new Discord.Client();
const configs = require("./configs.json");
const fivereborn = require('fivereborn-query');
client.config = configs;

const TOKEN = "ODc2NDA1NDkzMjYwNzc5NjEw.YRjmOA.hkDEHN--VrfHJqQqeeeBzppgONI";
const PREFIX = ","

var bot = new Discord.Client();

bot.on("ready", function(){
    console.log("Botten er nu klar")
});

client.login(configs.token)
  .then(
    () => {
      console.log("Spillerbot!");
      console.log("Receiving information, please wait...");
    },
    () => {
      client.destroy();
      console.log("Bot destroyed!");
    });


bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "commands":
            var embed = new Discord.RichEmbed()
            .setTitle("**Commands**")
            .setDescription("Her har du en liste over alle commands.")
            .addField("hello", "Sender dig hello")

            .setColor(0xFF1300)
            .setFooter("©Kasper H");
            message.channel.sendEmbed(embed);
            break;
    }
});

bot.on("message", msg=>{
    if(msg.content === ",hello"){
        msg.reply("Hello");
    }
})

bot.login(TOKEN);