import styles from './OverlayView.module.scss';
import {
  ReactNode,
  useCallback,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import { BarItemOverlayList } from '../types.ts';
import classNames from 'classnames';

type OverlayGeneric = ReactNode | BarItemOverlayList[][];

interface Props<OT extends OverlayGeneric> {
  children: ReactNode;
  overlay: OT extends BarItemOverlayList[][]
    ? BarItemOverlayList[][]
    : ReactNode;
  visible?: boolean;
  nested?: boolean;
  onClose: () => void;
}

type OverlayContentProps<T extends OverlayGeneric> = Pick<
  Props<T>,
  'overlay' | 'onClose'
>;

function OverlayContent<T extends OverlayGeneric>({
  overlay,
  onClose,
}: OverlayContentProps<T>) {
  const [hoveredItem, setHoveredItem] = useState(-1);

  function isList(data: OverlayGeneric): data is BarItemOverlayList[][] {
    return Array.isArray(data);
  }
  function additionalItems(item: BarItemOverlayList) {
    if (item.shortcut && item.shortcut.length) {
      return (
        <div
          className={classNames(
            'flex gap-1 text-white text-opacity-25',
            styles.overlayViewContentGroupItemShortcuts
          )}
        >
          {item.shortcut.map((icon) => (
            <i className={classNames('size-3', icon)} />
          ))}
        </div>
      );
    }
    if (item.items.length) {
      return (
        <OverlayView
          key={hoveredItem}
          nested
          visible={hoveredItem === item.id}
          overlay={item.items}
          onClose={onClose}
        >
          <i className="i-mdi:chevron-right" />
        </OverlayView>
      );
    }
    return null;
  }

  if (isList(overlay)) {
    return (
      <ul className="flex flex-col gap-1">
        {overlay.map((l, ind) => (
          <li
            key={l.length + ind}
            className={classNames({
              [styles.overlayViewContentSplitter]: ind !== overlay.length - 1,
            })}
          >
            {l.map((nl) => (
              <ul
                key={nl.label}
                className={classNames(styles.overlayViewContentGroup, {
                  'pb-1': ind === 0 || ind !== overlay.length - 1,
                })}
              >
                {/* TODO: add pre-selected styles if has items and selection on his  */}
                <li
                  className={classNames(styles.overlayViewContentGroupItem, {
                    '!pr-0': !!nl.items.length,
                    '!pr-1': !!nl.shortcut?.length,
                    disabled: !!nl.disabled,
                    'cursor-pointer': !nl.items.length,
                  })}
                  onMouseEnter={() => setHoveredItem(nl.id)}
                >
                  <span>{nl.label}</span>
                  {additionalItems(nl)}
                </li>
              </ul>
            ))}
          </li>
        ))}
      </ul>
    );
  } else {
    return overlay as ReactElement;
  }
}

// TODO: add check if overlay content provided or array items as new type for overlay list
function OverlayView<OT extends OverlayGeneric>({
  children,
  visible: forceVisible = false,
  overlay,
  nested,
  onClose,
}: Props<OT>) {
  const [visible, setVisible] = useState<boolean>(forceVisible);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const toggleVisible = useCallback(
    (force?: boolean) => {
      setVisible((val) => force ?? !val);

      if (visible) onClose();
    },
    [visible, onClose]
  );

  useEffect(() => {
    function handler(ev: Event) {
      if (!visible) return;
      const el = ev.target as HTMLDivElement;
      if (
        overlayRef.current &&
        containerRef.current &&
        !overlayRef.current.contains(el) &&
        !containerRef.current.contains(el) &&
        containerRef.current.textContent !== el.textContent
      ) {
        toggleVisible(false);
      }
    }

    document.body.addEventListener('click', handler);

    return () => {
      document.body.removeEventListener('click', handler);
    };
  }, [toggleVisible, visible]);

  return (
    <div className={styles.overlay}>
      <div
        ref={(ref) => (containerRef.current = ref)}
        onClick={() => toggleVisible()}
      >
        {children}
      </div>
      {visible && (
        <div
          ref={(ref) => (overlayRef.current = ref)}
          className={classNames(styles.overlayView, {
            'transform-none -top-1 left-20px': nested,
          })}
        >
          <OverlayContent overlay={overlay} onClose={onClose} />
        </div>
      )}
    </div>
  );
}

export default OverlayView;
