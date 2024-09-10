import styles from './OverlayView.module.scss';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { BarItemOverlayList } from '../types.ts';
import classNames from 'classnames';
import OverlayContent from './shared/OverlayContent.tsx';

export type OverlayGeneric = ReactNode | BarItemOverlayList[][];

export interface OverlayViewProps<OT extends OverlayGeneric> {
  children: ReactNode;
  overlay: OT extends BarItemOverlayList[][]
    ? BarItemOverlayList[][]
    : ReactNode;
  visible?: boolean;
  nested?: boolean;
  onClose: () => void;
}

function OverlayView<OT extends OverlayGeneric>({
  children,
  visible: forceVisible = false,
  overlay,
  nested,
  onClose,
}: OverlayViewProps<OT>) {
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
