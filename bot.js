import {Telegraf} from 'telegraf';
import {api} from './api.js';

const url = "https://api.neshan.org/v4/direction?type=car&origin=35.78075629028602,51.44888051620569&destination=35.869888530883756,50.87017376021197&avoidTrafficZone=false&avoidOddEvenZone=false&alternative=false&bearing=";

// Replace 'YOUR_BOT_TOKEN' with the token you got from BotFather
const bot = new Telegraf('7491048355:AAGP6-cWq66KsX-v7AkO9xrT193XgjJO0q8');

bot.start((ctx) => ctx.reply('Welcome!'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));

// Define the /status command
bot.command('status', async (ctx) => {
    try {
        const [distance, duration] = await api(url);
        ctx.reply(`Distance: ${distance}\nDuration: ${duration}`);
    } catch (error) {
        ctx.reply('Failed to fetch status. Please try again later.');
        console.error('Error in /status command:', error);
    }
});

bot.launch();

console.log('Bot is running');
