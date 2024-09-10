import styles from './Dock.module.scss';
import { DockApp } from './types.ts';
import classNames from 'classnames';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useDelay, useStore } from '../hooks.ts';
import { Tooltip } from 'react-tooltip';

const Dock = observer(() => {
  const test = useStore('test');
  const [scale, setScale] = useState(1);
  const [pressedScale, setPressedScale] = useState(false);
  const [apps, setApps] = useState<DockApp[]>([
    {
      name: 'Finder',
      img: 'finder.png',
      order: 0,
    },
    {
      name: 'Launchpad',
      img: 'launchpad.png',
      order: 1,
    },
    {
      name: 'System Settings',
      img: 'settings.png',
      order: 2,
    },
    {
      name: 'iTerm',
      img: 'iterm.png',
      order: 3,
    },
    {
      name: 'Chrome',
      active: true,
      img: 'chrome.png',
      order: 4,
    },
    {
      name: 'Telegram',
      img: 'telegram.png',
      order: 5,
    },
    {
      name: 'WebStorm',
      img: 'webstorm.png',
      order: 6,
    },
    {
      name: 'Downloads',
      isUtility: true,
      img: 'folder.png',
      order: 7,
    },
    {
      name: 'Bin',
      img: 'bin.png',
      order: 8,
    },
  ]);

  // TODO: Incorrect scale dock
  const navRef = useRef<HTMLUListElement | null>(null);
  const [prevScaledX, setPrevScaledX] = useState(0);

  const onPress = useCallback((ev: MouseEvent) => {
    const el = ev.target as HTMLElement;
    if (ev.type === 'mousedown' && el.classList.contains(styles.dockbarSpliter))
      setPressedScale(true);
    if (ev.type === 'mouseup') {
      setPrevScaledX(ev.clientX);
      setPressedScale(false);
    }
  }, []);
  const onScaleDock = useCallback(
    (ev: MouseEvent) => {
      const posX = ev.clientX;
      if (pressedScale) {
        if (posX < prevScaledX) {
          setScale((val) => val - 0.25);
        } else {
          setScale((val) => val + 0.25);
        }
      }
    },
    [pressedScale, prevScaledX]
  );

  useEffect(() => {
    setPrevScaledX(navRef.current?.getBoundingClientRect()?.left ?? 0);
  }, [navRef]);
  useEffect(() => {
    document.body.onmousedown = (ev) => onPress(ev);
    document.body.onmouseup = (ev) => onPress(ev);
    document.body.onmousemove = (ev) => onScaleDock(ev);
  }, [onPress, onScaleDock]);

  function onLongClick() {
    useDelay(500).then(() => {
      console.log('hiho');
    });
  }

  return (
    <nav>
      <ul ref={(ref) => (navRef.current = ref)} className={styles.dockbar}>
        {apps.map((app) => (
          <>
            {app.isUtility && (
              <span
                key={useId()}
                className={classNames(
                  'cursor-ew-resize',
                  styles.dockbarSpliter
                )}
              ></span>
            )}
            <li
              key={useId()}
              className={classNames(
                {
                  [styles.dockbarItemActive]: app.active,
                },
                styles.dockbarItem
              )}
              onClick={() => test.setTodo(3)}
              onMouseDown={() => onLongClick()}
            >
              <img
                src={`/src/assets/apps/${app.img}`}
                alt={app.name}
                width={48 * scale}
                height={48 * scale}
                data-tooltip-id="dock-app"
                data-tooltip-content={app.name}
              />
            </li>
          </>
        ))}
      </ul>
      <Tooltip
        id="dock-app"
        place="left"
        noArrow
        clickable
        className="tooltip"
      />
    </nav>
  );
});

export default Dock;
