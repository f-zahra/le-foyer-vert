import {defineType, defineField} from 'sanity'

import {baseLanguage} from './localeString'
const aboutSchema = defineType({
  name: 'about',
  title: 'About us section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
      description: 'The  heading of the section',
    }),
    defineField({
      name: 'subtitle',
      title: 'subtitle',
      type: 'localeString',
      description: 'The  heading describing your company',
    }),
    defineField({
      name: 'content',
      title: 'Paragraph',
      type: 'localeText',
      description: 'Write a short paragraph about your company',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      description: 'example interior-work',
      options: {source: `title.${baseLanguage.id}`},
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload an image that represents the about me section.',
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [{type: 'localeString'}],
      description: 'List of  characteristics that describes your company ',
    }),
  ],
  preview: {
    select: {
      title: `title.${baseLanguage.id}`,
      subtitle: 'slug.current',
    },
  },
})

export default aboutSchema
