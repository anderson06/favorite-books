import React, { Component } from 'react';
import { SearchResults } from './components/search-results';
import SearchForm from './components/search/search-form';
import getVolumes from './services/books';
import './App.scss';

class App extends Component {

  static parseVolumes(items) {
    const volumes = items.map((item) => {
      let thumbnail = null;
      if (item.volumeInfo.imageLinks) {
        thumbnail = item.volumeInfo.imageLinks.thumbnail;
      }
      return {
        thumbnail,
        id: item.id,
        title: item.volumeInfo.title,
        description: item.volumeInfo.description,
      };
    });
    return volumes;
  }

  constructor() {
    super();
    this.state = {
      page: 0,
      items: [],
      volumes: [],
      searchQuery: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleNextPageClick = this.handleNextPageClick.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.loadBooks();
  }

  handleNextPageClick(event) {
    event.preventDefault();
    let page = this.state.page;
    page += 1;
    this.loadBooks(page);
  }

  handleChange(event) {
    this.setState({ searchQuery: event.target.value });
  }

  loadBooks(page = 0) {
    const { searchQuery } = this.state;
    getVolumes(searchQuery, page)
      .then((response) => {
        this.setState({
          page,
          items: response.data.items,
          volumes: App.parseVolumes(response.data.items),
        });
      })
      .catch((error) => {
        /* eslint-disable no-console */
        console.error(error);
        /* eslint-enable no-console */
        this.setState({
          page,
          items: [],
          volumes: [],
        });
      });
  }

  render() {
    const { volumes, page } = this.state;
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
          <SearchResults
            page={page}
            volumes={volumes}
            onNextPageClick={this.handleNextPageClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
