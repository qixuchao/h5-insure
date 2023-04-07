/* eslint-disable no-param-reassign */
import { Rule } from 'postcss';

const processedRules = new WeakSet<Rule>();

interface PluginOptions {
  wrapSelector: string;
}
const plugin = (opts: PluginOptions) => {
  const { wrapSelector } = opts;

  function rewriteSelector(rule: Rule): string {
    const selector = rule.selector || '';

    const group: string[] = [];
    selector.split(',').forEach((sel) => {
      // todo 这里需要排除不在骨架屏中使用的样式
      const re = /\[data-v-.*?\]/gim;
      if (re.test(sel)) {
        group.push(`${wrapSelector} ${sel.replace(re, '')}`);
      }
    });

    if (!group.length) return selector;
    return `${selector}, ${group.join(',')}`;
  }

  function processRule(rule: Rule) {
    if (processedRules.has(rule)) {
      return;
    }
    processedRules.add(rule);
    rule.selector = rewriteSelector(rule);
  }

  return {
    postcssPlugin: 'skeleton-group-selector-plugin',
    Rule(rule: Rule) {
      processRule(rule);
    },
  };
};
plugin.postcss = true;

export default plugin;
