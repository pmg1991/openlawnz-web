import React, { Component } from 'react';
import { Button, Container, Card, Image, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import Andy from '../img/andy.jpg';
import Will from '../img/will.jpg';

class About extends Component {
	render() {
		return (
			<React.Fragment>
				
				<Header as='h2'>About us</Header>

				<Card.Group>
					<Card>
						<Image src={Andy} />
						<Card.Content>
							<Card.Header>
								Andrew Easterbrook
							</Card.Header>
							<Card.Meta>
								<span className='date'>
								Lawyer
								</span>
							</Card.Meta>
							<Card.Description>
								Works for Harte Law
							</Card.Description>
						</Card.Content>
					</Card>
					<Card>
						<Image src={Will} />
						<Card.Content>
							<Card.Header>
								William Parry
							</Card.Header>
							<Card.Meta>
								<span className='date'>
								Developer
								</span>
							</Card.Meta>
							<Card.Description>
								Is a freelancer
							</Card.Description>
						</Card.Content>
					</Card>
				</Card.Group>
				
				<Header as='h2'>Contact us</Header>

				<p>Law things: easterbrook@gmail.com</p>
				<p>Tech things: williamparry@gmail.com</p>

			</React.Fragment>
		);
	}
}

export default About;
