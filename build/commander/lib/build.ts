import inquirer from 'inquirer';
import chalk from 'chalk';
import { spawn } from 'child_process';
import { resolve } from 'path';

export const init = async (projectName: string, options: any) => {
  const cliConfig = process.templateCli.config;
  try {
    if (!projectName) {
      const answers = await inquirer.prompt([
        {
          type: 'list',
          name: 'projectName',
          message: '请选择项目的名字',
          choices: cliConfig.name,
        },
      ]);
      projectName = answers.projectName;
    }

    let envType = options.envType;
    if (!envType) {
      const answers = await inquirer.prompt([
        {
          type: 'rawlist',
          name: 'envType',
          message: '请选择构建环境',
          choices: [
            {
              key: 'a',
              name: '默认',
              value: '',
              checked: true,
            },
            {
              key: 'b',
              name: 'test',
              value: ':test',
            },
            {
              key: 'c',
              name: 'prod',
              value: ':prod',
            },
          ],
        },
      ]);
      envType = answers.envType;
    }

    const answers = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'fileName',
        message: '打包完成文件名是否是项目名',
        default: false,
      },
    ]);
    const isProName = answers.fileName;

    const ls = spawn('npm', ['run', `build${envType}`], {
      cwd: resolve(process.cwd()),
      env: { ...process.env, VITE_PRO_NAME: projectName, VITE_IS_NAME: isProName },
    });

    ls.stdout.on('data', (data) => {
      console.log(chalk.blueBright(data));
    });

    ls.stderr.on('data', (data) => {
      console.log(chalk.yellowBright(data));
    });
  } catch (err: any) {
    console.log();
    console.log(
      chalk.redBright(`The ${chalk.yellow(projectName)} project init failed: ${err.message}`),
    );
    process.exit(1);
  }
};
