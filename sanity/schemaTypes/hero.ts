import {defineType, defineField} from 'sanity'
import {baseLanguage} from './localeString'
const heroSchema = defineType({
  name: 'hero',
  title: 'Hero section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Heading',
      type: 'localeString',
      description: 'The  heading for the first section of the page "called hero section',
    }),
    defineField({
      name: 'subTitle',
      title: 'Paragraph',
      type: 'localeText',
      description: 'Write a short subtitle',
    }),

    defineField({
      name: 'backgroundImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload an image that represents the hero  section.',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: `title.${baseLanguage.id}`,
    },
  },
})

export default heroSchema
