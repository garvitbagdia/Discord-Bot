import { Client, GatewayIntentBits } from 'discord.js';
const dotenv=require("dotenv").config();
const client = new Client({ intents: 
    [GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,] });
client.on('messageCreate',(message) =>{
    if(message.author.bot) return;
    if(message.content.startsWith('create')){
        const url=message.content.split('create')[1]
        return message.reply({
            content:'Generating Short ID for '+url,
        })
    }
    message.reply({
        content:"Hi From Bot",
    });
})
client.login(process.env.DISCORD_TOKEN);
client.on('interactionCreate',(interaction)=>{
    console.log(interaction);
    interaction.reply("YEEEEEEEEE PING PING ");
});