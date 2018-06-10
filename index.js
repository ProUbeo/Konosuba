const Discord = require('discord.js');
 const bot = new Discord.Client();
 
 var prefix = ("k!")
 var randnum = 0;
 
 bot.on('ready', function() {
     bot.user.setUsername("Konosuba")
     bot.user.setPresence({ game: { name: 'être là 24h/24'}, status: 'dnd'}) //en ligne;
     console.log("Connected")
 });
 
 bot.login(process.env.TOKEN);
 
 bot.on("guildMemberAdd", member => {
    
member.guild.channels.find("name", "ecrit-nouveaux").send(`${member}, je te souhaite la bienvenue ! je suis 99648-HB4... Je rigole ! je suis Konosuba (bravo si t'a la référence). Pour avoir de l'aide, fait k!help`)
    })
    bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "ecrit-nouveaux").send(`${member} N'a pas voulu rester... De son plein grée, je sais pas !`)
    })
    
 

 bot.on('message', message => {
     if(message.content === "k!help"){
 
         const embed = new Discord.RichEmbed()
         .setTitle("commandes Disponible")
         .setColor(0xD4FE00)
         .setDescription("")
         . setFooter ( "Konosuba ©" )
         . addField ( "Transition",
           "```help1.txt    _ ☐ X\n```" )
         
         
         message.channel.send({embed});
     }

     
}
if(message.content.startsWith("rp!carte <@418453389576503297>")){
    message.channel.send(`Nom : Atsuki\nPrenom : Yuki\n compétence : Mage`,{
    file:"https://cdn.discordapp.com/attachments/455345835618730004/455360730061996053/Avatar_RP.png"
})
}
}
)
