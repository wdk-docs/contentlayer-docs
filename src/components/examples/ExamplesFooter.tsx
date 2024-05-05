import { Example } from 'contentlayer/generated'
import { format } from 'date-fns'
import Link from 'next/link'
import { FC } from 'react'
import { Icon } from '../common/Icon'

const githubBranch = 'main'
const githubBaseUrl = `https://github.com/contentlayerdev/website/blob/${githubBranch}/content/`

export const ExamplesFooter: FC<{ example: Example }> = ({ example }) => {
  return (
    <>
      <hr />
      <div className="space-y-4 text-sm sm:flex sm:justify-between sm:space-y-0">
        <p className="m-0">
          这个例子对你有帮助吗？ <br />{' '}
          <Link href="https://github.com/contentlayerdev/contentlayer/issues">
            <a className="inline-flex items-center space-x-1" target="_blank" rel="noreferrer">
              <span className="inline-block w-4">
                <Icon name="github" />
              </span>
              <span>提供反馈</span>
            </a>
          </Link>
        </p>
        <p className="m-0 text-right">
          上次编辑时间 {format(new Date(example.last_edited), 'MMMM dd, yyyy')}.<br />
          <Link href={githubBaseUrl + example._raw.sourceFilePath}>
            <a className="inline-flex items-center space-x-1" target="_blank" rel="noreferrer">
              <span className="inline-block w-4">
                <Icon name="github" />
              </span>
              <span>编辑此页面</span>
            </a>
          </Link>
        </p>
      </div>
    </>
  )
}
