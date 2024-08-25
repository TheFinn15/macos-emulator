import classNames, { Argument } from 'classnames';
import * as React from 'react';

interface Props extends React.DOMAttributes<HTMLDivElement> {
  styleAttrs?: Argument;
  label: string;
}

function BarItemIcon(props: Props) {
  const { label, styleAttrs = {}, ...attrs } = props;
  return (
    <span className={classNames(styleAttrs)} {...attrs}>
      {label}
    </span>
  );
}

export default BarItemIcon;
