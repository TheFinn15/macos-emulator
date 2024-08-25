import styles from './AppBar.module.scss';
import { BaseAppBarItem, SystemApps } from '../types.ts';
import { appleLogoButton, apps } from '../apps.ts';
import BarItem from './shared/BarItem/BarItem.tsx';
import BarActions from './shared/BarActions.tsx';

function AppBar() {
  const [activeApp] = useState<SystemApps>(SystemApps.Finder);
  const [touched, setTouched] = useState<boolean>(false);
  const [hovered, setHovered] = useState<number>(-1);

  const barRef = useRef<HTMLDivElement | null>(null);

  const bar = useMemo<BaseAppBarItem[]>(() => {
    return [appleLogoButton, ...apps[activeApp].contextMenu];
  }, [activeApp]);

  return (
    <div ref={(ref) => (barRef.current = ref)} className={styles.appbar}>
      {bar.map((item, ind) => (
        <BarItem
          key={item.id}
          item={item}
          touched={touched}
          hovered={hovered}
          ind={ind}
          currentApp={activeApp}
          onTouch={setTouched}
          onHover={setHovered}
        />
      ))}
      <span className="flex-grow" />
      <BarActions />
    </div>
  );
}

export default AppBar;
