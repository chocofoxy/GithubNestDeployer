const app = require('express')()
const { exec } = require('child_process');

app.post('/deploy-nest', (req, res) => {
    exec('cd ~/workspace/tynass-backend && git pull && npm run build && pm2 restart dist/main.js',
        (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);
        }
    );
    console.log('Redeployment :', Date.now())
    res.status(200).json({
        status: 'ok'
    })
})


app.listen(8080)