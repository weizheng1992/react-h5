## 简介

react-web 是一个免费开源的 web 模版。使用了最新的`react`,`vite3`,`TypeScript`等主流技术开发，开箱即用的中后台前端解决方案，也可用于学习参考。

## 特性

- **最新技术栈**：使用 react/vite3 等前端前沿技术开发
- **TypeScript**: 应用程序级 JavaScript 的语言
- **uncoss**：原子化 CSS

## 准备

- [node](http://nodejs.org/) 和 [git](https://git-scm.com/) -项目开发环境 vite3 需要 node>=14.18.0
- [Vite](https://vitejs.dev/) - 熟悉 vite 特性
- [react](https://zh-hans.reactjs.org/) - 熟悉 react 基础语法
- [Es6+](http://es6.ruanyifeng.com/) - 熟悉 es6 基本语法
- [TypeScript](https://www.typescriptlang.org/) - 熟悉`TypeScript`基本语法
- [react-Router](https://reactrouter.com/en/main) - 熟悉 react-router 基本使用
- [antd-mobile](https://mobile.ant.design/zh/guide/quick-start) - ui 基本使用
- [Pinia](https://pinia.web3doc.top/) - 数据状态管理
- [pnpm](https://www.pnpm.cn/) - 软件包管理器

```bash
  npm install pnpm -g

```

- [tailwind](https://www.tailwindcss.cn/) - css 库 vscode 安装拓展 Tailwind CSS IntelliSense
- [vueuse](https://vueuse.org/) - vue hooks 库

## 安装使用

- 获取项目代码

```bash
git clone https://gitlab.yoaimedicine.com/client/web/ivg-ngs.git
```

- 安装依赖

```bash
cd ivg-ngs

pnpm install

```

- 运行

```bash
pnpm start
```

- 打包

```bash
pnpm build
```

**Pull Request:**

1. 创建自己的分支: `git checkout -b feat/xxxx`
2. 提交你的修改: `git commit -am 'feat(function): add xxxxx'`
3. 推送您的分支: `git push origin feat/xxxx`
4. 提交`pull request`

## Git 提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `workflow` 工作流改进
  - `ci` 持续集成
  - `types` 类型定义文件更改
  - `wip` 开发中

## 目录结构

```bash
├── README.md
├── auto-imports.d.ts
├── commitlint.config.js
├── components.d.ts
├── index.html
├── jsconfig.json
├── lint-staged.config.js
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── public
├── src
│   ├── App.vue
│   ├── api                       接口
│   ├── assets                    文件
│   ├── components                组件
│   ├── const                     常量
│   ├── design                    样式
│   ├── hooks                     hook
│   ├── layouts                   布局
│   ├── main.js
│   ├── router                    路由和菜单
│   ├── store                     状态管理
│   ├── utils                     工具
│   └── views                     页面
├── stylelint.config.js
└── vite.config.js
```

## components

- SVG

  ```bash
  import Icon from '/@/components/icon/Icon.vue';
  import SvgIcon from '/@/components/icon/SvgIcon.vue';

  <Icon icon="ion:log-out" :size="30" />
  <SvgIcon name="schedule" size="32" />
  ```

  [icon 图标地址](https://iconify.design/) svg 放在 assets/icon 下面 schedule 是 svg 的名字
