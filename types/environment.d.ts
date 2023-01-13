declare global {
  namespace NodeJS {
    interface Process {
      templateCli: TplCli;
    }
  }
}

export interface TplCli {
  config: Recordable;
  configPath: string;
  configFolder: string;
}
