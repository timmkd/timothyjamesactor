import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'biography',
      title: 'Biography',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
});