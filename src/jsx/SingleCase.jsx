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
	
	async fetchData(id) {
		let singleCase = await ApiService.getCase({id: parseInt(id)});
        this.setState({ singleCase });
	}

	async componentDidMount() {
		this.fetchData(this.state.id)
	}
	
	async componentDidUpdate(prevProps) {
		if(this.props.match.params.id !== prevProps.match.params.id) {
			this.fetchData(this.props.match.params.id)
		}
	}

	render() {
	
		let cites = this.state.singleCase.cites ?
			this.state.singleCase.cites.length === 0 ? <p>No cases</p> :
			<ul>
				{
					this.state.singleCase.cites.map(function(obj) {
						<li><Link to={`/case/${obj.id}`}>{obj.case_name}</Link></li>
					})
				}
			</ul>
		: ''
	
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
							
							<Header as='h3'>Cites</Header>
							{
								this.state.singleCase.cites ?
									this.state.singleCase.cites.length === 0 ? <p>No cases</p> :
									<ul>
										{
											this.state.singleCase.cites.map(function(obj) {
												return <li key={`"${obj.id}"`}><Link to={`/case/${obj.id}`}>{obj.case_name}</Link></li>
											})
										}
									</ul>
								: ''
							}
							
							<Header as='h3'>Cited By</Header>
							{
								this.state.singleCase.cited_by ?
									this.state.singleCase.cited_by.length === 0 ? <p>No cases</p> :
									<ul>
										{
											this.state.singleCase.cited_by.map(function(obj) {
												return <li key={`"${obj.id}"`}><Link to={`/case/${obj.id}`}>{obj.case_name}</Link></li>
											})
										}
									</ul>
								: ''
							}
							
							
						</Grid.Column>
					</Grid.Row>

				</Grid>

				

			</React.Fragment>
		);
	}
}

export default SingleCase;
