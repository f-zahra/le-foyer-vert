import {defineField, defineType} from 'sanity'

const regionSchema = defineType({
  name: 'serviceArea',
  title: 'Area covered section',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'area Name',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
})

export default regionSchema
