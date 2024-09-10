import { ListItem } from '@components/types.ts';
import BarItemIcon from './BarItem/BarItemIcon.tsx';
import classNames from 'classnames';
import OverlayView from '@components/OverlayView/OverlayView.tsx';
import OverlayList from './BarActions/OverlayList.tsx';

type BarActionsType = 'wifi' | 'bluetooth' | 'volume' | 'switch-fill';

function BarActions() {
  const is12Hours = false;

  const currentTime = format(
    new Date(),
    `eee d LLL ${is12Hours ? 'hh' : 'HH'}:mm ${is12Hours ? 'a' : ''}`
  );

  const actions: ListItem<BarActionsType>[] = [
    'i-ic:wifi',
    'i-mdi:bluetooth',
    'i-mdi:volume',
    'i-mingcute:switch-fill',
  ].map((icon) => ({
    key: icon.slice(icon.lastIndexOf(':') + 1) as BarActionsType,
    value: icon,
  }));

  function ActionsOverlay(type: BarActionsType) {
    switch (type) {
      case 'wifi':
        return (
          <OverlayList
            title="Wi-Fi"
            lists={[
              { label: 'Known Networks' },
              { label: 'Other Networks', collapsed: true },
            ]}
            action={{ label: 'Wi-Fi Settings...', onClick: () => {} }}
          />
        );
      case 'bluetooth':
        return (
          <OverlayList
            title="Bluetooth"
            lists={[{ label: 'Devices' }]}
            action={{ label: 'Bluetooth Settings...', onClick: () => {} }}
          />
        );
      case 'volume':
        return <span>volume</span>;
      case 'switch-fill':
        return <span>control</span>;
    }
  }

  return (
    <>
      {actions.map((icon) => (
        <OverlayView
          overlay={ActionsOverlay(icon.key)}
          key={icon.value}
          onClose={() => {}}
        >
          <BarItemIcon icon={classNames('size-4', icon.value)} />
        </OverlayView>
      ))}
      <div>
        <span>{currentTime}</span>
      </div>
    </>
  );
}

export default BarActions;
