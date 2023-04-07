export interface SpanProps {
  rowIndex: number;
  colIndex: number;
  contentIndex: number;
  spans: number;
  id: string;
  direction: 'col' | 'row';
  bgColor?: string;
  color?: string;
}

export default (hasFixed: boolean, isClone: boolean, colSpans: SpanProps[] | null | undefined): void => {
  if (hasFixed) {
    const wrap: HTMLDivElement | null = document.querySelector('#table-article-fixed');
    const list: NodeListOf<HTMLDivElement> = document.querySelectorAll('.table-article-fixed-list');

    if (wrap) {
      // 找到所有的colspan div
      const spanDivs: NodeListOf<HTMLDivElement> = document.querySelectorAll('.col-row-span');
      spanDivs.forEach((spanItem) => {
        // 先拿到rowIndex、colIndex、contentIndex、spans这些属性
        const { rowIndex } = spanItem.dataset;
        const { colIndex } = spanItem.dataset;
        const { contentIndex } = spanItem.dataset;
        const { spans } = spanItem.dataset;
        const { direction } = spanItem.dataset;

        // 根据上面这些属性计算出left、top、width、height
        let left = 0;
        let top = 0;
        let width = 0;
        let height = 0;
        let contentElement = null;
        const rowIndexNum = Number(rowIndex);
        const colIndexNum = Number(colIndex);
        const spansNum = Number(spans);
        const contentIndexNum = Number(contentIndex);

        if (rowIndex && colIndex && contentIndex && spans) {
          if (direction === 'col') {
            // 计算出height和top
            const listItem = list[rowIndexNum];
            height += listItem.clientHeight;
            for (let index = 0; index < list.length; index++) {
              const element = list[index];
              if (rowIndexNum > index) {
                top += element.clientHeight;
              } else {
                break;
              }
            }

            let count = 0;
            const spanDivs1: HTMLCollection = listItem.children;
            for (let index = 0; index < spanDivs1.length; index++) {
              const spanDiv = spanDivs1.item(index);
              if (index >= colIndexNum && spanDiv && count < spansNum) {
                width += spanDiv.clientWidth;
                count += 1;
              }
              if (colIndexNum > index && spanDiv) {
                left += spanDiv.clientWidth;
              }
            }

            // 根据contentIndex拿到内容
            contentElement = list[rowIndexNum].children.item(contentIndexNum);
          }

          if (direction === 'row') {
            // 计算出height和top
            let count = 0;
            for (let index = 0; index < list.length; index++) {
              const element = list[index];
              if (index >= rowIndexNum && count < spansNum) {
                height += element.clientHeight;
                count += 1;
              }
              if (rowIndexNum > index) {
                top += element.clientHeight;
              }
            }

            // 计算width和left
            const listItem = list[rowIndexNum];
            const spanDivs2: HTMLCollection = listItem.children;
            const spanDiv = spanDivs2.item(colIndexNum);
            if (spanDiv) {
              width += spanDiv.clientWidth;
            }
            for (let index = 0; index < spanDivs2.length; index++) {
              const spanDiv2 = spanDivs2.item(index);
              if (colIndexNum > index && spanDiv2) {
                left += spanDiv2.clientWidth;
              }
            }

            // 根据contentIndex拿到内容
            contentElement = list[rowIndexNum].children.item(contentIndexNum);
          }

          // 设置样式和内容
          spanItem.style.width = `${width - 4}px`;
          spanItem.style.height = `${height - 4}px`;
          spanItem.style.top = `${top + 2}px`;
          spanItem.style.left = `${left + 2}px`;
          // 这里有个问题如果是动态切换一个表格的话
          if (contentElement) {
            for (let index = 0; index < contentElement.children.length; index++) {
              const element = contentElement.children[index];
              const copyElement = element.cloneNode(true);
              if (isClone) {
                spanItem.appendChild(copyElement);
              } else {
                spanItem.appendChild(element);
              }
            }
          }
        }
      });
    }

    if (colSpans) {
      colSpans.forEach((colSpan) => {
        if (colSpan.bgColor) {
          if (colSpan.direction === 'col') {
            // 找到rowIndex所标注的行变色
            const tableArticleFixedElementList: NodeListOf<HTMLDivElement> =
              document.querySelectorAll('.table-article-fixed-list');
            const tableArticleFixedElementSure = tableArticleFixedElementList.item(colSpan.rowIndex);
            tableArticleFixedElementSure.style.backgroundColor = colSpan.bgColor;
            tableArticleFixedElementSure.style.color = colSpan.color || '';
            const tableArticleFlowElementList: NodeListOf<HTMLDivElement> =
              document.querySelectorAll('.table-article-flow-list');
            const tableArticleFlowElementSure = tableArticleFlowElementList.item(colSpan.rowIndex);
            tableArticleFlowElementSure.style.backgroundColor = colSpan.bgColor;
            tableArticleFlowElementSure.style.color = colSpan.color || '';
          }
          if (colSpan.direction === 'row') {
            // 找到rowIndex所标注的行加上span的数量变色
            const { spans } = colSpan;
            const tableArticleFixedElementList: NodeListOf<HTMLDivElement> =
              document.querySelectorAll('.table-article-fixed-list');
            const tableArticleFlowElementList: NodeListOf<HTMLDivElement> =
              document.querySelectorAll('.table-article-flow-list');
            for (let index = 0; index < spans; index++) {
              const tableArticleFixedElementSure = tableArticleFixedElementList.item(colSpan.rowIndex + index);
              tableArticleFixedElementSure.style.backgroundColor = colSpan.bgColor;
              tableArticleFixedElementSure.style.color = colSpan.color || '';
              const tableArticleFlowElementSure = tableArticleFlowElementList.item(colSpan.rowIndex + index);
              tableArticleFlowElementSure.style.backgroundColor = colSpan.bgColor;
              tableArticleFlowElementSure.style.color = colSpan.color || '';
            }
          }
        }
      });
    }
  }
};
