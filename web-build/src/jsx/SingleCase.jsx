import React, { Component } from 'react';
import { Button, Container, Header, Segment, Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'
import ApiService from '../js/ApiService';

class SingleCase extends Component {

	constructor({ match }) {
		super()
		
		this.state = {
			id: match.params.id,
			singleCase: {}
		}
	}

	async componentDidMount() {
		let singleCase = await ApiService.getCase({id: parseInt(this.state.id)});
        this.setState({ singleCase });
	}

	render() {

		return (
			<React.Fragment>
				<Header as='h2'>{this.state.singleCase.case_name}</Header>
				
				<Grid>
					<Grid.Row>
					<Grid.Column width={12}>
					<Segment>
						<iframe src={`https://docs.google.com/gview?url=https://s3-ap-southeast-2.amazonaws.com/freelaw-pdfs/${this.state.singleCase.bucket_key}&embedded=true`} style={{width: '100%', height: 500}} frameBorder={0}></iframe>
					</Segment>
					</Grid.Column>
					<Grid.Column width={4}>
						Related cases
					</Grid.Column>
					</Grid.Row>

				</Grid>

				

			</React.Fragment>
		);
	}
}

export default SingleCase;