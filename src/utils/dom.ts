// eslint-disable-next-line
export const getHiddenDomSize = (dom: HTMLElement | undefined) => {
  if (dom) {
    const clone = dom.cloneNode(true) as HTMLElement;
    clone.style.position = 'absolute';
    clone.style.top = '-9999px';
    clone.style.height = 'auto';
    document.querySelector('body')?.appendChild(clone);
    const height = clone.offsetHeight;
    document.querySelector('body')?.removeChild(clone);
    return height;
  }
  return 0;
};
