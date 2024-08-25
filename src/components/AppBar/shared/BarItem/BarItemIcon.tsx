import classNames, { Argument } from 'classnames';
import styles from '@components/AppBar/AppBar.module.scss';
import * as React from 'react';

interface Props extends React.DOMAttributes<HTMLDivElement> {
  styleAttrs?: Argument;
  icon: string;
}

function BarItemIcon(props: Props) {
  const { icon, styleAttrs = {}, ...attrs } = props;
  return (
    <div className={classNames(styles.appbarIcon, styleAttrs)} {...attrs}>
      <i className={icon}>{icon}</i>
    </div>
  );
}

export default BarItemIcon;
