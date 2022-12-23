import { LIST_NUM, KEY } from './constant';

// todo 处理哪些使用px的地方
export function renderText($dom: any) {
  const fontSize = parseFloat($dom.css('font-size'));
  let lineHeight: string | number = $dom.css('line-height');

  // todo 处理浏览器默认行高、包含继承、自定义等属性
  if (lineHeight === 'normal') {
    lineHeight = fontSize * 1.4;
  } else {
    lineHeight = parseFloat(lineHeight as string);
  }

  const textHeightRatio = fontSize / lineHeight;
  const firstColorPoint = (((1 - textHeightRatio) / 2) * 100).toFixed(2);
  const secondColorPoint = (((1 - textHeightRatio) / 2 + textHeightRatio) * 100).toFixed(2);

  // const style = `--fp:${firstColorPoint}%;--sp:${secondColorPoint}%;--lh:${(lineHeight / fontSize).toFixed(2)};`;
  const style = `--fp:${firstColorPoint}%;--sp:${secondColorPoint}%;--lh:${lineHeight}px;`;
  $dom.addClass('sk-text');
  $dom.attr('style', style);
}

export function renderImg($dom: any) {
  $dom.css({
    background: '#eee',
  });
  if ($dom.attr(KEY) === 'img') {
    $dom.attr('style', `width:${$dom[0].offsetWidth}px;height:${$dom[0].offsetHeight}px;`);
  }
  const emptyImage = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  $dom.attr('src', emptyImage);
}

export function renderBlock($dom: any) {
  $dom.addClass('sk-block');
}

export function renderSubBlock($dom: any) {
  $dom.addClass('sk-sub-block');
  $dom.empty();
}

export function renderBorder($dom: any) {
  $dom.addClass('sk-border');
}

export function renderButton($dom: any) {
  $dom.addClass('sk-button');
}

export function renderList($dom: any) {
  $dom.addClass('sk-list');

  const $children = $dom.children();
  const $child = $children.first();
  const len = $children.length;

  const num = parseInt($dom.attr(LIST_NUM) as string, 10) || len;

  // 列表元素子节点统一，保证页面骨架整齐
  for (let i = 1; i < len; ++i) {
    $children.eq(i).remove();
  }
  for (let i = 1; i < num; i++) {
    const tmp = $child.clone(true);
    $dom.append(tmp);
  }
}

export function renderListItem($dom: any) {
  $dom.addClass('sk-list-item');
}

export function renderBackgroundImage($dom: any) {
  $dom.addClass('sk-bg');
}

export function renderInput($dom: any) {
  $dom.addClass('sk-input');
}

export function renderIgnore($dom: any) {
  $dom.addClass('sk-ignore');
}
