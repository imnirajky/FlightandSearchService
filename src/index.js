const express = require('express');
const { PORT } = require('./config/serverConfig');

const setupAndStartServer = async() => {
    //create the express object named app
    const app = express();
    app.listen(PORT, () => {
        console.log(`Server Launched on PORT: ${PORT}`);
    });
}
setupAndStartServer();