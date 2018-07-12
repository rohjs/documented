import React from 'react'

class Perks extends React.Component {
	constructor (props) {
		super(props)

		this.perks = [
			'Hit me up with email',
			'Or via facebook messagener'
		]

		this.state = {
			perk: 0
		}
	}

	componentDidMount () {
		this.interval = setInterval(() => this.tick(), 3000)
	}

	componentWillUnmount () {
		clearInterval(this.interval)
	}

	tick = () => {
		this.setState({
			perk: this.state.perk === 0 ? 1 : 0,
		})
	}

	render () {
		const {
			perk
		} = this.state

		return <p className='perks'>
			{ this.perks[perk] }
			<style jsx>{`
				.perks {
					display: none;
				}

				@media screen and (min-width: 768px) {
					.perks {
						display: block;
						margin-top: 2.5rem;
					}
				}
			`}</style>
		</p>
	}
}

export default Perks
