import React, { Component } from 'react';
import axios from 'axios';
import Volumes from './components/volumes/volumes.jsx';
import SearchForm from './components/search/search-form.jsx';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
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
        this.setState({
          items: response.data.items,
          volumes: this.parseVolumes(response.data.items)
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          items: [],
          volumes: []
        });
      });
  }

  parseVolumes(items) {
    const volumes = items.map(item => {
      let thumbnail = null;
      if (item.volumeInfo.imageLinks) {
        thumbnail = item.volumeInfo.imageLinks.thumbnail;
      }
      return {
        thumbnail,
        id: item.id,
        title: item.volumeInfo.title,
        description: item.volumeInfo.description
      }
    });
    return volumes;
  }

  render() {
    const { volumes } = this.state;
    return (
      <div className="fb container">
        <div className="fb-header section">
          <h1 className="fb-title">Favorite Books</h1>
        </div>

        <div className="section">
          <SearchForm
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        </div>

        <div className="section">
          <Volumes volumes={volumes} />
        </div>
      </div>
    );
  }
}

export default App;
