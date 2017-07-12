import React, { Component } from 'react';
import { SearchResults } from './components/search-results';
import SearchForm from './components/search/SearchForm';
import { VolumeInfo } from './components/volumes';
import parseVolume from './utilities/parseVolume';
import { getVolumes } from './services/books';
import './App.scss';

class App extends Component {

  constructor() {
    super();
    this.state = {
      currentVolume: null,
      page: 0,
      totalPages: 0,
      volumes: [],
      searchQuery: '',
      submitedSearchQuery: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleVolumeClick = this.handleVolumeClick.bind(this);
    this.handleNextPageClick = this.handleNextPageClick.bind(this);
    this.handlePreviousPageClick = this.handlePreviousPageClick.bind(this);
    this.handleVolumeInfoCloseClick = this.handleVolumeInfoCloseClick.bind(this);
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

  handlePreviousPageClick(event) {
    event.preventDefault();
    let page = this.state.page;
    page -= 1;
    this.loadBooks(page);
  }

  handleChange(event) {
    this.setState({ searchQuery: event.target.value });
  }

  handleVolumeClick(volume) {
    this.setState({ currentVolume: volume });
  }

  handleVolumeInfoCloseClick() {
    this.setState({ currentVolume: null });
  }

  loadBooks(page = 0) {
    const { searchQuery } = this.state;
    getVolumes(searchQuery, page)
      .then((response) => {
        this.setState({
          page,
          totalPages: Math.floor(response.data.totalItems / 10),
          volumes: response.data.items.map(parseVolume),
          submitedSearchQuery: searchQuery,
        });
      })
      .catch((error) => {
        /* eslint-disable no-console */
        console.error(error);
        /* eslint-enable no-console */
        this.setState({
          page,
          totalPages: 0,
          volumes: [],
          submitedSearchQuery: '',
        });
      });
  }

  renderSearch() {
    return (
      <div>
        <div className="section">
          <SearchForm
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        </div>

        <div className="section">
          <SearchResults
            volumes={this.state.volumes}
            currentPage={this.state.page}
            totalPages={this.state.totalPages}
            onVolumeClick={this.handleVolumeClick}
            onNextPageClick={this.handleNextPageClick}
            searchQuery={this.state.submitedSearchQuery}
            onPreviousPageClick={this.handlePreviousPageClick}
          />
        </div>
      </div>
    );
  }

  renderVolumeInfo() {
    const { currentVolume } = this.state;
    return (
      <VolumeInfo
        volume={currentVolume}
        onCloseClick={this.handleVolumeInfoCloseClick}
      />
    );
  }

  render() {
    const { currentVolume } = this.state;
    return (
      <div className="fb container">
        <div className="fb-header section">
          <h1 className="fb-title">Favorite Books</h1>
        </div>

        {currentVolume ? this.renderVolumeInfo() : this.renderSearch()}
      </div>
    );
  }
}

export default App;
