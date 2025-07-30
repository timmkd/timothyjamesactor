import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Video URL (YouTube or Vimeo)',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri({
          scheme: [/^https?:\/\/(www.youtube.com|youtu.be|vimeo.com)$/],
          allowRelative: false,
        }),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
});