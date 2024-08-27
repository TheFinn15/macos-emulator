import { AppsOptions, BaseAppBarItem } from './types.ts';

export const appleLogoButton: BaseAppBarItem = {
  id: 1,
  icon: 'i-mdi:apple text-white',
  items: [
    [
      {
        id: 300,
        label: 'About This Mac',
      },
    ],
    [
      {
        id: 3333,
        label: 'System Settings',
      },
      {
        id: 3334,
        label: 'App Store',
      },
    ],
    [
      {
        id: 3338,
        label: 'Recent Items',
      },
    ],
    [
      {
        id: 3331,
        label: 'Force Quit',
      },
    ],
    [
      {
        id: 3334,
        label: 'Sleep',
      },
      {
        id: 3324,
        label: 'Restart...',
      },
      {
        id: 3314,
        label: 'Shut down...',
      },
    ],
    [
      {
        id: 3224,
        label: 'Lock Screen',
      },
      {
        id: 3114,
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
              label: 'About Finder',
            },
          ],
          [
            {
              id: 513,
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
              label: 'Show all',
              disabled: true,
            },
          ],
        ],
      },
      {
        id: 3,
        label: 'File',
        items: [
          [
            {
              id: 51,
              shortcut: [
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-n-box-outline',
              ],
              label: 'New Finder Window',
            },
            {
              id: 513,
              shortcut: [
                'i-mdi:apple-keyboard-shift',
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-n-box-outline',
              ],
              label: 'New Folder',
            },
            {
              id: 511,
              shortcut: [
                'i-mdi:apple-keyboard-shift',
                'i-mdi:apple-keyboard-command',
                'i-mynaui:delete',
              ],
              label: 'New Smart Folder',
            },
            {
              id: 431,
              label: 'New Tab',
              shortcut: [
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-t-box-outline',
              ],
            },
            {
              id: 451,
              shortcut: [
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-o-box-outline',
              ],
              label: 'Open',
            },
            {
              id: 151,
              disabled: true,
              label: 'Open With',
            },
            {
              id: 551,
              shortcut: [
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-w-box-outline',
              ],
              label: 'Close Window',
            },
          ],
          [
            {
              id: 551,
              label: 'Get Info',
              shortcut: [
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-i-box-outline',
              ],
            },
            {
              id: 551,
              label: 'Rename',
            },
            {
              id: 551,
              label: 'Compress',
            },
            {
              id: 551,
              label: 'Duplicate',
              shortcut: [
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-d-box-outline',
              ],
            },
            {
              id: 551,
              label: 'Make Alias',
              shortcut: [
                'i-mdi:apple-keyboard-control',
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-d-box-outline',
              ],
            },
            {
              id: 551,
              label: 'Quick Look',
              shortcut: [
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-y-box-outline',
              ],
            },
            {
              id: 551,
              label: 'Print',
              shortcut: [
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-p-box-outline',
              ],
            },
          ],
          [
            {
              id: 551,
              label: 'Share',
            },
          ],
          [
            {
              id: 551,
              label: 'Show Original',
              shortcut: [
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-r-box-outline',
              ],
            },
            {
              id: 551,
              label: 'Add to Dock',
              shortcut: [
                'i-mdi:apple-keyboard-control',
                'i-mdi:apple-keyboard-shift',
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-t-box-outline',
              ],
            },
          ],
          [
            {
              id: 551,
              label: 'Move to Bin',
              shortcut: ['i-mdi:apple-keyboard-command', 'i-mynaui:delete'],
            },
            {
              id: 551,
              label: 'Eject',
              shortcut: [
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-e-box-outline',
              ],
            },
          ],
          [
            {
              id: 551,
              label: 'Find',
              shortcut: [
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-f-box-outline',
              ],
            },
          ],
        ],
      },
      {
        id: 4,
        label: 'Edit',
        items: [
          [
            {
              id: 551,
              label: 'Undo Rename',
              shortcut: [
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-z-box-outline',
              ],
            },
            {
              id: 551,
              label: 'Redo',
              shortcut: [
                'i-mdi:apple-keyboard-control',
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-z-box-outline',
              ],
            },
          ],
          [
            {
              id: 551,
              label: 'Cut',
              shortcut: [
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-x-box-outline',
              ],
            },
            {
              id: 551,
              label: 'Copy',
              shortcut: [
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-c-box-outline',
              ],
            },
            {
              id: 551,
              label: 'Paste',
              shortcut: [
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-v-box-outline',
              ],
            },
            {
              id: 551,
              label: 'Select All',
              shortcut: [
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-a-box-outline',
              ],
            },
          ],
          [
            {
              id: 551,
              label: 'Show Clipboard',
            },
          ],
          [
            {
              id: 551,
              label: 'AutoFill',
              items: [
                [
                  {
                    id: 551,
                    label: 'Contact...',
                  },
                  {
                    id: 551,
                    label: 'Passwords...',
                  },
                ],
              ],
            },
            {
              id: 551,
              label: 'Start dictation',
              shortcut: ['i-mdi:microphone'],
            },
            {
              id: 551,
              label: 'Emoji & Symbols',
              shortcut: ['i-mynaui:globe', 'i-mdi:alpha-e-box-outline'],
            },
          ],
        ],
      },
      {
        id: 5,
        label: 'View',
        items: [
          [
            {
              id: 551,
              label: 'as Icons',
              shortcut: ['i-mdi:apple-keyboard-command', 'i-mdi:number-1'],
            },
            {
              id: 551,
              label: 'as List',
              shortcut: ['i-mdi:apple-keyboard-command', 'i-mdi:number-2'],
            },
            {
              id: 551,
              label: 'as Columns',
              shortcut: ['i-mdi:apple-keyboard-command', 'i-mdi:number-3'],
            },
            {
              id: 551,
              label: 'as Gallery',
              shortcut: ['i-mdi:apple-keyboard-command', 'i-mdi:number-4'],
            },
          ],
          [
            {
              id: 551,
              label: 'Use Stacks',
              shortcut: [
                'i-mdi:apple-keyboard-control',
                'i-mdi:apple-keyboard-command',
                'i-mdi:number-0',
              ],
            },
            {
              id: 551,
              label: 'Group Stacks By',
              items: [],
            },
            {
              id: 551,
              label: 'Clean Up',
            },
            {
              id: 551,
              label: 'Clean Up By',
              items: [],
            },
          ],
          [
            {
              id: 551,
              label: 'Show Tab Bar',
              shortcut: [
                'i-mdi:apple-keyboard-shift',
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-t-box-outline',
              ],
            },
            {
              id: 551,
              label: 'Show All Tabs',
              shortcut: [
                'i-mdi:apple-keyboard-shift',
                'i-mdi:apple-keyboard-command',
                'i-mdi:slash-forward',
              ],
            },
          ],
          [
            {
              id: 551,
              label: 'Hide Sidebar',
              shortcut: [
                'i-mdi:apple-keyboard-control',
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-s-box-outline',
              ],
            },
            {
              id: 551,
              label: 'Show Preview',
              shortcut: [
                'i-mdi:apple-keyboard-shift',
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-p-box-outline',
              ],
            },
          ],
          [
            {
              id: 551,
              label: 'Hide Toolbar',
              shortcut: [
                'i-mdi:apple-keyboard-option',
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-t-box-outline',
              ],
            },
            {
              id: 551,
              label: 'Hide Path Bar',
              shortcut: [
                'i-mdi:apple-keyboard-option',
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-p-box-outline',
              ],
            },
            {
              id: 551,
              label: 'Show Status Bar',
              shortcut: ['i-mdi:apple-keyboard-command', 'i-mdi:slash-forward'],
            },
          ],
          [
            {
              id: 551,
              label: 'Customize Toolbar...',
              disabled: true,
            },
          ],
          [
            {
              id: 551,
              label: 'Show View Options',
              shortcut: [
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-j-box-outline',
              ],
            },
            {
              id: 551,
              label: 'Show Preview Options',
            },
          ],
          [
            {
              id: 551,
              label: 'Enter Full Screen',
              shortcut: ['i-mynaui:globe', 'i-mdi:alpha-t-box-outline'],
            },
          ],
        ],
      },
      {
        id: 6,
        label: 'Go',
        items: [
          [
            {
              id: 551,
              label: 'Back',
              shortcut: ['i-mdi:apple-keyboard-command', '['],
            },
            {
              id: 551,
              label: 'Forward',
              shortcut: ['i-mdi:apple-keyboard-command', ']'],
            },
            {
              id: 551,
              label: 'Enclosing Folder',
              shortcut: [
                'i-mdi:apple-keyboard-shift',
                'i-mdi:apple-keyboard-command',
                'i-mdi:caret-up',
              ],
            },
          ],
          [
            {
              id: 551,
              label: {
                text: 'Recents',
                icon: 'i-mdi:clock-time-nine-outline',
              },
              shortcut: [
                'i-mdi:apple-keyboard-shift',
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-f-box-outline',
              ],
            },
            {
              id: 551,
              label: {
                text: 'Documents',
                icon: 'i-mdi:file-outline',
              },
              shortcut: [
                'i-mdi:apple-keyboard-shift',
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-o-box-outline',
              ],
            },
            {
              id: 551,
              label: {
                text: 'Desktop',
                icon: 'i-mdi:folder-outline',
              },
              shortcut: [
                'i-mdi:apple-keyboard-shift',
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-d-box-outline',
              ],
            },
            {
              id: 551,
              label: {
                text: 'Home',
                icon: 'i-mdi:home-variant-outline',
              },
              shortcut: [
                'i-mdi:apple-keyboard-shift',
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-h-box-outline',
              ],
            },
            {
              id: 551,
              label: {
                text: 'Computer',
                icon: 'i-mdi:computer',
              },
              shortcut: [
                'i-mdi:apple-keyboard-shift',
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-c-box-outline',
              ],
            },
            {
              id: 551,
              label: {
                text: 'AirDrop',
                icon: 'i-mdi:radio-tower',
              },
              shortcut: [
                'i-mdi:apple-keyboard-shift',
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-a-box-outline',
              ],
            },
            {
              id: 551,
              label: {
                text: 'Network',
                icon: 'i-mdi:internet',
              },
              shortcut: [
                'i-mdi:apple-keyboard-shift',
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-n-box-outline',
              ],
            },
            {
              id: 551,
              label: {
                text: 'iCloud Drive',
                icon: 'i-mdi:cloud-outline',
              },
              shortcut: [
                'i-mdi:apple-keyboard-shift',
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-i-box-outline',
              ],
            },
            {
              id: 551,
              label: {
                text: 'Shared',
                icon: 'i-mdi:folder-shared-outline',
              },
              shortcut: [
                'i-mdi:apple-keyboard-shift',
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-s-box-outline',
              ],
            },
            {
              id: 551,
              label: {
                text: 'Applications',
                icon: 'i-simple-icons:appstore',
              },
              shortcut: [
                'i-mdi:apple-keyboard-shift',
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-a-box-outline',
              ],
            },
            {
              id: 551,
              label: {
                text: 'Utilities',
                icon: 'i-mdi:hammer-screwdriver',
              },
              shortcut: [
                'i-mdi:apple-keyboard-shift',
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-u-box-outline',
              ],
            },
          ],
          [
            {
              id: 551,
              label: 'Recent folders',
              items: [],
            },
          ],
          [
            {
              id: 551,
              label: 'Go to Folder',
              shortcut: [
                'i-mdi:apple-keyboard-shift',
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-g-box-outline',
              ],
            },
            {
              id: 551,
              label: 'Connect to Server',
              shortcut: [
                'i-mdi:apple-keyboard-command',
                'i-mdi:alpha-k-box-outline',
              ],
            },
          ],
        ],
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
