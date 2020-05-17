import React from 'react'
import { renderMarkdown } from '../../lib/renderMarkdown'

type MarkdownRendererProps = {
  source: string
}
const MarkdownRenderer = ({ source }: MarkdownRendererProps) => (
  <article className='markdown'>
    <div dangerouslySetInnerHTML={{ __html: renderMarkdown(source) }} />
  </article>
)

export default MarkdownRenderer
