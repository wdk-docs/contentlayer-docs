import Markdown from 'markdown-to-jsx'
import { FC } from 'react'
import { Button } from '../common/Button'
import { IconName } from '../common/Icon'
import { Heading } from './Heading'
import { Paragraph } from './Paragraph'

const content = {
  heading: '常见问题',
  description: `我们听到了很多关于Contentlayer的问题。这些是我们最常遇到的问题。`,
  elements: [
    {
      question: 'Contentlayer正在解决什么问题？',
      answer: `现代web框架没有规定解析内容的方法。它们提供了强大的页面路由和呈现过程，但提供内容取决于您。Contentlayer通过简化web项目中的内容处理，持久保持了现代web框架提供的出色开发人员体验。[了解更多]（/docs/other/faq#内容层解决的问题是什么）。`,
    },
    {
      question: '为什么Contentlayer速度很快？',
      answer: `Contentlayer充分利用构建工具的优化，使处理源内容变得轻而易举。然后，它智能地缓存内容，并逐步构建。当您更新内容时，Contentlayer将利用已经完成的工作，只构建已经更改的内容。[了解更多信息]（/docs/contensions/contentlayer如何工作）。`,
    },
    {
      question: '我可以将Contentlayer与现有工具一起使用吗？',
      answer: `内容层被构建为与框架无关。Contentlayer的核心是一个内容处理器，但它提供了用于从各种来源导入内容的模块，并使用插件提供与现代框架的紧密集成。[了解更多信息]（/docs/other/faq#can-i-use-contentlayer-with-my-existing-tools）。`,
    },
  ],
  primaryAction: { label: '在文档中阅读更多信息', url: '/docs/other/faq' },
  secondaryAction: {
    label: '提出一个问题',
    url: 'https://github.com/contentlayerdev/contentlayer/issues/new',
    icon: 'external-link' as IconName,
  },
}

export const FAQ: FC = () => {
  return (
    <div className="mt-16 bg-gray-50 dark:bg-gray-900/50 md:mt-0">
      <div className="mx-auto grid w-full max-w-screen-xl grid-cols-1 gap-8 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24 lg:py-32">
        <div className="space-y-8 md:max-w-md">
          <Heading level={2}>{content.heading}</Heading>
          <Paragraph>{content.description}</Paragraph>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:flex-col md:space-y-4 md:space-x-0 lg:flex-row lg:space-y-0 lg:space-x-4">
            <Button label={content.primaryAction.label} href={content.primaryAction.url} theme="primary" />
            <Button
              label={content.secondaryAction.label}
              href={content.secondaryAction.url}
              theme="secondary"
              icon={content.secondaryAction?.icon}
            />
          </div>
        </div>
        <ul className="m-0 list-none space-y-8">
          {content.elements.map(({ question, answer }, index) => (
            <li key={index} className="space-y-4">
              <Heading level={3}>{question}</Heading>
              <div className="leading-relaxed">
                <Markdown>{answer}</Markdown>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
