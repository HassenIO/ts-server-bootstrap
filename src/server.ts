import dotenv from 'dotenv';
import app from './app';
dotenv.config();

const { SERVER_PORT } = process.env;
const port = SERVER_PORT || 8080;

const server = app.listen(port, () => {
  console.log(`🚀  Server started at http://localhost:${port}`);
});

/**
 * Enable Hot module reloading on development.
 */
if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => {
    console.log('🔥  Hot module disposed...');
    server.close();
  });
}
