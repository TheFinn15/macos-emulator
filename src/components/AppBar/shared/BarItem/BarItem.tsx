import OverlayView from '../../../OverlayView/OverlayView.tsx';
import { BarItemProps } from '../../props.ts';
import BarItemOverlay from './BarItemOverlay.tsx';

function BarItem(props: BarItemProps) {
  const { ind, touched, hovered, onHover, onTouch } = props;

  function onClickItem(ind: number) {
    onTouch(ind > -1);
    onHover(ind);
  }

  function onHoverItem(ind: number) {
    if (touched) {
      onHover(ind);
    }
  }

  function onClose() {
    onClickItem(-1);
  }

  return (
    <OverlayView
      key={hovered}
      overlay={props.item.items}
      visible={ind === hovered}
      onClose={onClose}
    >
      <BarItemOverlay
        {...props}
        hovered={hovered}
        onHover={onHoverItem}
        onClick={onClickItem}
      />
    </OverlayView>
  );
}

export default BarItem;
