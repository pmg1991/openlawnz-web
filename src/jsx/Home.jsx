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
				
				<Header as='h3'>Metadata</Header>
				
				<Item.Group>
					<Item>
						<Item.Image size='tiny' src={Placeholder} />
						<Item.Content>
							<Item.Header as='a'>Cases to legislation</Item.Header>
							<Item.Meta>Links between legislation mentioned in cases with legislation.gov.nz</Item.Meta>
						</Item.Content>
					</Item>

					<Item>
					<Item.Image size='tiny' src={Placeholder} />
						<Item.Content>
							<Item.Header as='a'>Cases to cases</Item.Header>
							<Item.Meta>Cases have been parsed to find relationships to other cases based on their neutral and double citations</Item.Meta>
						</Item.Content>
					</Item>
					
					<Item>
					<Item.Image size='tiny' src={Placeholder} />
						<Item.Content>
							<Item.Header as='a'>Legislation to cases</Item.Header>
							<Item.Meta>Download the Chrome extension to use on legislation.gov.nz to see cases related to legislation</Item.Meta>
						</Item.Content>
					</Item>
				</Item.Group>

			</React.Fragment>
		);
	}
}

export default Home;
