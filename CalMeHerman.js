//SEGEL CASE if (!issegel) return reply(`SEGEL CASE`)

const {
    WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers,
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const googleImage = require('g-i-s')
const brainly = require('brainly-scraper')
const fetch = require('node-fetch');
const request = require('request');
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const util = require('util')
const got = require("got");
const qrcodes = require('qrcode');
const imgbb = require('imgbb-uploader');
const os = require('os');
const { virtex, vipi } = require('./lib/virtex.js')
const Mfake = fs.readFileSync ('./media/ganteng.jpg')
const Mthumb = fs.readFileSync('./media/ganteng.jpg')
const timeWib = moment.tz('Asia/Jakarta').format('DD/MM')
		
// stickwm
const Exif = require('./lib/exif');
const exif = new Exif();

const { downloadMenu, infoMenu, gameMenu, groupMenu, funMenu, wibuMenu, ownerMenu, stickerMenu, otherMenu, rulesBot, islamMenu, sertiMenu, ceritaMenu, makerMenu,dewasaMenu, toolsMenu} = require('./message/help.js')
const { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
const { color, bgcolor } = require('./lib/color')
const { mess } = require('./message/mess')
const { Toxic } = require('./lib/Toxic.js')
const { cmdadd } = require('./lib/totalcmd.js')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { onGoing, dadu, asupan } = require("./lib/otakudesu.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { ythd } = require('./lib/ytdl')
const premium = require("./lib/premium");
const afk = require("./lib/afk");
const level = require("./lib/level");
const atm = require("./lib/atm");
const _sewa = require("./lib/sewa");

var kuis = false
hit_today = []
ky_ttt = []
const setGelud = require('./lib/gameGelud.js')
const game = require("./lib/game");
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]

let setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
let imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
let videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
let audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
let fakeimage = fs.readFileSync("./media/ganteng.jpg")
let errorImg = 'https://i.ibb.co/FBm52Pt/1e0fe6a08b67.jpg'
let setting = JSON.parse(fs.readFileSync('./setting.json'))

owner = setting.owner
gamewaktu = setting.gamewaktu
petik = '```'
fake = '©ArekN'//GANTI NAMA KAMU BEP
ban =[]

// Databaseis
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let _premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'));
let _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
let _uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
let glimit = JSON.parse(fs.readFileSync('./database/user/glimit.json'));
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));
let mute = JSON.parse(fs.readFileSync('./database/group/mute.json'));
let _update = JSON.parse(fs.readFileSync('./database/bot/update.json'))
let sewa = JSON.parse(fs.readFileSync('./database/group/sewa.json'));
let _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))

// GAME
let tebakanime = JSON.parse(fs.readFileSync('./database/tebakanime.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
let asahotak = JSON.parse(fs.readFileSync('./database/asahotak.json'))
let caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'))
let tebaksiapaaku = JSON.parse(fs.readFileSync('./database/tebaksiapaaku.json'))
let tebakbendera = JSON.parse(fs.readFileSync('./database/tebakbendera.json'))
let susunkata = JSON.parse(fs.readFileSync('./database/susunkata.json'))
let tebakata = JSON.parse(fs.readFileSync('./database/tebakata.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./database/tebaklirik.json'))
let tebakjenaka = JSON.parse(fs.readFileSync('./database/tebakjenaka.json'))
let tebakimia = JSON.parse(fs.readFileSync('./database/tebakimia.json'))
let kuismath = JSON.parse(fs.readFileSync('./database/kuismath.json'))
let tebaklagu = JSON.parse(fs.readFileSync('./database/tebaklagu.json'))
let tebaktebakan = JSON.parse(fs.readFileSync('./database/tebaktebakan.json'))
let family100 = [];

// Sticker Cmd
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}


module.exports = dha = async (dha, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
		global.ky_ttt
		global.blocked
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/gi) : '!'
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		hit_today.push(command)
		const arg = body.substring(body.indexOf(' ') + 1)
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
		if (isCmd) cmdadd()
		const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
        const q = args.join(' ')

        const botNumber = dha.user.jid
        const ownerNumber = setting.ownerNumber
		const ownerName = setting.ownerName
		const botName = setting.botName
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? dha.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const totalchat = await dha.chats.all()
		const groupMetadata = isGroup ? await dha.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = mek.key.fromMe ? dha.user.jid : dha.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? dha.user.name : conts.notify || conts.vname || conts.name || '-'
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
}
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
        const isOwner = ownerNumber.includes(senderr)
        const isPremium = premium.checkPremiumUser(sender, _premium)
        const isSewa = _sewa.checkSewaGroup(from, sewa)
        const isAfkOn = afk.checkAfkUser(sender, _afk)
        const isLevelingOn = isGroup ? _leveling.includes(from) : false
        const isMuted = isGroup ? mute.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isWelkom = isGroup ? welkom.includes(from) : false
        
        // here button function
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

        const gcount = setting.gcount
        
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = dha.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Silahkan Pilih Disini...!","footerText": "ArekNongkokerep","listType": "SINGLE_SELECT","sections": list}}, {})
            return dha.relayWAMessage(po, {waitForAck: true})
        }
        
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        const reply = (teks) => {
	      dha.sendMessage(from, teks, text, {quoted:mek, thumbnail: fakeimage})
        }
        const sendMess = (hehe, teks) => {
           dha.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
           (id == null || id == undefined || id == false) ? dha.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/ganteng.jpg')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : dha.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/ganteng.jpg')}, extendedText, { sendEphemeral: true, quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const sendText = (from, text) => {
           dha.sendMessage(from, text, MessageType.text)
        }
        const textImg = (teks) => {
           return dha.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./media/ganteng.jpg')})
        }
        const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./media/sherlynn.jpg')
        }}}
       const math = (teks) => {
           return Math.floor(teks)
       }
       const kick = function(from, orangnya){
	       for (let i of orangnya){
	       dha.groupRemove(from, [i])
        }
        }

       const kickMember = async(id, target = []) => {
           let group = await dha.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = dha.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await dha.groupRemove(to, [i])
        } else {
           await dha.sendMessage(id, "Not Premited!", "conversation")
           break
        }
    }
}
       const add = function(from, orangnya){
	       dha.groupAdd(from, orangnya)
}
       const sendKontak = (from, nomor, nama, org = "") => {
	       const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	       dha.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: mek})
}
      const hideTag = async function(from, text){
	       let anu = await dha.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       dha.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/sherlynn.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
      const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           dha.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:mek})
           fs.unlinkSync(asw)
});
});
});
}
       const sendMediaURL = async(to, url, text="", mids=[]) =>{
           if(mids.length > 0){
           text = normalizeMention(to, text, mids)
}
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, filename, async function () {
           console.log('done');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif
}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio
}
           dha.sendMessage(to, media, type, {quoted: mek, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
});
}
      const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       dha.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       dha.sendMessage(from, hasil, type, options).catch(e => {
	       dha.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
      const promoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await dha.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = dha.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await dha.groupMakeAdmin(to, [i])
           reply(`Hm..... @${mentioned[0].split('@')[0]} JABATANMU DINAIKAN AKU BANGGA PADAMU`)
}
}
}
      const demoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await dha.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = dha.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await dha.groupDemoteAdmin(to, [i])
           reply(`Hm..... @${mentioned[0].split('@')[0]} JABATANMU TURUNKAN SAYA IKUT SEDIH`)
				
}
}
}
          let authorname = dha.contacts[from] != undefined ? dha.contacts[from].vname || dha.contacts[from].notify : undefined	
          if (authorname != undefined) { } else { authorname = groupName }	
          function addMetadata(packname, author) {	
          if (!packname) packname = 'WABot'; if (!author) author = 'Bot';author = author.replace(/[^a-zA-Z0-9]/g, '');	
          let name = `${author}_${packname}`
          if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
          const json = {	
         "sticker-pack-name": packname,
         "sticker-pack-publisher": author,
}
         const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
         const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
         let len = JSON.stringify(json).length	
         let last	
         if (len > 256) {	
         len = len - 256	
         bytes.unshift(0x01)	
         } else {	
         bytes.unshift(0x00)	
}	
         if (len < 16) {	
         last = len.toString(16)	
         last = "0" + len	
         } else {	
         last = len.toString(16)	
}	
       const buf2 = Buffer.from(last, "hex")	
	   const buf3 = Buffer.from(bytes)	
	   const buf4 = Buffer.from(JSON.stringify(json))	
	   const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
	   fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
	   return `./sticker/${name}.exif`	
})	
}


     const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam🌃'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore🌇'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang🏙️'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi🌅'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Malam🌃'
}
         const levelRole = level.getLevelingLevel(sender, _level)
        var role = 'Warrior III'
        if (levelRole <= 5) {
            role = 'Warrior II'
        } else if (levelRole <= 10) {
            role = 'Warrior I'
        } else if (levelRole <= 15) {
            role = 'Elite III'
        } else if (levelRole <= 20) {
            role = 'Elite II'
        } else if (levelRole <= 25) {
            role = 'Elite I'
        } else if (levelRole <= 30) {
            role = 'Master III'
        } else if (levelRole <= 35) {
            role = 'Master II'
        } else if (levelRole <= 40) {
            role = 'Master I'
        } else if (levelRole <= 45) {
            role = 'GrandMaster III'
        } else if (levelRole <= 50) {
            role = 'GrandMaster II'
        } else if (levelRole <= 55) {
            role = 'GrandMaster I'
        } else if (levelRole <= 60) {
            role = 'Epic III'
        } else if (levelRole <= 65) {
            role = 'Epic II'
        } else if (levelRole <= 70) {
            role = 'Epic I'
        } else if (levelRole <= 75) {
            role = 'Legend III'
        } else if (levelRole <= 80) {
            role = 'Legend II'
        } else if (levelRole <= 85) {
            role = 'Legend I'
        } else if (levelRole <= 90) {
            role = 'Mythic'
        } else if (levelRole <= 95) {
            role = 'Mythical Glory'
        } else if (levelRole >= 100) {
            role = 'Immortal'
        } 
       // FUNCTION LEVELING
       if (isGroup && !mek.key.fromMe && !level.isGained(sender) && isLevelingOn) {
       try {
       level.addCooldown(sender)
       const checkATM = atm.checkATMuser(sender, _uang)
       if (checkATM === undefined) atm.addATM(sender, _uang)
       const uangsaku = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       atm.addKoinUser(sender, uangsaku, _uang)
       const currentLevel = level.getLevelingLevel(sender, _level)
       const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       const requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
       level.addLevelingXp(sender, amountXp, _level)
       if (requiredXp <= level.getLevelingXp(sender, _level)) {
       level.addLevelingLevel(sender, 1, _level)
       const userLevel = level.getLevelingLevel(sender, _level)
       const fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
       reply(`*「 LEVEL UP 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${level.getLevelingXp(sender, _level)} / ${fetchXp}\n➸ *Level :* ${currentLevel} -> ${level.getLevelingLevel(sender, _level)} 🆙 \n➸ *Role*: *${role}*\n\nCongrats!! 🎉🎉`)
} 
       } catch (err) {
       console.error(err)
}
}
        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const troli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 300, status: 200, thumbnail: fakeimage, surface: 200, message: fake, orderTitle: 'dha', sellerJid: '0@s.whatsapp.net'} } }
        const ftext = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `*Hai ${pushname}👋*\n  ${moment().utcOffset('+0700').format('HH:mm:ss')} ${moment.tz('Asia/Jakarta').format('DD/MM/YYYY')}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./media/sherlynn.jpg')}}}
        const ftoko = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./media/sherlynn.jpg`)},"title": `©ArekNongkokerep`,"description": "Amelia882", "currencyCode": "IDR","priceAmount1000": "99999999","retailerId": "ArekN882","productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}

      // Anti link
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                reply(`*「 GROUP LINK DETECTOR 」*\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                dha.groupRemove(from, [sender])
            }
        }
        
        
let {
    banChats,
} = setting

function banChat() {
    if (banChats == true) {
        return false
    } else {
        return true
    }
}
        
        // Sewa
             _sewa.expiredCheck(dha, sewa)
             
        // MUTE
             if (isMuted){
             if (!isGroupAdmins && !isPremium) return
 }
            
              const getWin = (userId) => {
              let position = false
              Object.keys(_win).forEach((i) => {
              if (_win[i].jid === userId) {
              position = i
       }
        })
              if (position !== false) {
              return _win[position].win
            }
        }
      // GAME 
             game.cekWaktuFam(dha, family100)
          
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var http = randomNomor(100)
                    atm.addKoinUser(sender, http, _uang)
                    await reply(`*_🎮 Tebak Gambar  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${http} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                }
            }
        if (game.isfam(from, family100)) {
            var anjuy = game.getjawaban100(from, family100)
            for (let i of anjuy){
                if (budy.toLowerCase().includes(i)){
                    var htgmp = Math.floor(Math.random() * 20) + 1
                    atm.addKoinUser(sender, htgmp, _uang)
                    await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgmp}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
                    var anug = anjuy.indexOf(i)
                    anjuy.splice(anug, 1)
                }
            }
            if (anjuy.length < 1){
                dha.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
                family100.splice(game.getfamposi(from, family100), 1)
            }
       }
            if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakanime[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmu = randomNomor(100)
                    atm.addKoinUser(sender, htgmu, _uang)
                    await reply(`*_🎮 Tebak Anime 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakanime*`)
                    delete tebakanime[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                }
            }
            if (tebaklagu.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklagu[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpl = randomNomor(100)
                    atm.addKoinUser(sender, htpl, _uang)
                    await reply(`*_🎮 Tebak Lagu 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpl} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklagu*`)
                    delete tebaklagu[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
                }
            }
            if (tebaktebakan.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaktebakan[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpu = randomNomor(100)
                    atm.addKoinUser(sender, htpu, _uang)
                    await reply(`*_🎮 Tebak Tebakan 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaktebakan*`)
                    delete tebaktebakan[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))                    
                }
            }
            if (kuismath.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = kuismath[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htcc = randomNomor(100)
                    atm.addKoinUser(sender, htcc, _uang)
                    await reply(`*_🎮 Kuis Matematika  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}kuismath*`)
                    delete kuismath[sender.split('@')[0]]
                    fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
                }
            }
          if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = asahotak[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgm = randomNomor(100)
                    atm.addKoinUser(sender, htgm, _uang)
                    await reply(`*_🎮 Asah Otak  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgm} 💰_\n\nIngin bermain lagi? kirim *${prefix}asahotak*`)
                    delete asahotak[sender.split('@')[0]]
                    fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
                }
            }
          if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmi = randomNomor(100)
                    atm.addKoinUser(sender, htgmi, _uang)
                    await reply(`*_🎮 Caklontong  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmi} 💰_\n\nIngin bermain lagi? kirim *${prefix}caklontong*`)
                    delete caklontong[sender.split('@')[0]]
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                }
            }
          if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakjenaka[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmuu = randomNomor(100)
                    atm.addKoinUser(sender, htgmuu, _uang)
                    await reply(`*_🎮 Tebak Jenaka  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmuu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakjenaka*`)
                    delete tebakjenaka[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
                }
            }
            if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmii = randomNomor(100)
                    atm.addKoinUser(sender, htgmii, _uang)
                    await reply(`*_🎮 Tebak Lirik 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmii} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`)
                    delete tebaklirik[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                }
            }
            if (tebakimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakimia[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmcc = randomNomor(100)
                    atm.addKoinUser(sender, htgmcc, _uang)
                    await reply(`*_🎮 Tebak Kimia 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkimia*`)
                    delete tebakimia[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
                }
            }
          if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaksiapaaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmk = randomNomor(100)
                    atm.addKoinUser(sender, htgmk, _uang)
                    await reply(`*_🎮 Tebak Siapakah Aku  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmk} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaksiapaaku*`)
                    delete tebaksiapaaku[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
                }
            }
          if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakbendera[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var html = randomNomor(100)
                    atm.addKoinUser(sender, html, _uang)
                    await reply(`*_🎮 Tebak Bendera  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${html} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`)
                    delete tebakbendera[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
                }
            }
          if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmp = randomNomor(100)
                    atm.addKoinUser(sender, htmp, _uang)
                    await reply(`*_🎮 Susun Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmp} 💰_\n\nIngin bermain lagi? kirim *${prefix}susunkata*`)
                    delete susunkata[sender.split('@')[0]]
                    fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                }
            }
          if (tebakata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmu = randomNomor(100)
                    atm.addKoinUser(sender, htmu, _uang)
                    await reply(`*_🎮 Tebak Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkata*`)
                    delete tebakata[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
                }
            }
// AFK
	if (isGroup) {
		if (!mek.key.fromMe && mek.key.fromMe) return
		for (let x of mentionUser) {
		    if (afk.checkAfkUser(x, _afk)) {
			const getId = afk.getAfkId(x, _afk)
			const getReason = afk.getAfkReason(getId, _afk)
			const getTime = afk.getAfkTime(getId, _afk)
			const cptl = `*「 AFK MODE 」*\n
*Sssttt! Orangnya lagi AFK, jangan diganggu!*
➸ *Alasan*  : ${getReason}
➸ *Sejak* : ${getTime}`
      mentions(cptl, x, true)
    }}
		if (afk.checkAfkUser(sender, _afk) && !isCmd) {
		    const getTime = afk.getAfkTime(sender, _afk)
		    const getReason = afk.getAfkReason(sender, _afk)
		    const ittung = ms(await Date.now() - getTime)
		    const pep = `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
		    reply(pep)
		    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
		    fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
		}
	    }
	
	    // Auto Read
        dha.chatRead(from, "read")
        //auto vn 
        await dha.updatePresence(from, Presence.recording)
      

       // CMD
        if (isCmd && !isGroup)
		    atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ PRIV ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        
        if (isCmd && isGroup)
            atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ GC ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
            

            switch(command){
     
//------------------< Premium >-------------------
       case 'premium': 
              if (!isOwner) return reply(mess.only.owner)
              if (args[0] === 'add') {
              if (mek.message.extendedTextMessage != undefined) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid

              premium.addPremiumUser(mentioned[0], args[2], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
                        
              } else {
                            
              premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
}
              } else if (args[0] === 'del') {
              if (mek.message.extendedTextMessage != undefined) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            _premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
              reply(mess.success)
              } else {
            _premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
              reply(mess.success)
}
              } else {
              reply(mess.wrongFormat)
}
              break
      case 'ytmp3':
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateA(teks).catch(e => {
            reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`き⃟🦈 Title : ${res[0].judul}\`\`\`
\`\`\`き⃟🦈 Ext : MP3\`\`\`
\`\`\`き⃟🦈 Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
})
            break
     case 'ytmp4':
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateV(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`き⃟🦈 Title : ${res[0].judul}\`\`\`
\`\`\`き⃟🦈 Ext : MP4\`\`\`
\`\`\`き⃟🦈 Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
})
            break
     case 'ytmp4hd':
     case 'ythd':
            if (args.length === 0) return reply(`Kirim perintah */ytmp4 _linkYt_*`)
            let isLinkks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinkks2) return reply(mess.error.Iv)
            try {
            reply(mess.wait)
            ythd(args[0])
           .then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res
            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
           .then((a) => {
            if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`き⃟🦈 Title : ${title}\`\`\`
\`\`\`き⃟🦈 Kualitas* : 720p\`\`\`
\`\`\`き⃟🦈 Size* : ${filesizeF}\`\`\`
\`\`\`き⃟🦈 Link* : ${a.data}\`\`\`

_Untuk durasi lebih dari batas disajikan dalam Bentuk link_`)

            const captionsYtmp4 = 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`き⃟🦈 Title : ${title}\`\`\`
\`\`\`き⃟🦈 Kualitas : 720p\`\`\`
\`\`\`き⃟🦈 Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

              sendMediaURL(from, thumb, captionsYtmp4)
              sendMediaURL(from, dl_link,`nih kak`).catch(() => reply(mess.error.api))
})		
})
              } catch (err) {
              reply(`eror`)
}
              break

       case 'loli':
       case 'husbu':
       case 'milf':
       case 'cosplay':
       case 'wallml':
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}info`,buttonText:{displayText:'ArekN_BOT'},type:1}]
              imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              dha.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
        case 'playy':
case 'lagu':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
teks = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(` Playing ${res.all[0].title}`)
let thumbInfo = ` *Youtube Search*
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
/////////////sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.Playing ${res.all[0].title}`)
let thumbInfo = `*${botname}* 
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case 'play2':   
				  if (args.length < 1) return reply('*Masukan judul nya?*')
                reply('Loading.... ')
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=${setting.zekskey}`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				dha.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:freply, caption: 'Nih Gan'})
					break  
				case 'play':
              if (!q) return reply('Linknya?')
              buttons = [{buttonId: `${prefix}play2 ${q}`,buttonText:{displayText: `🎥 Video`},type:1},{buttonId:`${prefix}playy ${q}`,buttonText:{displayText:'🎵 Mp3'},type:1}]
              imageMsg = (await dha.prepareMessageMedia(fs.readFileSync(`./media/ganteng.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/ganteng.jpg`)})).imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`Silahkan Pilih Media Yg Akan Di Download kak`,buttons,headerType:4}
              prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              dha.relayWAMessage(prep)
              break        
        case 'nulis':
        case 'tulis':
               if (args.length < 1) return reply('Yang mau di tulis apaan?')
               teks = args.join(' ')
               reply(mess.wait)
               nulis = encodeURIComponent(teks)
               res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
               if (res.data.error) return reply(res.data.error)
               buff = Buffer.from(res.data.result.split(',')[1], 'base64')
               dha.sendMessage(from, buff, image, {quoted: mek, caption: mess.success}).catch(e => {
               return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
               break

       case 'gifstiker':
				case 's':
			case 'stickergif':  
				case 'sticker':
				  case 'stiker':
					     if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await dha.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                dha.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await dha.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            dha.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break    

      case 'toimg':
              if (!isQuotedSticker) return reply('reply stickernya')
              reply(mess.wait)
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await dha.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
              buffer = fs.readFileSync(ran)
              dha.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
              fs.unlinkSync(ran)
})
              break
        case 'togif':
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await dha.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               dha.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted: mek, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
        case 'tovideo':
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await dha.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               dha.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: mek, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break


      case 'runtime':
              textImg(`${runtime(process.uptime())}`)
              break
      case 'ping':
      case 'speed':
              timestampe = speed();
              latensie = speed() - timestampe
              reply(`「 *SPEED HACK* 」\nMerespon dalam ${latensie.toFixed(4)} Sec 💬`)
              break 
//------------------< Owner >-------------------  						      
      case 'join': 
             if (!q) return reply('Linknya?')
             if (!isOwner) return reply(mess.only.owner)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = dha.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('Berhasil Masuk Grup')
             break
      case 'bc':
      case 'broadcast':
             if (!isOwner) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu = await dha.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await dha.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             dha.sendMessage(_.jid, bc, image, {quoted:freply,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
dha.sendMessage(_.jid, 
			{"contentText": `*「 Siaran Amelia882 」*\n#Ijin Siaran\n*Isi Pesan :* ${body.slice(4)}`,
			"footerText": 'ArekN',
			"buttons": [
			{"buttonId": `${prefix}menu`,
			"buttonText": {"displayText": "LIST MENU"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )
}
             reply('Suksess broadcast')
}
             break
      case 'clearall':
             if (!isOwner) return  reply(mess.only.owner)
             anu = await dha.chats.all()
             dha.setMaxListeners(25)
             for (let _ of anu) {
             dha.deleteChat(_.jid)
}
             reply('Sukses delete all chat :)')
             break
//------------------< G R U P >-------------------
       case 'afkmode': 
              if (!isGroup) return reply(mess.only.group)
              if (isAfkOn) return reply('Woe Kalo Mau Afk Jangan Nimbrung di sini')
              const reason = q ? q : 'Nothing.'
              afk.addAfkUser(sender, time, reason, _afk)
              const aluty = `Fitur AFK berhasil *diaktifkan!*\n\n➸ *Ussername*: ${pushname}\n➸ *Alasan*: ${reason}`
              reply(aluty)
              break
      case 'oi':
             if (!isOwner && !isPremium) return reply("Premium = TEMAN :V")
             try {
             quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
      case 'poi':
             if (!isOwner) return reply("Only Own")
             try {
             quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
//------------------< Fun >-------------------
    case 'public':
                if (!mek.key.fromMe && !isOwner) return reply('Fitur Khusus Owner!!')
                if (banChats === false) return
                // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
                setting.banChats = false
                banChats = false
                fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
                reply(`「 *PUBLIC-MODE* 」`)
                break
        case 'self':
                if (!mek.key.fromMe && !isOwner) return reply('Fitur Khusus Owner!!')
                if (setting.banChats === true) return
                setting.banChats = true
                uptime = process.uptime()
                // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
                banChats = true
                fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
                reply(`「 *SELF-MODE* 」`)
                break
//------------------< Lainnya >-------------------

				case 'ban':
					dha.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.owner)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			        ban = mentioned
					reply(`berhasil banned : ${ban}`)
					break
				case 'unban':
					if (!isOwner)return reply(mess.only.owner)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
					break
        case 'h':
        case 'hapus':
               try {
               if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply chat bot')
               dha.deleteMessage(from, {id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
               } catch (e){
               reply('Reply chat bot')
}
               break
//------------------------------------------------------------------
if (!isGroup && isCmd && !mek.key.fromMe){
teks = `Maaf @${senderr.split('@')[0]}, command ${prefix + command} tidak ada dalam menu`
dha.sendMessage(from, {text:teks, jpegThumbnail:fs.readFileSync('./media/canss.jpg')}, 'extendedTextMessage', {sendEphemeral:true, quoted:mek, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
}
	} 
if (isGroup && budy != undefined) {
} else {
console.log('[',color('TEXT','teal'),']',`Message : ${budy} From`, color(pushname))
}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	}
}



