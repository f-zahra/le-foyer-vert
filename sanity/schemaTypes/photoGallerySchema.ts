import {defineType, defineField} from 'sanity'

const gallerySchema = defineType({
  name: 'gallery',
  title: 'Project photo gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'projectTitle',
      title: 'Project name',
      type: 'string',
      description: 'Title of the project',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
  ],
})

export default gallerySchema
