import {defineField, defineType} from 'sanity'
import {baseLanguage} from './localeString'

const serviceSchema = defineType({
  name: 'service',
  title: 'services list',
  type: 'document',
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
          {title: 'Pickaxe', value: 'Pickaxe'},
          {title: 'HardHat ', value: 'HardHat '},
          {title: 'Hammer ', value: 'Hammer '},
          {title: 'Drill', value: 'Drill'},
          {title: 'House ', value: 'House '},
        ],
        layout: 'dropdown',
      },
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
      description: 'Upload an image that represents the service.',
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [{type: 'localeString'}],
      description:
        'List of service details or features. (e.g., Interior stairs & railings Drywall, walls & ceilings Interior insulation Interior painting)',
    }),
  ],
  preview: {
    select: {
      title: `title.${baseLanguage.id}`,
      subtitle: 'slug.current',
    },
  },
})

export default serviceSchema
