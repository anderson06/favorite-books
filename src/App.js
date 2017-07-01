import React, { Component } from 'react';
import axios from 'axios';
import Volume from './components/volumes/volume.jsx';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      volumes: [],
      searchQuery: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.loadBooks();
  }

  handleChange(event) {
    this.setState({searchQuery: event.target.value});
  }

  loadBooks() {
    const url = 'https://www.googleapis.com/books/v1/volumes';
    axios.get(url, {
        params: {
          q: this.state.searchQuery
        }
      })
      .then((response) => {
        this.setState({volumes: response.data.items});
      })
      .catch((error) => {
        console.log(error);
        this.setState({volumes: []});
      });
  }

  renderVolumes() {
    const {volumes} = this.state;
    if (volumes.length === 0) {
      return null;
    }
    const listVolumes = volumes.map(volume => (
      <Volume
        id={volume.id}
        thumbnail={volume.volumeInfo.imageLinks ? volume.volumeInfo.imageLinks.thumbnail : null}
        title={volume.volumeInfo.title}
        description={volume.volumeInfo.description}
      />
    ));
    return <ul className="fb-volumes collection">{listVolumes}</ul>;
  }

  render() {
    return (
      <div className="fb container">
        <div className="fb-header section">
          <h1 className="fb-title">Favorite Books</h1>
        </div>

        <div className="section">
          <form
            id="search-form"
            className="fb-search"
            onSubmit={this.handleSubmit}
          >
            <input
              onChange={this.handleChange}
              className="fb-search-input"
              placeholder="Book Name"
              required="required"
              autoComplete="off"
              autoFocus={true}
              type="search"
              name="search"
              id="search"
            />
          </form>
        </div>

        <div className="section">
          {this.renderVolumes()}
        </div>
      </div>
    );
  }
}

export default App;
