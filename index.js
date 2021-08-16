const app = require('express')()
const { exec } = require('child_process');

app.post('/deploy-nest', (req, res) => {
    exec('cd /workspace/tynass-backend && git pull && npm install || true && npm run build > /build-error.logs || true && pm2 restart nest',
        (error, stdout, stderr) => {
            if (error) {
                console.log('Redeployment nest failed:', Date.now())
                console.error(`exec error: ${error}`);
                return;
            }
            console.log('Redeployment nest successful:', Date.now())
        }
    );
    console.log('Redeployment nest attempt:', Date.now())
    res.status(200).json({
        status: 'ok'
    })
})

app.post('/deploy-next', (req, res) => {
    exec('cd /workspace/tynass-office && git pull && pm2 restart nextjs',
        (error, stdout, stderr) => {
            if (error) {
                console.log('Redeployment next failed:', Date.now())
                console.error(`exec error: ${error}`);
                return;
            }
            console.log('Redeployment next successful:', Date.now())
        }
    );
    console.log('Redeployment next attempt:', Date.now())
    res.status(200).json({
        status: 'ok'
    })
})


app.listen(8080)