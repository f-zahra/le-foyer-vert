import {defineType, defineField} from 'sanity'
import {baseLanguage} from './localeString'
const gallerySchema = defineType({
  name: 'gallery',
  title: 'Project photo gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'projectTitle',
      title: 'Project name',
      type: 'localeString',
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
  preview: {
    select: {
      title: 'name',
      subtitle: `title.${baseLanguage.id}`,
    },
  },
})

export default gallerySchema
