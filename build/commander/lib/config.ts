import chalk from 'chalk';
import { initConfig } from './utils';

interface Options {
  show?: boolean;
  reset?: boolean;
}
export const config = (options: Options) => {
  console.log(chalk.greenBright(`Config path: ${process.templateCli}`));

  if (options.show) {
    open(process.templateCli.configFolder);
  }

  if (options.reset) {
    initConfig(true);
    console.log(chalk.greenBright('Config reset successful'));
    // return;
  }
};
