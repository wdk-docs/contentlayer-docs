import { FC } from 'react'
import { Icon, IconName } from '../common/Icon'
import { Checklist } from './Checklist'
import { Heading } from './Heading'
import { Paragraph } from './Paragraph'

const content = {
  blocks: [
    {
      icon: 'code-light' as IconName,
      heading: '只需使用JS/TS',
      text: '无需学习新的查询语言或复杂的API文档即可阅读。使用您熟悉和喜爱的JavaScript方法直接将您的内容作为数据导入和操作。',
      features: [
        <>
          只需<code>import</code>您的内容作为数据
        </>,
        '没有新的查询语言可学习',
        '与您的网站框架配合良好',
      ],
    },
    {
      icon: 'check-circle' as IconName,
      heading: '内置代码信心',
      text: '自动生成的类型定义和可配置的数据验证可确保您的数据在整个应用程序中正确结构化。',
      features: ['验证您的内容和前沿内容', '生成TypeScript类型', '重大错误消息'],
    },
    {
      icon: 'lightning' as IconName,
      heading: '构建更快',
      text: 'Contentlayer+Next.js的构建速度比单独使用Next.jss或与其他框架（如Gatsby）相比更快。',
      features: ['增量和并行生成', '即时内容实时重新加载', '可扩展到10万份文档'],
    },
  ],
}

export const Features: FC = () => {
  return (
    <div className="mt-16 bg-gray-50 dark:bg-gray-900/50 md:mt-24 lg:mt-32">
      <div className="mx-auto grid w-full max-w-screen-xl grid-cols-1 gap-16 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-3 lg:py-32">
        {content.blocks.map(({ icon, heading, text, features }, index) => (
          <div key={index} className="max-w-xl space-y-4 md:mx-auto lg:mx-0">
            <div className="w-12 rounded-full border border-violet-200 bg-violet-100 p-2.5 text-violet-600 dark:border-violet-900 dark:bg-violet-900/50 dark:text-violet-500">
              <Icon name={icon} />
            </div>
            <Heading level={3}>{heading}</Heading>
            <Paragraph>{text}</Paragraph>
            <Checklist items={features} />
          </div>
        ))}
      </div>
    </div>
  )
}
