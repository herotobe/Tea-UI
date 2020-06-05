import React, { Children } from 'react';
import classnames from 'classnames';
import './row.less';

const prefix = 'tea';

interface RowProps {
  align?: 'top' | 'middle' | 'bottom';
  gutter?: number | Array<Number> | object;
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
  children?: React.ReactNode;
}

const Row = function (props: RowProps) {
  return (
    <div
      className={classnames(
        'tea-row',
        `${prefix}-row-${props.align}`,
        `${prefix}-row-${props.justify}`,
        {}
      )}
    >
      {props.children}
    </div>
  );
};

export default Row;
