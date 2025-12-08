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
      description:
        'Title of the project (eg "Basement Renovation: Home Theater & Recreation Area”)',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload an image that represents the project.',
    }),
  ],
})

export default gallerySchema
