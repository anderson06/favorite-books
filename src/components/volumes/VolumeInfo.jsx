import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getVolume } from '../../services/books';
import updateProtocol from '../../utilities/updateProtocol';
import Volume from './Volume';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';
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

    getVolume(this.props.volume.id)
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

  renderInfo() {
    const { volumeInfo } = this.state.currentVolume;
    const closeButton = (
      <div
        tabIndex="0"
        role="button"
        className="fb-close-button"
        onClick={this.handleCloseClick}
      >
        x
      </div>
    );

    if (!volumeInfo) {
      return <div className="fb-info">{closeButton}</div>;
    }

    let authors = null;

    if (volumeInfo.authors) {
      authors = volumeInfo.authors.map((author, index) => <div key={index}>{author}</div>);
    }

    const description = { __html: volumeInfo.description };
    return (
      <div className="fb-info" id="info">
        {closeButton}
        <div className="row">
          <div className="col s12 m4">
            <div className="cover-container">
              <img
                src={updateProtocol(volumeInfo.imageLinks.small)}
                className="cover-image"
                alt="book cover"
              />
            </div>
          </div>
          <div className="col s12 m8">
            <div className="info-box-top">
              <h1 className="volume-title">{ volumeInfo.title }</h1>
              { authors }
              <div>{ volumeInfo.publisher }</div>
              <div>{ volumeInfo.publishedDate }</div>
            </div>
          </div>
        </div>
        <div
          className="flow-text description"
          dangerouslySetInnerHTML={description}
        />
      </div>
    );
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    if (this.state.loading) {
      return <Loading />;
    }

    if (this.state.currentVolume) {
      return this.renderInfo();
    }

    return null;
  }
}

VolumeInfo.propTypes = {
  volume: PropTypes.shape(Volume.propTypes).isRequired,
  onCloseClick: PropTypes.func,
};

VolumeInfo.defaultProps = {
  onCloseClick: () => {},
};

export default VolumeInfo;
