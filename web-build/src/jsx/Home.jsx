import React, { Component } from 'react';
import { Button, Container, Segment, Header, Item, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import Placeholder from '../img/placeholder.png';

class Home extends Component {
	render() {
		return (
			
			<React.Fragment>
				
				<Header as='h2'>Welcome</Header>
				
				<p>We have analysed thousands of cases and made connections between them and associated legislation.</p>

				<Item.Group>
					<Item>
						<Item.Image size='tiny' src={Placeholder} />

						<Item.Content>
							<Item.Header as='a'>Links from cases to legislation</Item.Header>
							<Item.Meta>Description</Item.Meta>
							
						</Item.Content>
					</Item>

					<Item>
					<Item.Image size='tiny' src={Placeholder} />

					<Item.Content>
						<Item.Header as='a'>Links from cases to cases</Item.Header>
						<Item.Meta>Description</Item.Meta>
						
					</Item.Content>
					</Item>
					
					<Item>
					<Item.Image size='tiny' src={Placeholder} />

					<Item.Content>
						<Item.Header as='a'>Links from legislation to cases</Item.Header>
						<Item.Meta>Description</Item.Meta>
						
					</Item.Content>
					</Item>
				</Item.Group>

			</React.Fragment>
		);
	}
}

export default Home;