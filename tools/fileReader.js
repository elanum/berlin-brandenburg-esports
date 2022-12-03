const path = require('path');
const dotenv = require('dotenv');
const fs = require('fs');

const vars = [
  'DISCORD_BOT_TOKEN',
  'DISCORD_BOT_APPLICATION_ID',
  'DISCORD_GUILD_ID',
  'TWITTER_APP_KEY',
  'TWITTER_APP_SECRET',
  'TWITTER_ACCESS_TOKEN',
  'TWITTER_ACCESS_TOKEN_SECRET',
].map((env) => `NX_${env}`);

function calcPath(relativePath) {
  return path.join(__dirname, relativePath);
}

function getMissingEnvs(envs) {
  return vars.reduce(
    (prev, curr) =>
      !Object.keys(envs).includes(curr) ? [...prev, curr] : prev,
    []
  );
}

function getEnvVariables(envPath) {
  const variables = dotenv.parse(fs.readFileSync(calcPath(envPath)));
  const missing = getMissingEnvs(variables);

  if (missing.length) {
    const message = `Missing environment variables: ${missing.join(', ')}`;
    throw new Error(message);
  }

  return variables;
}

module.exports = { calcPath, getEnvVariables };
