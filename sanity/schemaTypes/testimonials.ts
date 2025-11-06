import {defineField, defineType} from 'sanity'

const testimonialSchema = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),

    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'text',
    }),
  ],
})

export default testimonialSchema
