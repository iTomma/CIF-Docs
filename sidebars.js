/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Guide',
      collapsed: false,
      items: [
        'guide/folder-layout',
        'guide/multi-file',
        'guide/stability-rules',
      ],
    },
    {
      type: 'category',
      label: 'Systems',
      collapsed: false,
      items: [
        'systems/loot-injection',
        'systems/enemy-drops',
        'systems/shop-injection',
        'systems/enchantments',
        'systems/slotless-items',
        'systems/crafting-recipes',
        'systems/localization',
        'systems/sound-system',
        'systems/dev-tools',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: false,
      items: [
        'reference/item-txt',
        'reference/entity-attributes',
        'reference/item-attributes',
      ],
    },
    {
      type: 'doc',
      id: 'known-limitations',
      label: 'Known Limitations',
    },
  ],
};

export default sidebars;
