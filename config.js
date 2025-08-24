const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "MANI-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU5pVW9xcEYrL0NjRVVhYXBqaU52WllrVUtnTHNPREFwenhBUU1CNnRGST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0k1WjI5a0oxNFV1ZFNpOEMxVnU1bzBQd1FuU1p2aXpmZHNoQnNUcjRRaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTDZteDJVQWk2aldoTk1tY3RRQTl4VnJ0NUMzdHMrZXZOd0l6TVZiUjNBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZcXFvSjdMVzlMczhEUFJqVGFPOFZWVDVMR200eTJKS3BzSWcyYjBNbjA0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFDRTBJUml1ZEVzT2ExR2FNSnZKU29rNjFyRGY4K2hzem1uVzVYZlJTbXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFWNFhUSm0rVVVtdm85ZS9MTXpidTdvcGRPSTl0U3lQSEJZZjhPMXRmeVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0JJdnRoNnBLcEFwOGE5R21EVFk5SU1oQ0tEYjhZaGRsOVBobWlUY3pFbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2Vmeno5MEtmS1RUSVVQanhkY0hpcExXVGcrR1BDRUMyTjhkOUxwREN6OD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJNeWZnVThNL05oSXZGOWk2OXRFenBmVWM5MVlBTGVyTnBLYmJ1NTN3V3BwRk1RMVZJZkRMQ2NrNThEeGYrcjhGU3BNcEZSUHVlM2w2ajdKV1h5d0J3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEsImFkdlNlY3JldEtleSI6IlRZQmRNZWE1VWtsV0R1eFJBY3gwVW1CMEV2Ulg0MGE2cERneDNLeFdoMXc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTg2NDA5ODU0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE0NzkwQzVEMkI5Q0JBQzEwRjJBODY1OEVGQzBEMEMxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYwNTE3MjN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE4NjQwOTg1NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGQkQ1Rjk0NjY5ODc4Q0ZCMzhBNzI0NDNGOUIzNjczRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2MDUxNzI0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJaUzZIQ1pWQyIsIm1lIjp7ImlkIjoiOTIzMTg2NDA5ODU0OjZAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMzg0NzUxMTQ0OTY4Nzo2QGxpZCIsIm5hbWUiOiLwn5akIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMVFAyRThRZy9Lc3hRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJTK25YL0lKa2tubUl1bTA2RFpZUmI3ckxqQllOdmVWS1JsTUlsSzl4TEMwPSIsImFjY291bnRTaWduYXR1cmUiOiJtMGFrT3NacFN2cTljQTN5NTFXT3EyV2Z1ZnBjUndDUzBLamE5OUd4dHkrSTNOVW9BWlZuWUJ5QUlueEtYM2VyWnhUYXFialMrRmVUUTc3ZktBWGVDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidERPV25sdDBNa2NDRndRaEl5RExNSHRabGg5V0RobkFDVk9nNTJOVDk3Y050YVhta29mcHp1bXBtbVcxRzFYK3dpeVk1R2lQZFlkTWk5WkhDVWlSQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxODY0MDk4NTQ6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVdnAxL3lDWkpKNWlMcHRPZzJXRVcrNnk0d1dEYjNsU2taVENKU3ZjU3d0In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYwNTE3MjAsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS215In0=",
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
MENTION_REPLY: process.env.MENTION_REPLY || "true",
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
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923033096103",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*ManiMD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ManiMD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/sxw1yp.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "9233033096103",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};
