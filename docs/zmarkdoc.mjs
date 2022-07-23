const callout = {
  render: "markdoc-callout",
  description: "Display the enclosed content in a callout box",
  children: ["paragraph"],
  attributes: {
    type: {
      type: String,
      default: "note",
      matches: ["check", "error", "note", "warning"],
      description:
        'Controls the color and icon of the callout. Can be: "caution", "check", "note", "warning"',
    },
  },
};

const config = {
  tags: {
    callout,
  },
};

export default { config };
