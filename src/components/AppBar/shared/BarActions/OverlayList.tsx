import styles from '@components/AppBar/AppBar.module.scss';
import classNames from 'classnames';

interface Action {
  label: string;
  onClick: () => void;
}

interface MiniList {
  label: string;
  collapsed?: boolean;
}

interface Props {
  title: string;
  lists: MiniList[];
  action: Action;
}

interface OverlayListItemProps {
  appendIcon: string;
  label: string;
  prependIcon?: string;
}

function OverlayListItem({
  appendIcon,
  label,
  prependIcon,
}: OverlayListItemProps) {
  return (
    <article className="flex items-center gap-2 rounded-0.25rem px-2 py-1 hover:bg-white hover:bg-op-10">
      <div className="rounded-full bg-white bg-op-10 p-1">
        <i className={classNames('size-4', appendIcon)}>{appendIcon}</i>
      </div>
      <span className="flex-grow">{label}</span>
      {prependIcon && (
        <div>
          <i className={classNames('size-4', prependIcon)}>{prependIcon}</i>
        </div>
      )}
    </article>
  );
}

// TODO: need to split component and use slots
function OverlayList({ title, lists, action }: Props) {
  const [collapsedList, setCollapsedList] = useState(-1);

  function listItem(item: MiniList, ind: number) {
    if ((item.collapsed && collapsedList === ind) || !item.collapsed)
      return (
        <div className="flex flex-col gap-1">
          <OverlayListItem
            label="Test Huita"
            appendIcon="i-mdi:wifi"
            prependIcon="i-mdi:lock"
          />
        </div>
      );
    return null;
  }

  return (
    <div className={styles.overlayList}>
      <div className={classNames('flex items-start pb-1')}>
        <span className="flex-grow px-2 py-0.5 text-white font-500">
          {title}
        </span>
        <div>switch</div>
      </div>
      <span className={styles.overlayListSplitter}></span>
      <div className={styles.overlayListItems}>
        {lists.map((list, ind) => (
          <>
            <div className="flex flex-col gap-0.5">
              <h4
                className={classNames(
                  'flex items-center',
                  styles.overlayListItemsLabel,
                  {
                    [styles.overlayListItemsLabelSelect]: list.collapsed,
                  }
                )}
                onClick={() => setCollapsedList((val) => (val > -1 ? -1 : ind))}
              >
                <span className="flex-grow px-2 py-0.5">{list.label}</span>
                {list.collapsed && (
                  <i
                    className={classNames('text-white', {
                      'i-mdi:chevron-right': collapsedList !== ind,
                      'i-mdi:chevron-down': collapsedList === ind,
                    })}
                  ></i>
                )}
              </h4>
              {listItem(list, ind)}
            </div>
            <span className={styles.overlayListSplitter} />
          </>
        ))}
      </div>
      <div
        className={classNames('px-2 py-0.5', styles.overlayListItemsItem)}
        onClick={action.onClick}
      >
        {action.label}
      </div>
    </div>
  );
}

export default OverlayList;
