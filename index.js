const app = require('express')()
const { exec } = require('child_process');

app.post('/deploy-nest', (req,res) => {
    exec('cd ~/tynass-backend && git pull && npm run build && pm2 restart dist/main.js');
    console.log('Redeployment :', Date.now() )
    res.status(200).json({ status : 'ok' })
})


app.listen(8080)