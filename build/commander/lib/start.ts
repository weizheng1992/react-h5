import inquirer from 'inquirer';
import chalk from 'chalk';
import { spawn } from 'child_process';
import { resolve } from 'path';

export const start = async (projectName: string) => {
  const cliConfig = process.templateCli.config;
  try {
    if (!projectName) {
      const answers = await inquirer.prompt([
        {
          type: 'list',
          name: 'projectName',
          message: '请选择项目的构建项目的名字',
          choices: cliConfig.name,
        },
      ]);
      projectName = answers.projectName;
    }

    const ls = spawn('npm', ['run', `dev`], {
      cwd: resolve(process.cwd()),
      env: { ...process.env, VITE_PRO_NAME: projectName },
    });

    ls.stdout.on('data', (data) => {
      console.log(chalk.blueBright(data));
    });

    ls.stderr.on('data', (data) => {
      console.log(chalk.yellowBright(`stderr: ${data}`));
    });
  } catch (err: any) {
    console.log();
    console.log(
      chalk.redBright(`The ${chalk.yellow(projectName)} project init failed: ${err.message}`),
    );
    process.exit(1);
  }
};
