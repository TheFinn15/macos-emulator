import { Argument } from 'classnames';
import styles from '@components/AppBar/AppBar.module.scss';
import { DOMAttributes } from 'react';
import { BarItem as IBarItem, IconBarItem } from '@components/types.ts';
import { OverlayTemplateProps } from '../../props.ts';
import BarItemIcon from './BarItemIcon.tsx';
import BarItemLabel from './BarItemLabel.tsx';

function BarItemOverlay({
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
    return <BarItemIcon styleAttrs={stylesAttrs} icon={item.icon} {...attrs} />;
  } else {
    return (
      <BarItemLabel
        label={item.label}
        styleAttrs={{
          ...stylesAttrs,
          '!font-bold': new RegExp(currentApp, 'gmi').test(item.label),
        }}
        {...attrs}
      />
    );
  }
}

export default BarItemOverlay;
