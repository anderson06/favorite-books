import React, { Component } from 'react';
import { getVolume } from '../../services/books';
import updateProtocol from '../../utilities/updateProtocol';
import './VolumeInfo.scss';

class VolumeInfo extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      currentVolume: {},
      error: false,
    };
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  componentDidMount() {
    if (!this.props.volume) {
      return;
    }

    const promise = getVolume(this.props.volume.id)
      .then((response) => {
        this.setState({
          loading: false,
          currentVolume: response.data,
          error: false,
        });
      }, () => {
        this.setState({
          loading: false,
          currentVolume: {},
          error: true,
        });
      });
  }

  handleCloseClick() {
    if (this.props.onCloseClick) {
      this.props.onCloseClick();
    }
  }

  renderLoading() {
    return (
      <div className="preloader-wrapper big active fb-loading">
        <div className="spinner-layer spinner-blue">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    );
  }

  renderErrorMessage() {
    return (
      <div className="fb-fail-message">
        <h5>Ocorreu um erro</h5>
        <p>Tente novamente mais tarde</p>
      </div>
    );
  }

  renderInfo() {
    const { volumeInfo } = this.state.currentVolume;
    const closeButton = (
      <div
        className="fb-close-button"
        onClick={this.handleCloseClick}
      >
        x
      </div>
    );
    if (!volumeInfo) {
      return <div className="fb-info">{closeButton}</div>;
    }
    const authors = volumeInfo.authors.map((author, index) => <div key={index}>{author}</div>);
    return (
      <div className="fb-info" id="info">
        {closeButton}
        <div className="">
          <div className="cover-container">
            <img src={ updateProtocol(volumeInfo.imageLinks.small) } className="cover-image" />
          </div>
          <div className="info-box-top">
            <h1 className="volume-title">{ volumeInfo.title }</h1>
            { authors }
            <div>{ volumeInfo.publisher }</div>
            <div>{ volumeInfo.publishedDate }</div>
          </div>
        </div>
        <div className="flow-text description">{ volumeInfo.description }</div>
      </div>
    );
  }

  render() {
    if (this.state.error) {
      return this.renderErrorMessage();
    }

    if (this.state.loading) {
      return this.renderLoading();
    }

    if (this.state.currentVolume) {
      return this.renderInfo();
    }

    return null;
  }
}

export default VolumeInfo;
