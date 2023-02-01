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
export interface ListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface ColumnProps {
  title: string;
  key: string;
  fixed?: boolean;
  width?: number;
  align?: 'left' | 'right' | 'center';
  scopedSlots?: { customRender: string };
}
