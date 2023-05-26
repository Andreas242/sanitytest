export default {
    name: 'question',
    title: 'Question',
    type: 'document',
    fields: [
      {
        name: 'questionText',
        title: 'Question Text',
        type: 'string',
      },
      {
        name: 'options',
        title: 'Options',
        type: 'array',
        of: [{ type: 'option' }],
      },
    ],
  };