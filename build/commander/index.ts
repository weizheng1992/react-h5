import { program } from 'commander';
import figlet from 'figlet';
import { clear } from 'console';
import { checkVersion, initConfig } from './lib/utils';
import { init } from './lib/build';
import { config } from './lib/config';
import { start } from './lib/start';

import pkg from '../../package.json';

clear();

checkVersion('14');
initConfig();

console.log(figlet.textSync('先声诊断   打包配置'));

program.version(pkg.version, '-v,--version');

program
  .command('build [projectName]')
  .option('-t,--env-type <envType>', '选择打包环境')
  .description('选择打包配置')
  .action(init);

program
  .command('start [projectName]')
  .option('-t,--env-type <envType>', '选择打包环境')
  .description('选择打包配置')
  .action(start);

program
  .command('config')
  .option('-s,--show', 'show config in explorer')
  .option('-r,--reset', 'reset config')
  .description('operating config')
  .action(config);

program.parse(process.argv);
