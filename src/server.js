import express from 'express';
import {config} from 'dotenv';

import routesfro from './routes/index.routes.js';
import routes from './routes/index.routes.js';

config()

const serverPort = process.env.PORT || 4000

const app = express();
app.use (express.json());
app.use (routes);

app.listen(serverPort, () => {
    console.log(`💜 Server started on http://localhost:${serverPort}`)
})