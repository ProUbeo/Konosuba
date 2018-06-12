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
    
member.guild.channels.find("name", "discution-nouveaux").send(`${member}, je te souhaite la bienvenue ! je suis 99648-HB4... Je rigole ! je suis Konosuba (bravo si t'a la référence). Pour avoir de l'aide, fait k!help`)
    })
    bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "discution-nouveaux").send(`${member} N'a pas voulu rester... De son plein grée, je sais pas !`)
    })
        bot.on("guildMemberAdd", member => {
        var role = member.guild.roles.find('name', '1ere connexion');
    member.addRole(role)
    })
 

 bot.on('message', message => {
     if(message.content === "k!help"){
 
         const embed = new Discord.RichEmbed()
         .setTitle("commandes Disponible")
         .setColor(0xff9900)
         .setDescription("")
         . setFooter ( "Konosuba ©" )
         . addField ( "Transition",
           "```help1.txt    _ ☐ X\nk!carte @pseudo pour que vous puissiez voir la carte d'identité de la personne que vous avez mentionner ^^\nk!(arme)```" )
         
         
         message.channel.send({embed});
     }
if(message.content.startsWith("k!carte <@418453389576503297>")){
    message.channel.send(`Nom : Atsuki\nPrenom : Yuki\n compétence : Mage\nNiveau : 1\n**Déesse**`,{
    file:"https://cdn.discordapp.com/attachments/455345835618730004/455360730061996053/Avatar_RP.png"
})
}
if(message.content.startsWith("k!carte <@323807479651631104>")){
    message.channel.send(`index.js ne trouve pas la carte *internal.server.error`
)
}
if(message.content.startsWith("k!carte <@455273029837127700>")){
    message.channel.send(`It's me :3`
)
}
  if(message.content.startsWith("k!sleep")){
    message.channel.send(`**${message.author.username}** fait un petit somme !`,{
    file:"http://mangasetplus.m.a.pic.centerblog.net/16dca05f.jpg"
})
}
   if(message.content.startsWith("k!eat")){
    message.channel.send(`**${message.author.username}** Mange !`,{
    file:"https://data.photofunky.net/output/image/6/8/0/3/680323/photofunky.gif"
})
} 
if(message.content.startsWith("k!sceptre")){
    message.channel.send(`**${message.author.username}** fait apparaître son Sceptre !`,{
    file:"https://i.skyrock.net/4010/71994010/pics/3154696378_1_6_CYLmvdbs.png"
})
}
if(message.content.startsWith("k!arc")){
    message.channel.send(`**${message.author.username}** fait apparaître son arc !`,{
    file:"http://img4.hostingpics.net/pics/484588arc.png"
})
}
if(message.content.startsWith("k!pistolet")){
    message.channel.send(`**${message.author.username}** fait apparaître son Pistolet (x2) !`,{
    file:"https://i.skyrock.net/1287/90701287/pics/3220760413_1_16_rngUeCl8.jpg"
})
}
if(message.content.startsWith("k!faux")){
    message.channel.send(`**${message.author.username}** fait apparaître sa Faux !`,{
    file:"https://cdn.discordapp.com/attachments/448046019301736452/448060981978071040/th.jpg"
})
}
  if(message.content.startsWith("k!épée")){
    message.channel.send(`**${message.author.username}** fait apparaître son épée !`,{
    file:"https://orig00.deviantart.net/8300/f/2007/171/b/e/katana_by_vyrosia.jpg"
})
}
}
)
