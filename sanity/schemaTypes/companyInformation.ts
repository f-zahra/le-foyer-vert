import {defineType, defineField} from 'sanity'

import {baseLanguage} from './localeString'
export const companyInformationSchema = defineType({
  name: 'companyInformation',
  title: 'Company Informations',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      description: 'format must be +1-***-***-****',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'socials',
      title: 'Social Media',
      type: 'object',
      fields: [
        defineField({
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url',
        }),
        defineField({
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'rbq',
      title: 'RBQ Number',
      type: 'string',
    }),
    defineField({
      name: 'slogan',
      title: 'Slogan',
      type: 'localeText',
    }),
  ],
})
