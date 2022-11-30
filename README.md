# 编辑器与eslint集成
- 如果有vetur就禁用掉
- 安装eslint插件
  - 只要安装并启动了插件 默认查找项目中的eslint 配置规则 并处给出验证提示
  - eslint提供了格式化工具 根据项目配置进行格式化 但需要手动配置
- 安装volar插件 (针对vue3相应的类型验证)

配置:
1. vscode -> 首选项 -> 设置 -> 拓展 -> eslint -> format:Enable 打开
2. 右键使用...格式化 将默认值选择eslint

# 项目配置了 eslint+git commit 钩子 提交代码时会做校验