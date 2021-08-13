const app = require('express')()
const { exec } = require('child_process');

app.post('/deploy-nest', (req, res) => {
    exec('cd /workspace/tynass-backend && git pull && npm run build > /build-error.logs || true && pm2 restart dist/main.js',
        (error, stdout, stderr) => {
            if (error) {
                console.log('Redeployment failed:', Date.now())
                console.error(`exec error: ${error}`);
                return;
            }
            console.log('Redeployment successful:', Date.now())
        }
    );
    console.log('Redeployment attempt:', Date.now())
    res.status(200).json({
        status: 'ok'
    })
})


app.listen(8080)