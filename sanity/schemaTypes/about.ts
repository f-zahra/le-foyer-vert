import {defineType, defineField} from 'sanity'

const aboutSchema = defineType({
  name: 'about',
  title: 'About section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Heading',
      type: 'string',
      description: 'The  heading describing your company',
    }),
    defineField({
      name: 'content',
      title: 'Paragraph',
      type: 'text',
      description: 'Write a short paragraph about your company',
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
      description: 'Upload an image that represents the about me section.',
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of  characteristics that describes your company ',
    }),
  ],
})

export default aboutSchema
