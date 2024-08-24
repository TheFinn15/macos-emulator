import { AppsOptions, BaseAppBarItem } from './types.ts';

export const appleLogoButton: BaseAppBarItem = {
  id: 1,
  icon: 'i-mdi:apple text-white',
  items: [
    [
      {
        id: 300,
        items: [],
        label: 'About This Mac',
      },
    ],
    [
      {
        id: 3333,
        items: [],
        label: 'System Settings',
      },
      {
        id: 3334,
        items: [],
        label: 'App Store',
      },
    ],
    [
      {
        id: 3338,
        items: [],
        label: 'Recent Items',
      },
    ],
    [
      {
        id: 3331,
        items: [],
        label: 'Force Quit',
      },
    ],
    [
      {
        id: 3334,
        items: [],
        label: 'Sleep',
      },
      {
        id: 3324,
        items: [],
        label: 'Restart...',
      },
      {
        id: 3314,
        items: [],
        label: 'Shut down...',
      },
    ],
    [
      {
        id: 3224,
        items: [],
        label: 'Lock Screen',
      },
      {
        id: 3114,
        items: [],
        shortcut: [
          'i-mdi:apple-keyboard-shift',
          'i-mdi:apple-keyboard-command',
          'i-mdi:alpha-q-box-outline',
        ],
        label: 'Log Out',
      },
    ],
  ],
};

export const apps: AppsOptions = {
  finder: {
    contextMenu: [
      {
        id: 2,
        label: 'Finder',
        items: [
          [
            {
              id: 51,
              items: [],
              label: 'About Finder',
            },
          ],
          [
            {
              id: 513,
              items: [],
              shortcut: ['i-mdi:apple-keyboard-command'],
              label: 'Settings',
            },
          ],
          [
            {
              id: 511,
              shortcut: [
                'i-mdi:apple-keyboard-shift',
                'i-mdi:apple-keyboard-command',
                'i-mynaui:delete',
              ],
              items: [],
              label: 'Empty bin...',
            },
          ],
          [
            {
              id: 431,
              items: [
                [
                  {
                    id: 4333,
                    items: [],
                    label: 'Sub service',
                  },
                ],
              ],
              label: 'Services',
            },
          ],
          [
            {
              id: 451,
              items: [],
              shortcut: [
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-h-box-outline',
              ],
              label: 'Hide Finder',
            },
          ],
          [
            {
              id: 151,
              items: [],
              shortcut: [
                'i-mdi:apple-keyboard-option',
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-h-box-outline',
              ],
              label: 'Hide Others',
            },
          ],
          [
            {
              id: 551,
              items: [],
              label: 'Show all',
              disabled: true,
            },
          ],
        ],
      },
      {
        id: 3,
        label: 'File',
        items: [],
      },
      {
        id: 4,
        label: 'Edit',
        items: [],
      },
      {
        id: 5,
        label: 'View',
        items: [],
      },
      {
        id: 6,
        label: 'Go',
        items: [],
      },
      {
        id: 7,
        label: 'Window',
        items: [],
      },
      {
        id: 8,
        label: 'Help',
        items: [],
      },
    ],
  },
};
