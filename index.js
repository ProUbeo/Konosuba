const Discord = require('discord.js');
const bot = new Discord.Client();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('database.json')
const db = low(adapter)
db.defaults({ histoires: [], xp: []}).write()

 var prefix = ("k!")
 var randnum = 0;
 var teste = false;
 
 bot.on('ready', function() {
     bot.user.setUsername("Konosuba")
     bot.user.setPresence({ game: { name: 'être là 24h/24'}, status: 'dnd'}) //en ligne;
     console.log("Connected")
 });
 
 bot.login(process.env.TOKEN);
 
 bot.on("guildMemberAdd", member => {
    
member.guild.channels.find("name", "discution-nouveaux").send(`${member}, je te souhaite la bienvenue ! je suis 99648-HB4... Je rigole ! je suis Konosuba (bravo si t'a la référence). Pour commencer l'aventure, lisez dans <#455345599429083146> !`)
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
         . addField ( "commande demandé par (voir image)",
           "```help1.txt    _ ☐ X\nk!carte @pseudo pour que vous puissiez voir la carte d'identité de la personne que vous avez mentionner ^^\nk!(arme)\nk!sleep pour quand vous dormez\nk!eat quand vous mangez\nk!drink quand vous vous bourez la tronche```" )
         .setThumbnail(message.author.avatarURL)
         
         message.channel.send({embed});
     }
  if(message.content === "serveur bonjour"){
 
         const embed = new Discord.RichEmbed()
         .setColor(0xff9900)
         . setFooter ( "Konosuba ©" )
         . addField ( "Serveur",
           "Bien le bonjour ! Que voulez-vous ?" )
         
         
         message.channel.send({embed});
     }
  if(message.content === "serveur être bourrée"){
 
         const embed = new Discord.RichEmbed()
         .setColor(0xff9900)
         . setFooter ( "Konosuba ©" )
         . addField ( "Serveur",
           `Ehh... D'accord *sert un verre de bière a ${message.author.username}* voici ^^ ` )
         
         
         message.channel.send({embed});
     }
  if(message.content === "serveur rien"){
 
         const embed = new Discord.RichEmbed()
         .setColor(0xff9900)
         . setFooter ( "Konosuba ©" )
         . addField ( "Serveur",
           "D'accord, comme vous voulez ^^" )
         
         
         message.channel.send({embed});
     }
  if(message.content === "serveur encore un verre"){
 
         const embed = new Discord.RichEmbed()
         .setColor(0xff9900)
         . setFooter ( "Konosuba ©" )
         . addField ( "Serveur",
           `Faites attention mais je ne suis que un robot *sert un autre verre de bière a ${message.author.username}*` )
         
         
         message.channel.send({embed});
     }
  if(message.content === "serveur ça va ?"){
 
         const embed = new Discord.RichEmbed()
         .setColor(0xff9900)
         . setFooter ( "Konosuba ©" )
         . addField ( "Serveur",
           `Oh ! Ehh... Je m'y attendais pas que on me demande ça ! Je ne suis que un robot banal sans intérêt... Merci beaucoup ${message.author.username}` )
         
         
         message.channel.send({embed});
     }
  if (message.content === "k!drink"){
    random();
    if (drink == 1){
        message.channel.send(`**${message.author.username}** Boit !`, {
            file: "https://78.media.tumblr.com/9ef91f397754dc901d99e60a85fa264e/tumblr_nsqpdy2AfR1s6sltno2_500.gif"
        })
}
if (drink == 2){
    message.channel.send(`**${message.author.username}** Boit !`, {
        file: "http://mangapournous.m.a.pic.centerblog.net/745.gif"
    })
}
if (drink == 3){
    message.channel.send(`**${message.author.username}** Boit !`, {
        file: "http://reve-of-manga.r.e.pic.centerblog.net/d3f76a2f.gif"
    })
}
}

if(message.content.startsWith("k!carte <@418453389576503297>")){
    message.channel.send(`Nom : Atsuki\nPrenom : Yuki\n compétence : Mage\nNiveau : 2\n**Déesse**`,{
    file:"https://cdn.discordapp.com/attachments/455345835618730004/455360730061996053/Avatar_RP.png"
})
}
  if(message.content.startsWith("k!carte <@437883948694241290>")){
    message.channel.send(`Nom : Bubu\nPrenom : Kurama\n compétence : Épéiste\nNiveau : 1`,{
    file:"https://i.pinimg.com/originals/df/2a/4b/df2a4bfda87795de210038b89dc61636.png"
})
}
if(message.content.startsWith("k!carte <@415831269239160832>")){
    message.channel.send(`Nom : Hakate\nPrenom : Gaaruto\n compétence : Mage\nNiveau : 1`,{
    file:"https://cdn.discordapp.com/attachments/455346698726801430/457234679653728297/JPEG_20180613_152647.jpg"
})
}
if(message.content.startsWith("k!carte <@234368202379886593>")){
    message.channel.send(`Nom : ...\nPrenom : Sakamoto\n compétence : Mage\nNiveau : 1`,{
    file:"https://cdn.discordapp.com/attachments/439460582345670666/440153290211065856/nichijou__sakamoto_san_gijinka_by_lightanddarksoul-d3k4h0m.jpg"
})
}
if(message.content.startsWith("k!carte <@402034671451373581>")){
    message.channel.send(`Nom : ...\nPrenom : Meliodas\n compétence : Mage\nNiveau : 1`,{
    file:"https://cdn.discordapp.com/attachments/455346698726801430/456486912354418698/697d5eb043077e75fd934c4b7ff36ca9.jpg"
})
}
if(message.content.startsWith("k!carte <@244812508865626113>")){
    message.channel.send(`Nom : Shinata\nPrenom : Lillia\n compétence : Mage\nNiveau : 1`,{
    file:"https://cdn.discordapp.com/attachments/455346698726801430/456491766317580299/tumblr_p53xvvkmGq1qjrzu8o1_1280.jpg"
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
if(message.content === "k!teste"){
    if("234368202379886593".includes(message.author.id)){
        if(teste = true){ 
            message.channel.send(`**${message.author.username}** fait apparaître un teste !`,{
            file:"https://ih1.redbubble.net/image.14778725.5688/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1u3.jpg"
        })}
        else 
    message.channel.send(`**${message.author.username}** a oublier un truc !`,{
        file:"https://i.paigeeworld.com/user-media/1477785600000/577051e1777e99162683eb41_5815402246705b5d2a0e122c_320.jpg"
    })
}
    else
        message.channel.send("tu est pas le créateur");{
            message.channel.send(`tu n'est pas le créateur`,{
                file:"http://1.bp.blogspot.com/-45wb-emSlEM/TggFAb-44hI/AAAAAAAAAhg/DaXtkwQg6O8/s1600/freak+out.jpg"
            })}
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
if(message.content.startsWith("k!carte <@195606060638142474>")){
    message.channel.send(`Nom : OneShot\nPrenom : Miko\n compétence : Épéiste\nNiveau : 1`,{
    file:"https://cdn.discordapp.com/attachments/455346698726801430/456517895153778688/JPEG_20180605_053757.jpg"
})
}
}
)

function random(min, max) {
    min = Math.ceil(0)
    max = Math.floor(3)
    drink = Math.floor(Math.random() * (max - min +1) + min);
 }
