import { useRouter } from 'next/router'
import { FC } from 'react'
import { Button } from '../common/Button'
import { Checklist } from './Checklist'
import { Dashed } from './Dashed'
import { Heading } from './Heading'
import { Paragraph } from './Paragraph'
import { Video } from './Video'

const content = {
  heading: '为开发人员提供方便的内容',
  //
  // This will show a little section at the top pointing to the most recent blog
  // post, but it's been so long since we published anything that we're just
  // going to comment it out for now.
  //
  // recentBlogPost: {
  //   title: 'Introducing Contentlayer (Beta): Content Made Easy for Developers',
  //   url: '/blog/beta',
  // },
  text: (
    <>
      Contentlayer是 <Dashed label="content SDK" tooltip="内容SDK简化了将结构化内容作为数据在网站/应用程序中使用" />{' '}
      验证您的内容并将其转换为 <Dashed label="type-safe" tooltip="Contentlayer根据您的内容文档定义生成TypeScript类型" />{' '}
      JSON数据，您可以轻松导入到应用程序中。
    </>
  ),
  features: ['重量轻，易于使用', '出色的开发经验', 'Blazing快速构建和页面性能'],
  primaryAction: { label: '开始', url: '/docs/getting-started' },
  secondaryAction: { label: '为什么选择Contentlayer？', url: '/blog/working-with-content-is-hard-for-developers' },
  video: {
    thumbnail: { url: '/images/contentlayer-in-five-minutes.png', alt: 'Contentlayer视频缩略图简介' },
    youtubeId: '58Pj4a4Us7A',
  },
}

export const Hero: FC = () => {
  const router = useRouter()

  return (
    <div className="w-full space-y-12 pt-8 md:space-y-20 md:pt-16 lg:pt-20">
      {/* <div className="flex justify-start w-full px-4 md:justify-center">
        <div className="flex items-center space-x-2.5 rounded-md border border-slate-200 bg-slate-50 py-3 px-4 dark:border-slate-700 dark:bg-slate-900">
          <div className="rounded-md bg-purple-500 py-1 px-1.5 text-xs font-semibold uppercase text-white dark:bg-purple-800">
            New
          </div>
          <Link href={content.recentBlogPost.url}>
            <a className="text-sm font-semibold text-slate-700 dark:text-slate-100">{content.recentBlogPost.title}</a>
          </Link>
        </div>
      </div> */}
      <div className="mx-auto grid w-full max-w-screen-xl grid-cols-1 gap-16 px-4 md:grid-cols-2 md:px-8 ">
        <div className="space-y-8 sm:max-w-md">
          <Heading level={1}>{content.heading}</Heading>
          <Paragraph className="text-lg">{content.text}</Paragraph>
          <Checklist items={content.features} className="text-lg" />
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:flex-col md:space-y-4 md:space-x-0 lg:flex-row lg:space-y-0 lg:space-x-4">
            <Button label={content.primaryAction.label} href={content.primaryAction.url} theme="primary" />
            <Button label={content.secondaryAction.label} href={content.secondaryAction.url} theme="secondary" />
          </div>
        </div>
        <div className="relative flex w-full items-center">
          {/* TODO don't use image as thumbnail if possible */}
          <Video thumbnail={content.video.thumbnail} videoId={content.video.youtubeId} />
        </div>
      </div>
    </div>
  )
}
