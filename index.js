const app = require('express')()
const { exec } = require('child_process');





app.all('deploy-nest', (req,res) => {
    exec('cd ~/tynass-backend && git pull && npm run build && pm2 restart dist/main.js');
})


app.listen(8080)