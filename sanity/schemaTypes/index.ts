import serviceSchema from './service'
import aboutSchema from './about'
import gallerySchema from './photoGallerySchema'
import regionSchema from './serviceArea'
import {companyInformationSchema} from './companyInformation'
import heroSchema from './hero'
import {localeString} from './localeString'
import {localeText} from './localeText'

export const schemaTypes = [
  serviceSchema,
  aboutSchema,
  gallerySchema,
  regionSchema,
  companyInformationSchema,
  heroSchema,
  localeString,
  localeText, //need to be added to schema or else the schema won't recognize the type
]
