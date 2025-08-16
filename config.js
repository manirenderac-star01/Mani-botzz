const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0VYQ05GSSszTEQvUUMvTlZkYkkzcVYyclNiVHBhTGdSZTZ2ZTZLc1hrWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2E2alZDM2cxK1ZOMy8vNCtURFJLd1VNQUxkeHA3ekFRMVBKUFRDSm1sTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TTdJOVZPeHE0UDdncG1paWozbGhiUXVZcE9ZZTMwQzFvNkFrOHFDcUdVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4MTlDVjZ4L2hZcFRUYTFPbXF6TFlGK3hSYmpnd2p4T2FObkdWR3NBUVZFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVDdWtxSTlHcEJLR1MwTC9wRk1MS3I0NXR2WTNmWVBvb2pjcFVKRjhHM009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFiT2VEMnNKU0k4UEp4QmlQajRtdzBIR2tES3BNdFlmT3UrbjUwUGtTM0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0R4NkNrVFIwdFRramRaaFg3MldlUXY1Y2dxdGpkc3RSdHJFbm82NmxFTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ2N6N3pOZ1o1YmdETysrWlEvNnc5cDRRcGZYSHAvdnVacnBKeDF4ZVEzVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdHOTdBTWdpV1I4NktMZFZHN0pxeTBHblN0MDg2YmJzbU9FTVFXWHRpUDZXL0EvbXc1dHg0WXJMMWdCaWdhWkxWdFUvdEpCVmM1WTdRMGNQRkp3MWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAxLCJhZHZTZWNyZXRLZXkiOiI4TDRVUWpHdHd1bmROcHBDdWRXYVlZRWRHaXA0OEdjc1ZyVURyeFIySCs4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk5ODk3NzY5MjcyMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3OUM1Rjk4REJCNTAxRTYyMEMzMjYwMTNFQ0YyQzlBMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU1MzY3NTQ1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJHRlJWSDNXNCIsIm1lIjp7ImlkIjoiOTk4OTc3NjkyNzIxOjdAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNTIxMTA5MDYxMDE4NjE6N0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pqMHcrNEdFUEdRZzhVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjVCZTJhTW9NRUR5V2lxRGhhcnIxckRkdHU1SEQ4WUh6TmpBVlpxM3o0R289IiwiYWNjb3VudFNpZ25hdHVyZSI6IkNGTmxDVmNqWmdaVUhLUngyV0gyWG9ubnRra2pZTGxwSGhGM2pZTVVrcS9LSmlHdVNnaUg4ejFWN1VhbGJmNGM4LytBbUN0b1BDTVRLK2ZmcE9pUkFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJxNTkraFBzNmNHUFI1YVRzU3ZGYWZOdzdJUld6blBlbzB1VWthQjRLbFJ4TnNSNVhud2xPalVkdDIrZmdBMnNraU5haGhuaDBrd0tYMFJnYmVjSHJnQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk5ODk3NzY5MjcyMTo3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVRWHRtaktEQkE4bG9xZzRXcTY5YXczYmJ1UncvR0I4ell3RldhdDgrQnEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTM2NzU0MCwibGFzdFByb3BIYXNoIjoiM2dQVUprIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQbGMifQ==",
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
