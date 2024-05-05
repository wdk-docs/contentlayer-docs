import Link from 'next/link'
import { FC, useState } from 'react'
import { Button } from '../common/Button'
import { Card } from '../common/Card'
import { User } from '../common/User'

export type TweetData = {
  text: string
  url: string
  person: TweetDataPerson
}

export type TweetDataPerson = {
  name: string
  avatar: string
  bio: string
}

const tweets: TweetData[] = [
  {
    text: '对我的内容进行类型安全访问非常有帮助。Contentlayer在Markdown文件或CMS和应用程序之间提供了一个很好的抽象。',
    person: {
      name: 'Lee Robinson',
      bio: 'Developer Relations at Vercel',
      avatar: 'https://pbs.twimg.com/profile_images/1587647097670467584/adWRdqQ6_400x400.jpg',
    },
    url: 'https://twitter.com/leeerob',
  },
  {
    text: `一直在使用Contentlayer作为Rainbow文档的mdx处理器。如此愉快的经历 🧘‍♂️

它转换mdx文件，验证它们并添加类型！`,
    person: {
      name: 'Pedro Duarte',
      bio: 'Creator of Radix UI',
      avatar: 'https://pbs.twimg.com/media/FC9arX6XEAYZ9eE?format=jpg&name=large',
    },
    url: 'https://twitter.com/peduarte/status/1514688181278580738',
  },
  {
    text: `Contentlayer看起来像是一个非常有前途的库[…]，可以将数据从CMS平台或本地文件（如markdown）导入到您的应用程序中。

我花了不到5分钟的时间将MDX文件干净地分离并连接到Next.js布局。`,
    person: {
      name: 'Houssein Djirdeh',
      bio: 'Software Engineer at Google',
      avatar: 'https://pbs.twimg.com/profile_images/1460651862340915201/w8Zva6LO_400x400.jpg',
    },
    url: 'https://twitter.com/hdjirdeh/status/1483047963316260870',
  },
  {
    text: `如果您将内容作为数据带入您的网站，无论是来自Markdown文件还是托管CMS，请帮自己一个忙，并查看此信息。

    速度、类型安全和DX方面的巨大飞跃 👏🏻`,
    person: {
      name: 'Jed Watson',
      bio: 'Co-founder of Thinkmill',
      avatar: 'https://pbs.twimg.com/profile_images/694401960397570049/uIEsJzcv_400x400.jpg',
    },
    url: 'https://twitter.com/JedWatson/status/1517130123463454721',
  },
  {
    text: `我们在@GraphCMS文档中使用了Contentlayer，这太棒了！它不仅加载所有本地内容，而且还支持MDX。此外，为内容提供类型定义非常有用。`,
    person: {
      name: 'João Pedro Schmitz',
      bio: 'Front-End Engineer at GraphCMS',
      avatar: 'https://pbs.twimg.com/profile_images/1425192858412326912/dh_udEMJ_400x400.jpg',
    },
    url: 'https://twitter.com/jpedroschmitz/status/1514655711535546375',
  },
]

const Tweet: FC<TweetData> = ({ text, person, url }) => {
  return (
    <Link href={url}>
      <a className="block h-full" rel="noreferrer" target="_blank">
        <Card className="h-full space-y-4 p-8">
          <User {...person} />
          <p className="font-light italic text-slate-500 dark:text-slate-400">
            <q>{text}</q>
          </p>
        </Card>
      </a>
    </Link>
  )
}

export const Tweets: FC = ({}) => {
  const [tweetsToShow, setTweetsToShow] = useState<number>(2)
  return (
    <div className="relative my-16 w-full overflow-x-hidden md:my-24 lg:my-32">
      <ul className="md:animate-scroll m-0 hidden list-none space-y-8 md:flex md:space-y-0">
        {[...tweets, ...tweets, ...tweets].map((tweet, index) => (
          <li
            key={index}
            className={`m-0 shrink-0 grow-0 px-4 md:w-[560px] ${index >= tweets.length ? 'hidden md:block' : 'block'}`}
          >
            <Tweet {...tweet} />
          </li>
        ))}
      </ul>
      <div className="md:hidden">
        <ul className="md:animate-scroll m-0 list-none space-y-8 md:space-y-0">
          {tweets.slice(0, tweetsToShow).map((tweet, index) => (
            <li
              key={index}
              className={`shrink-0 grow-0 px-4 md:w-[560px] ${index >= tweets.length ? 'hidden md:block' : 'block'}`}
            >
              <Tweet {...tweet} />
            </li>
          ))}
        </ul>
        {tweetsToShow < tweets.length && (
          <div className="flex w-full justify-center px-4 pt-8">
            <Button label="Show more" action={() => setTweetsToShow(tweetsToShow + 2)} theme="primary" />
          </div>
        )}
      </div>
    </div>
  )
}
