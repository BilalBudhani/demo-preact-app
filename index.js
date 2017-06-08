import './style';

import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './components/header';
import Home from './routes/home';
import Profile from './routes/profile';
import Github from './routes/github';

export default () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<Profile path="/profile/" user="me" />
      <Profile path="/profile/:user" />
			<Github path="/github" />
		</Router>
	</div>
);
