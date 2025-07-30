import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'credit',
  title: 'Credit',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Film', value: 'film' },
          { title: 'TV', value: 'tv' },
          { title: 'Musical Theatre', value: 'musicalTheatre' },
          { title: 'Theatre', value: 'theatre' },
          { title: 'Commercial', value: 'commercial' },
          { title: 'Corporate', value: 'corporate' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'project',
      title: 'Project',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'director',
      title: 'Director',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
});