// eslint-disable-next-line
export const getHiddenDomHeight = (dom: HTMLElement | undefined) => {
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

export const addMetaForShare = (content) => {
  const metaDescription = document.createElement('meta');
  metaDescription.setAttribute('property', 'og:description');
  metaDescription.content = content;
  document.head.appendChild(metaDescription);
};
