module.exports = {
  // type of type. (the up and down keys can be used to select)
  types: [
    { value: 'feat', name: 'feat:     新增功能' },
    { value: 'fix', name: 'fix:      修复 bug' },
    { value: 'docs', name: 'docs:     文档变更' },
    { value: 'style', name: 'style:    代码格式（不影响功能，例如空格、分号等格式修正）' },
    { value: 'perf', name: 'perf:     性能优化' },
    { value: 'test', name: 'test:     添加、修改测试用例' },
    {
      value: 'build',
      name: 'build:    构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）'
    },
    { value: 'ci', name: 'ci:       修改 CI 配置、脚本' },
    {
      value: 'chore',
      name: 'chore:    对构建过程或辅助工具和库的更改（不影响源文件、测试用例）'
    },
    { value: 'revert', name: 'revert:   回滚 commit' },
    { value: 'refactor', name: 'refactor: 代码重构（不包括 bug 修复、功能新增）' }
  ],

  // scope of type.（the up and down keys can be used to select）
  scopes: [
    ['deps', '项目依赖'],
    ['base', '基类修改'],
    ['error', '错误相关'],
    ['utils', 'utils 相关'],
    ['settings', '配置相关'],
    ['device', '设备信息相关'],
    ['performance', '性能相关'],
    ['other', '其他修改']
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`
    }
  }),

  /**
   * whether to allow custom filling of scope
   * (in the scope selection, there are empty and custom options)
   * */
  allowCustomScopes: true,
  // For each type, define the corresponding scopes, e.g.fix
  /**
   scopeOverrides: {
     fix: [
       { name: 'merge' },
       { name: 'style' },
       { name: 'e2eTest' },
       { name: 'unitTest' }
     ]
   },
  */
  // interactive prompt messages
  messages: {
    type: '选择你要提交的类型：',
    scope: '\n选择一个 scope（可选）：',
    // 选择 scope: custom 时会出下面的提示
    customScope: '请输入自定义的 scope：',
    subject: '填写简短精炼的变更描述：\n',
    body: '填写更加详细的变更描述（可选）。使用 "|" 换行：\n',
    breaking: '列举非兼容性重大的变更（可选）：\n',
    footer: '列举出所有变更的 ISSUES CLOSED（可选）。 例如: #31, #34：\n',
    confirmCommit: '确认提交？'
  },
  // set the breaking message to ask only if type is selected as feat or fix
  allowBreakingChanges: ['feat', 'fix'],
  // skipQuestions: ['body', 'footer'],
  subjectLimit: 100,
  breaklineChar: '|' // support for body and footer
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true,
}
