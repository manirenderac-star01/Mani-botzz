const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0M5MGtGUnJhbVlRcC8rc0tBQzhiWFkzU2lyUDdMQkhSK1pQWTNnK2tsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0ZzTUdXc0gxTGVHZFlLUjFkWk8zdkJlaFpUSnBCMXFSVDdwQnlmT0ZHdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5RnpVUFdqZzFmTW1PRWVTMG9WR0ZhNkd6NHRuRFFRT05NUFlWU2lzV25jPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwWHZIcnRYMlVrbXI4S2k3ZElSd0xCN0JBeGJLbVFvZEpUMHdtQWE0WUhjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdOdG1Md1EzSUxPZjgxanpaTDJSUmxHNGpVTy9DMWRzOWRHNXJ6cVpta2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZxb0N0OVJ4S2o2ZkpBOTJKYzZXQ0RIaEt0TDQzMHlMdDJHYzBmK2wwZ289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0xwUHFvQVd1NlAvZ25SWGRrQnFSN1h1SUhRRDFqdWtPMDRZbFlNNWpGaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibjVsbmZnRzJtMjloQmJMZUhYbFZvZG5HL2dTV3I2SFZubTJFYUFoM1pnRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhwM3BsZHJuUW1tcHJKYlVzNjF3ZHY4ODBVSnNhOG5jN3FWcGlOZ0ZTV3BOYzgyUHdMYTdrSWttbkQybENtSWR1M1dOT0p6K0lpOWczalUrbTZzL0NBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE0LCJhZHZTZWNyZXRLZXkiOiIyaVowTm9OV1lxNEdvcElrRWUvM3duSlJOTDZNQkJlTDdJM29XSXhOYWFjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJTQ1EySzI4WiIsIm1lIjp7ImlkIjoiOTk4OTc3NjkyNzIxOjhAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNTIxMTA5MDYxMDE4NjE6OEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0puMHcrNEdFTFMzaGNVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjVCZTJhTW9NRUR5V2lxRGhhcnIxckRkdHU1SEQ4WUh6TmpBVlpxM3o0R289IiwiYWNjb3VudFNpZ25hdHVyZSI6Ii9CM1l4cllFYTJpbjkybS9aSUdVbldISVhIUWVJS3g5a1Y0Ym1PdWJjMWdVTlppZGQrUWFQd0dOUC8yc2xMb3k4eThJSXJqUW5OU0pZbG1CNGRicEFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJFUCtXcG1NNWg2a2tvR2hPcmxneWJpMkRMN1kzbFNxQk03UFQ4NjI3eXZsT2JSRVp0ZXd1MGZZaFdEM1RmN01sc2RMYXFYNFo1M0tJUGpiaEtoZGxDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk5ODk3NzY5MjcyMTo4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVRWHRtaktEQkE4bG9xZzRXcTY5YXczYmJ1UncvR0I4ell3RldhdDgrQnEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTQwNTI0MCwibGFzdFByb3BIYXNoIjoiM2dQVUprIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQV3gifQ==",
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
