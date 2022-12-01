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
# git commit message 和 change log 指南
## 项目中构建了 强制commit校验 禁止不符合规范的commit进入
采用angular团队规范
git commit 规范可以直接生成change log
- commit 分三个部分
- header body footer
- header必须的 其中有 type(必须) scope(可选) subject(必须)
  - type :
    1. feat: 新功能
    2. fix: 改bug
    3. docs: 文档
    4. style: 格式不影响代码变动
    5. refactor: 重构(不加新功能 也不修改bug)
    6. test: 增加测试
    7. chore: 新增工具 或者包
  - scope 用于说明commit 影响范围 比如数据层 控制层 试图层等等
  - subject commit 简短描述

- body 本次commit 详细描述
- footer
  - 声明不兼容变动
  - 关闭issue


