// Custom Decap CMS editor component: lets editors highlight a phrase in a
// brand color from the markdown rich-text editor ("+" insert menu).
// Renders as <span style="color: ...">text</span> in the saved markdown.
CMS.registerEditorComponent({
  id: 'colored-text',
  label: '彩色文字 / Colored Text',
  fields: [
    {
      name: 'color',
      label: 'Color / 颜色',
      widget: 'select',
      options: [
        { label: 'Accent Gold 金色', value: '#d4a017' },
        { label: 'Primary Navy 深蓝', value: '#1e3a5f' },
        { label: 'Light Navy 浅蓝', value: '#2c5282' },
        { label: 'Red 红色', value: '#c0392b' },
        { label: 'Green 绿色', value: '#2e7d32' },
      ],
      default: '#d4a017',
    },
    { name: 'text', label: 'Text / 文字', widget: 'string' },
  ],
  pattern: /^<span style="color: ?(#[0-9a-fA-F]{3,6})">(.*?)<\/span>$/,
  fromBlock: function (match) {
    return { color: match[1], text: match[2] };
  },
  toBlock: function (obj) {
    return `<span style="color: ${obj.color}">${obj.text}</span>`;
  },
  toPreview: function (obj) {
    return `<span style="color: ${obj.color}">${obj.text}</span>`;
  },
});

CMS.init();
