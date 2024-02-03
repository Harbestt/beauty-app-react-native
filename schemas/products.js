import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'products',
  title: 'products',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'productType',
      title: 'product Type',
      type: 'string',
      options: {
        list: [
          {title: 'Body Lotion', value: 'bodylotion'},
          {title: 'Face Wash', value: 'facewash'},
          {title: 'Perfume', value: 'perfumes'},
          {title: 'Mouth Clenser', value: 'mouthclenser'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'bgImage',
      title: ' BG image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
    }),

    defineField({
      name: 'price',
      title: 'price',
      type: 'number',
      description: 'The price of the product is in USD',
      validation: (Rule) => Rule.required().positive(),
      options: {
        format: 'currency',
      },
    }),
  ],
})
