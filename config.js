module.exports = {
    app: {
        px: '-',
        token: 'OTEwNjUwNDM0NDk3MTc5Njg5.YZV7Tg.N0zoYGjqPslAY47Nl7k4rsWEn-g',
        playing: 'music for your masa ❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
