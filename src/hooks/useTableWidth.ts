interface ColumnProps {
  title: string;
  key: string;
  fixed?: boolean;
  width?: number;
  align?: 'left' | 'right' | 'center';
  scopedSlots?: { customRender: string };
}
/**
 * 先获取header的宽度，然后获取这个header下面的每个内容的宽度的最大值，然后做对比最后设置
 */
export default (columns: ColumnProps[]): void => {
  columns.forEach((column) => {
    const headerKey: string = column.key;
    const headerDiv: HTMLDivElement | null = document.querySelector(`#${headerKey}`);
    const tableDivs: NodeListOf<HTMLDivElement> = document.querySelectorAll(`.${headerKey}`);
    if (headerDiv) {
      const headerUnitWidth: number = headerDiv.clientWidth;
      let maxedUnitWidth: number = headerUnitWidth;
      const { length } = tableDivs;
      for (let index = 0; index < length; index++) {
        const tableDiv = tableDivs[index];
        const tableUnitWidth: number = tableDiv.clientWidth;
        if (tableUnitWidth > maxedUnitWidth) {
          maxedUnitWidth = tableUnitWidth;
          // eslint-disable-next-line no-continue
          continue;
        }
      }

      // 设置
      headerDiv.style.width = `${maxedUnitWidth}px`;
      tableDivs.forEach((tableDiv) => {
        tableDiv.style.width = `${maxedUnitWidth}px`;
      });
    }
  });
};
