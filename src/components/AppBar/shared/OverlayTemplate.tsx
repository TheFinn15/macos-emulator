import classNames, { Argument } from 'classnames';
import styles from '../AppBar.module.scss';
import { DOMAttributes } from 'react';
import { BarItem as IBarItem, IconBarItem } from '../../types.ts';
import { OverlayTemplateProps } from '../props.ts';

function OverlayTemplate({
  item,
  ind,
  currentApp,
  hovered,
  onHover,
  onClick,
}: OverlayTemplateProps) {
  const stylesAttrs: Argument = {
    [styles.appbarIconSelected]: ind === hovered,
  };
  const attrs: DOMAttributes<HTMLSpanElement | HTMLDivElement> = {
    onMouseEnter: () => onHover(ind),
    onClick: () => onClick(ind),
  };

  function isIcon(data: IBarItem): data is IconBarItem {
    return !!(data as IconBarItem)?.icon;
  }

  if (isIcon(item)) {
    return (
      <div
        className={classNames(styles.appbarIcon, {
          ...stylesAttrs,
        })}
        {...attrs}
      >
        <i className={item.icon} />
      </div>
    );
  } else {
    return (
      <span
        className={classNames({
          ...stylesAttrs,
          '!font-bold': new RegExp(currentApp, 'gmi').test(item.label),
        })}
        {...attrs}
      >
        {item.label}
      </span>
    );
  }
}

export default OverlayTemplate;
