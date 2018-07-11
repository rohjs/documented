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
					</button>
				</h1>

				<section className={isActive ? 'active' : '' }>
					<Link href={`/work/${id}`}>
						<a className='work-brief'>
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
							<p>
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
			</h1>

			<section className={`work-brief--empty${isActive ? ' active' : '' }`}>
				{/* <dl>
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
				</dl> */}
				<p className='text--muted'>
					<em>Will be updated soon.</em>
				</p>
			</section>
		</>
	}

	render () {
		return <li className='list-item'>
			{ this.renderWorkItems() }
			<style global jsx>{`
				.work-brief,
				.work-brief--empty {
					display: none;
				}

				.work-brief.active,
				.work-brief--empty.active,
				.active .work-brief {
					display: flex;
				}

				.active .work-brief:hover {
					border: none;
					opacity: .5
				}

				.work-brief dl,
				.work-brief--empty dl {
					flex-shrink: 0;
					margin-right: 1.5rem;
					margin-bottom: 0;
				}

				.work-brief__categories {
					display: flex;
				}

				.work-brief__categories dd {
					margin-right: .75rem;
					margin-bottom: 1.45em;
				}

				.work-brief p {
					flex-grow: 1;
					margin-bottom: 0;
				}

				.work-brief--empty {
					opacity: .3;
					font-style: italic;
				}

				@media screen and (min-width: 768px) {
					.work-brief.active,
					.active .work-brief {
						display: flex;
						align-items: flex-start;
						margin-bottom: 1.5rem;
					}

					.work-brief dl,
					.work-brief--empty dl {
						margin-right: 2rem;
					}

					.work-brief__categories {
						display: block;
					}

					.work-brief__categories dd {
						margin-right: 0;
						margin-bottom: 0;
					}
				}

			`}</style>
		</li>
	}
}

export default WorkItem