import {defineField, defineType} from 'sanity'
import {Wrench} from 'lucide-react'
import {baseLanguage} from './localeString'
const serviceSchema = defineType({
  name: 'service',
  title: 'service',
  type: 'document',
  icon: Wrench,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
      description: 'Title of the service (e.g., Renovation Projects)',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          {title: 'Wrench', value: 'Wrench'},
          {title: 'Home', value: 'Home'},
          {title: 'Globe', value: 'Globe'},
          {title: 'BookOpen', value: 'BookOpen'},
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      description: 'example interior-work',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload an image that represents the service.',
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [{type: 'localeString'}],
      description: 'List of service details or features.',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: `title.${baseLanguage.id}`,
    },
  },
})

export default serviceSchema
