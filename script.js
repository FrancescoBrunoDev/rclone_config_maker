const fs = require('fs');
require('dotenv').config();

class Rclone {
    constructor() {
        this.config = `
      [OneDrive]
      type = onedrive
      client_id = ${process.env.CLIENT_ID}
      client_secret = ${process.env.CLIENT_SECRET}
      token = {"access_token":"${process.env.ACCESS_TOKEN}","token_type":"${process.env.TOKEN_TYPE}","refresh_token":"${process.env.REFRESH_TOKEN}","expiry":"${process.env.EXPIRY}"}
      drive_id = ${process.env.DRIVE_ID}
      drive_type = personal
      `;
    }

    async createConfig() {
        return fs.promises
            .writeFile("rclone.conf", this.config)
            .then(() => {
                console.log("File di configurazione rclone creato con successo.");
            })
            .catch((err) => {
                console.error(`Errore durante la scrittura del file: ${err}`);
            });
    }
}

// Execution
const rclone = new Rclone();
rclone.createConfig();