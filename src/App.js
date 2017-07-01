import React, { Component } from 'react';
import axios from 'axios';
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
        this.setstate({volumes: []});
      });
  }

  renderVolume(volume) {
    return (
      <li
        key={volume.id}
        className="fb-volume"
      >
        {volume.volumeInfo.title}
      </li>
    );
  }

  renderVolumes() {
    const {volumes} = this.state;
    if (volumes.length === 0) {
      return null;
    }
    const listVolumes = volumes.map(this.renderVolume);
    return <ul className="fb-volumes">{listVolumes}</ul>;
  }

  render() {
    return (
      <div className="fb">
        <div className="fb-header">
          <h2 className="fb-title">Welcome to Favorite Books</h2>
        </div>
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
        {this.renderVolumes()}
      </div>
    );
  }
}

export default App;
