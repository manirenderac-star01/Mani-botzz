const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0ZSRk9rOGdENHgvQTAwbndjNHd4WUVIWkViTTNCM2F5dHhUWlBaTXBuWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSnQ0UVlOdFpBS3NaSmRxbDlwNVZnKzFjejI1NDlhRHJuTEpzSEkzSXRraz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTSjFzNkVkTTQxQ25GeE9zZDl2TjZtb2o0OWcwSklwM2U3TUU2SmRXa2tFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnWEpuY2FyZytjM0dvSzlRamNFVHVJWkpLc2lqcVpNSzNmZ1BiZzVGOVRFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlHMU5YN2tuWUsyclNlVlhhMVlTWTdYdWtwSkJ4SC81U2RIZW5QWE9EVms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQrZTVpeHloNWhOOGxXQ2F4dmp4NGJlbnNOT0JHaHYvODVTMFZqNUpIQUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0tmdUtSNHhFVDlZdHVhTWl6MDdqR2NuZFg4ZVk5UW04cE81bFFTcjNVcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRzlWdTNZaXBNaW9TeXh5dXlxZXBsMFJ3bGJJNC9FOGN2R2wwN2ppL29sUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxSSldVbG1sTUZvckI2b0R1bTBvS2s1YjlSNXMvODJUNmRoZ0tEeFVaSzV2TGpWR2ExTkczZitlNU1aU0ZhcCtydms0MFE3SkN2TFV6SEtMdEhudERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUyLCJhZHZTZWNyZXRLZXkiOiI5U2JLV2V1WEhmaHF2WWlqMFNpcWxMYTZhVi9NMEFSREFHaWJuMVJHdEZvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjU4NDE2MjEyMjkxMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFQ0Y3MkIyOEI3NzUxNEI2NDk3RUNBMzdGQkE4NDIwQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU1NTMyMTg2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI1ODQxNjIxMjI5MTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0Q2NTQzRkY0NzlFOTNDNjgzMzFEMzc1NThCREMzODgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTUzMjE4Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiN1JNNlE4QTEiLCJtZSI6eyJpZCI6IjU4NDE2MjEyMjkxMjoxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjk0OTQxOTQ3NDU1MzA6MUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0wvN3RaNERFSk9YamNVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkVvQ1FGNXduNDBjVlJiUTVsQTQ1d283RUVFeWpWWit3d1kxVmRlZkdzR009IiwiYWNjb3VudFNpZ25hdHVyZSI6Iko4V2MzbU92bTJJZDhqTnlkZ0xGSjYrVEZ3MVFlR3lBYmVwWkpJcDIxK1MrNjlxdWhISXloUTdqdUl1a2EweFMrYkRnMHc2WktYNHpsUHZpMlVqMUFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJrT0VEQ2svQWQ2dllKVHFZWFR2WXN6ekZTVzV5aDFHL1IzNUxLYUliQTg4QTZWS2hXN1NrYnV6YlpPcjFwNCtCbWljTmJNOEUyWmtHUldPOC9QMFlCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjU4NDE2MjEyMjkxMjoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJLQWtCZWNKK05IRlVXME9aUU9PY0tPeEJCTW8xV2ZzTUdOVlhYbnhyQmoifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTUzMjE4MiwibGFzdFByb3BIYXNoIjoiMlAxWWhmIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLRnUifQ==",
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
