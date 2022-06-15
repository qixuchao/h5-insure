<!--
 * @Description:
 * @Autor: kevin.liang
 * @Date: 2022-02-18 16:50:26
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-02-18 16:50:26
-->

## 提交代码的备注规范

参考地址: [https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-angular](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-angular)

![动态图片](./snapshoot/commitlint.svg)

示例：

```sh
git commit -m 'feat: 开发xx页面或xx功能'
git commit -m 'fix: 修复xx问题'
git commit -m 'style: 规范xx页面或xx代码格式'
```

> 所有的 type 类型如下：

- feat: 新增 feature
- fix: 修复 bug
- docs: 仅仅修改了文档，比如 README, CHANGELOG, CONTRIBUTE 等等
- style: 仅仅修改了空格、格式缩进、分号等等，不改变代码逻辑
- refactor: 代码重构，没有加新功能或者修复 bug
- perf: 优化相关，比如提升性能、体验
- test: 测试用例，包括单元测试、集成测试等
- revert: 回滚到上一个版本
