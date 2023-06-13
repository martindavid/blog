/* eslint-disable react/display-name */
import React, { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import { YoutubeEmbed } from './YoutubeEmbed'
import { Video } from './Video'
import { Figure } from './Figure'
import Pre from './Pre'
import { BlogNewsletterForm } from './NewsletterForm'
import { Collapsible } from './Collapsible'

const Wrapper: React.ComponentType<{ layout: string }> = ({ layout, ...rest }) => {
  const Layout = require(`../layouts/${layout}`).default
  return <Layout {...rest} />
}

export const MDXComponents = {
  Image,
  //@ts-ignore
  TOCInline,
  a: CustomLink,
  pre: Pre,
  wrapper: Wrapper,
  //@ts-ignore
  BlogNewsletterForm,
  // @ts-ignore
  YoutubeEmbed,
  // @ts-ignore
  Figure,
  // @ts-ignore
  Video,
  // @ts-ignore
  Collapsible,
}

interface Props {
  layout: string
  mdxSource: string
  [key: string]: unknown
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }: Props) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  // @ts-expect-error
  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
