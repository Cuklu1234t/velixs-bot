const { menuByLabel } = require("../../app/func/loadCommands.js")

module.exports = {
    name : "menu",
    description : "Menu Bot Velixs-Bot",
    cmd : ['help', 'menu'],
    run : async({ m, sock }) => {
        let text = ''
        text += '*😺 Menu Velixs-Bot*\n\n'

        menuByLabel.forEach((val, key) => {
            text += `┌──「 *${key}*\n`
            val.forEach((v) => {
                text += `▢ ${m.prefix+v.cmd[0]} ${v.example}\n`
            })
            text += `└────────────\n\n`
        })

        text += `\n`
        text += `_👑 Author: Ilsya_\n`
        text += `⚡ _Sources: www.github.com/ilsyaa/velixs-bot_`
        
        

        console.log(menuByLabel);
        return sock.sendMessage(m.from, { text: text }, { quoted: m })
    }
}