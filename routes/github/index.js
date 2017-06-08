import { h, Component } from 'preact';
import style from './style'

export default class Github extends Component {

    state = {
      username: '',
      followers: null,
    };

    fetchUser = () => {
      fetch(`https://api.github.com/users/${this.state.username}`)
      .then(response => response.json())
      .then(user => this.setState({followers: user.followers }));
    }

    setUsername = e => {
      this.setState({ username: e.target.value });
    }

    render({}, { username, followers }) {
      return (
        <div class={style.container}>
          <h1>Enter a Github username</h1>
          <input type="text" value={username} onChange={this.setUsername} />
          <button onClick={this.fetchUser}>Submit</button>
          {followers && <h3>{username} has {followers} followers on Github.</h3>}
        </div>
      );
    }
}
