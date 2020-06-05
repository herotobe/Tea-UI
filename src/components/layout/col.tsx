import React, { Children } from 'react';
import classnames from 'classnames';
import './col.less';

const prefix = 'tea';

interface ColProps {
  span: number;
  children?: React.ReactNode;
}

const Col = function (props: ColProps) {
  return (
    <div className={classnames('tea-col', `${prefix}-col-${props.span}`, {})}>{props.children}</div>
  );
};

export default Col;
