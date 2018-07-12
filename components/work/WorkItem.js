import React from 'react'
import Link from 'next/link'

class WorkItem extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isActive: false,
    }
  }

  handleClick = (e) => {
    e.preventDefault()
    const {
      isActive
    } = this.state
    this.setState({
      isActive: !isActive
    })
	}

	renderWorkItems = () => {
		const {
			id,
			title,
			status,
			time,
			categories,
			description,
		} = this.props

		const {
			isActive
		} = this.state

		if (status) {

			return <>
				<h1>
					<button
						type='button'
						onClick={this.handleClick}
					>
						{ title }
						{ isActive ? ' →' : '' }
					</button>
				</h1>

				<section className={`work-brief${isActive ? ' active' : '' }`}>
					<Link href={`/work/${id}`}>
						<a className='work-brief__link'>
							<dl>
								<dt className='sr-only'>Production year</dt>
								{
									typeof time === 'number'
									? <dd>{time}</dd>
									: <dd>
										<span className='sr-only'>From</span>
										{time[0]}
										<span className='sr-only'>to</span>
										<span>-</span>
										{time[1]}
									</dd>
								}
							</dl>
							<dl className='work-brief__categories'>
								<dt className='sr-only'>Category</dt>
								{
									categories.map((item, i) => {
										return <dd key={`work-brief-${i}`}>{item}</dd>
									})
								}
							</dl>
							<p className='work-brief__description'>
								{description}
							</p>
						</a>
					</Link>
				</section>
			</>
		}

		return <>
			<h1>
				<button
					type='button'
					onClick={this.handleClick}
				>
					{ title }
				</button>
				<em className='wip'>
					⚡
				</em>
			</h1>

			<section className={`work-brief muted${isActive ? ' active' : '' }`}>
				<p className='work-brief__description text--muted'>
					<em>Will be updated soon.</em>
				</p>
			</section>
		</>
	}

	render () {
		return <li className='list-item'>
			{ this.renderWorkItems() }
			<style global jsx>{`
				.work-brief {
					display: none;
				}

				.work-brief.active {
					display: block;
					margin-bottom: 1.5rem;
				}

				.work-brief__link {
					display: block;
				}

				.work-brief.active .work-brief__link:hover {
					opacity: .3;
				}

				.work-brief p {
					flex-grow: 1;
					margin-bottom: 0;
					color: #343a40;
				}

				.work-brief dl {
					flex-shrink: 0;
					margin-right: 1.5rem;
					margin-bottom: .5rem;
					color: #343a40;
				}

				.work-brief__categories {
					display: block;
				}

				.work-brief__categories dd {
					margin-right: .5rem;
				}

				p.work-brief__description {
					color: #343a40;
					word-break: break-all;
				}


				@media screen and (min-width: 768px) {
					.work-brief.active .work-brief__link,
					.work-brief.active {
						display: flex;
						align-items: flex-start;
					}

					.work-brief {
						margin-right: 1.5rem;
					}

					.work-brief.active {
						margin-bottom: 1.2rem;
					}

					.work-brief dl {
						margin-bottom: .5rem;
					}

					.work-brief__categories dd {
						margin-right: 0;
					}

					p.work-brief__description:not(:first-child) {
						margin-top: 0;
						margin-bottom: 0;
					}
				}


        @media screen and (min-width: 768px) and (max-width: 992px) {
          .work-brief.active .work-brief__link {
						flex-wrap: wrap;
					}

					.work-brief__categories {
						display: flex;
						align-items: center;
					}

					.work-brief__categories dd {
						margin-right: .5rem;
					}

					.work-brief__description {
						width: 100%;
					}

        }


			`}</style>
		</li>
	}
}

export default WorkItem