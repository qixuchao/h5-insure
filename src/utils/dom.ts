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

export const addMetaForShare = (shareParams) => {
  const metaDescription = document.createElement('meta');
  metaDescription.setAttribute('property', 'og:description');
  metaDescription.content = shareParams.desc;
  document.head.appendChild(metaDescription);

  const metaImage = document.createElement('meta');
  metaImage.setAttribute('property', 'og:image');
  metaImage.content = shareParams.imageUrl;
  document.head.appendChild(metaImage);

  const metaTitle = document.createElement('meta');
  metaTitle.setAttribute('property', 'og:title');
  metaTitle.content = shareParams.title;
  document.head.appendChild(metaTitle);
};
