import Head from 'next/head'

import { DefaultSeo, NextSeo, NextSeoProps } from 'next-seo'
import { DefaultSeoProps } from 'next-seo'

export interface Props extends NextSeoProps {
  title?: string
  description?: string
  image?: string
}

/** Add the website stuff here */
const title = ''
export const url = ''
const description = ''
const image = ''

/** Add website @ twitter */
const config: DefaultSeoProps = {
  title,
  description,
  openGraph: {
    type: 'website',
    url,
    site_name: title,
    images: [{ url: image }],
  },
  twitter: {
    handle: '@twitter',
    cardType: 'summary_large_image',
  },
}

export const SEO: React.FC<Props> = ({ image, ...props }) => {
  const title = props.title ?? config.title
  const description = props.description || config.description

  return (
    <>
      <DefaultSeo {...config} />

      <NextSeo
        {...props}
        {...(image == null
          ? {}
          : {
              openGraph: {
                images: [{ url: image }],
              },
            })}
      />

      <Head>
        <title>{title}</title>

        <meta name="description" content={description} />
      </Head>
    </>
  )
}
