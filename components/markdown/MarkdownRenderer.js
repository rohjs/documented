import React from 'react'
import { renderMarkdown } from '../../lib/renderMarkdown'

const MarkdownRenderer = ({source}) => <article className='markdown'>
	<div dangerouslySetInnerHTML={{__html: renderMarkdown(source)}} />
	<style global jsx>{`
		.markdown .header-img {
			margin-bottom: 3rem;
		}

		.markdown .mr-2 {
			margin-right: .368em;
		}

		.markdown .img-container {
			width: 100%;
			margin-bottom: 2.5rem;
		}

		.markdown img {
			width: 100%;
			height: auto;
		}

		.mardown p + img {
			margin-top: 1rem;
		}

		.markdown p,
		.markdown ul,
		.markdown ol,
		.markdown dl {
			font-size: 15px;
			line-height: 1.8;
			color: #343a40;
		}

		.markdown p + h2,
		.markdown ul + h2,
		.markdown dl + h2,
		.markdown .img-container + h2 {
			margin-top: 4.5rem;
		}

		.markdown p + h4,
		.markdown .img-container + h4 {
			margin-top: 2rem;
		}

		.markdown em {
			font-style: normal;
			font-weight: 700;
		}

		.markdown h1 {
			margin-bottom: 3rem;
			font-size: 35px;
			font-weight: 400;
			line-height: 1.5;
			color: #292b2c;
		}

		.markdown h2 {
			margin-bottom: 1rem;
			font-size: 22.5px;
			font-weight: 400;
			line-height: 1.5;
			letter-spacing: -.015em;
		}

		.markdown h4 {
			margin-bottom: 20px;
			font-size: .875rem;
			font-weight: 700;
			text-transform: uppercase;
			line-height: 1.5;
		}

		.markdown ul li {
			margin-bottom: .5em;
		}

		.markdown dt {
			font-weight: 700;
		}

		.markdown .figures {
			margin-top: 1.5rem;
		}

		.markdown .small-list__container {
			display: flex;
			flex-wrap: wrap;
			margin-top: 3rem;
			margin-bottom: 3rem;
		}

		.markdown .small-list--33,
		.markdown .small-list--50 {
			width: 100%;
			max-width: 100%;
			padding-right: 1rem;
			margin-bottom: 1rem;
		}

		.markdown dt,
		.markdown dd {
			margin-bottom: .25rem;
			font-size: 14px;
		}

		.markdown dd {
			opacity: .8;
		}

		.markdown .vp-sidedock {
			display: none !important;
		}


		@media screen and (min-width: 768px) {
			.markdown p,
			.markdown ul,
			.markdown ol,
			.markdown dl {
				font-size: .875rem;
				line-height: 1.8;
				color: #343a40;
			}

			.markdown .small-list--33,
			.markdown .small-list--50  {
				width: 50%;
				max-width: 50%;
			}
		}

		@media screen and (min-width: 992px) {
			.markdown .small-list--33 {
				width: 33%;
			}
		}
	`}</style>
</article>

export default MarkdownRenderer