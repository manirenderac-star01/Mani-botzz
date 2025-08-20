const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "MANI-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUpITXYwWFNuRldHSDJlMEMxMFFWWnliU0FHWWtUdWVydlZtWmpTeHRuUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiblh3eXFabXZqclhGNW9KZXc3bDRuUXhWbXBPNS9Ea0ZZNVdSRTJtN1JoZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFUDVqNlZlaFJJR2JDeXZITXltcXpkWTkvZVNUempBZTNtSWlUTW5WWm1rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSjBHb3l0KzBCMGNyTjUzNlZSaXhTcXY4Wmc3ZVJJOXpEdEVBalhoeWpFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9LTXZ4bG5Edll1S0hKS3ZNVTBCL0R6Y2VRUU50elBNMHRlSTRPbkFlRXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVNVU9ZZWZUcDVQYk90WnNONXRDQUI3diswS3lNYmhRMy9tMFF0SnlqUmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ056Z3YxUXRadzI1a3laa210VTVwUG9IR3lMWk9Lbm5OZFA1eCtWTWxsST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUtJM1BMcFBqVXl4M3NNbzVZMlkyY2xvZ3JCKzJXQ2c3Ylo0cVBKMGRXST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imp0UDVaOFVhRGQxWDBqVThIY0ZuNlRXL3FvbENBVnIyZkYvMUQ1TnVERFdIdW5HcndKeG1mcEFlY1hURzN3Ti9PTXZxNEZMZ3R4K3B0cXdFWVBQcUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYzLCJhZHZTZWNyZXRLZXkiOiJoYzBHcTJLRGNRTlF3V1RCc29IQitRU0djMTUyb25XdGx6ZmRzRzY5NUUwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjU4NDE2MjEyMjkxMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFNjY4MkYzQjU4NUYyQkVBQjFDMDI5OEY1RDA1ODU5NyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU1NzE1ODY1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI1ODQxNjIxMjI5MTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMjY3MUJEMDhBNTJFQzE5NDJENkIwMTNBMkU0MDlCNDYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTcxNTg2NX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiRzNTTTVZWEMiLCJtZSI6eyJpZCI6IjU4NDE2MjEyMjkxMjoyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjk0OTQxOTQ3NDU1MzA6MkBsaWQiLCJuYW1lIjoiTUFOSUkgTUQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01EN3RaNERFSlN5bU1VR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkVvQ1FGNXduNDBjVlJiUTVsQTQ1d283RUVFeWpWWit3d1kxVmRlZkdzR009IiwiYWNjb3VudFNpZ25hdHVyZSI6InByM3kvQVVtQ3ltTjl3VjJtUEZ3eHZLZHpaazVrWlB6RWlaSHd5dTc3dHVWM0tka2VLWnp0UURRTDlNZnZHVS8zOFozZEVBbTNKbndYYWJQYmJxSEJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJiUXZGTWZUTkNzUmRxcDd2Z2FqSlc3NDZwTFZuQlBaUnp1SnVKZHd3VG1DWWl6VnJoM0pBSnpCbmNaVldWM3NTMWt6bSs5TkMwL3p4clRFZE50VlFDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjU4NDE2MjEyMjkxMjoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJLQWtCZWNKK05IRlVXME9aUU9PY0tPeEJCTW8xV2ZzTUdOVlhYbnhyQmoifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTcxNTg2MywibGFzdFByb3BIYXNoIjoiMlAxWWhmIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEV20ifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Mani-bot 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/mneeys.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Mani-bot",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Mani-bot",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923033096103",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*ManiMD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ManiMD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "9233033096103",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
