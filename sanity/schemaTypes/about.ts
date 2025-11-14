import {defineType, defineField} from 'sanity'

import {baseLanguage} from './localeString'
const aboutSchema = defineType({
  name: 'about',
  title: 'About section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Heading',
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
      title: 'name',
      subtitle: `title.${baseLanguage.id}`,
    },
  },
})

export default aboutSchema
