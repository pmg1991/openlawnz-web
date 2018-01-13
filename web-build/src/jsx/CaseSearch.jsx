import React, { Component } from 'react';
import { Button, Container, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'
import ApiService from '../js/ApiService';

class CaseSearch extends Component {


	constructor() {
		super()
		this.state = {
			cases: []
		}
	}

	async componentDidMount() {
		//let cases = await ApiService.getCases();
		//cases = cases.slice(0, 100)
        //this.setState({ cases });
	}

	render() {

		return (
			<React.Fragment>
				<Header as='h2'>Case Search</Header>
				<ul>
				
				{
					/*
					this.state.cases.map((obj, i) => {
						return <li key={i}><Link to={`/cases/${obj.id}`}>{obj.case_name}</Link></li>
					})
					*/
				}
				</ul>
			</React.Fragment>
		);
	}
}

export default CaseSearch;