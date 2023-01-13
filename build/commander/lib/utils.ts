import nodePath from 'path';
import fs from 'fs-extra';
import { homedir } from 'os';

export function checkVersion(version: string) {
  const currentNodeVersion = process.versions.node;
  const semver = currentNodeVersion.split('.');
  const major = semver[0];
  if (major < version) {
    console.error(`You are running Node ${currentNodeVersion}
Templace Cli requires Node ${version} or higher
Please update your version of Node`);
    process.exit(1);
  }
}

export function initConfig(reset = false) {
  try {
    const homePath = homedir();
    const configName = 'template-cli-config.json';
    const configPath = `${homePath}/.${configName}`;
    const originConfigPath = nodePath.resolve(__dirname, `../config.json`);
    if (!fs.existsSync(configPath) || reset) {
      fs.copyFileSync(originConfigPath, configPath);
    }

    process.templateCli = {
      config: require(configPath),
      configPath,
      configFolder: homePath,
    };
  } catch (err) {
    console.error('Template Cli Config init failed');
    process.exit(1);
  }
}
