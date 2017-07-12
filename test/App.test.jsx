import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { aVolume } from './builders/volume';
import App from '../src/App';
import SearchForm from '../src/components/search/SearchForm';
import { SearchResults } from '../src/components/search-results';
import { VolumeInfo } from '../src/components/volumes';

describe('<App />', () => {
  it('should render a <SearchForm /> and <SearchResults /> by default', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(SearchForm).length).toBe(1);
    expect(wrapper.find(SearchResults).length).toBe(1);
  });

  it('should render a SearchForm with onChange and onSubmit props', () => {
    const wrapper = shallow(<App />);
    const app = wrapper.instance();
    const searchFormProps = wrapper.find(SearchForm).props();
    expect(searchFormProps.onChange).toBe(app.handleChange);
    expect(searchFormProps.onSubmit).toBe(app.handleSubmit);
  });

  it('renders SearchResults with onVolumeClick props set to handleVolumeClick', () => {
    const wrapper = shallow(<App />);
    const app = wrapper.instance();
    const searchResultsProps = wrapper.find(SearchResults).props();
    expect(searchResultsProps.onVolumeClick).toBe(app.handleVolumeClick);
  });

  it('should pass submitedSearchQuery to <SearchResults />', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ submitedSearchQuery: 'a search query' });
    const resultsProps = wrapper.find(SearchResults).props();
    expect(resultsProps.searchQuery).toBe(wrapper.state('submitedSearchQuery'));
  });

  it('should update the currentVolume state on handleVolumeClick', () => {
    const wrapper = shallow(<App />);
    const volume = aVolume();
    wrapper.instance().handleVolumeClick(volume);
    expect(wrapper.state('currentVolume')).toBe(volume);
  });

  it('shouldn\'t render SearchForm or SearchResults when currentVolume is set', () => {
    const wrapper = shallow(<App />);
    const volume = aVolume();
    wrapper.setState({ currentVolume: volume });
    expect(wrapper.find(SearchForm).length).toBe(0);
    expect(wrapper.find(SearchResults).length).toBe(0);
  });

  it('should render VolumeInfo when currentVolume is set', () => {
    const wrapper = shallow(<App />);
    const volume = aVolume();
    wrapper.setState({ currentVolume: volume });
    expect(wrapper.find(VolumeInfo).length).toBe(1);
  });

  it('should render VolumeInfo with the prop volume set to currentVolume', () => {
    const wrapper = shallow(<App />);
    const volume = aVolume();
    wrapper.setState({ currentVolume: volume });
    expect(wrapper.find(VolumeInfo).props().volume).toBe(volume);
  });

  it('should render VolumeInfo with the prop onCloseClick set to handleVolumeInfoCloseClick', () => {
    const wrapper = shallow(<App />);
    const volume = aVolume();
    wrapper.setState({ currentVolume: volume });
    expect(wrapper.find(VolumeInfo).props().onCloseClick).toBe(wrapper.instance().handleVolumeInfoCloseClick);
  });

  describe('handleVolumeInfoCloseClick', () => {
    it('should update currentVolume to null', () => {
      const wrapper = shallow(<App />);
      const volume = aVolume();
      wrapper.setState({ currentVolume: volume });
      expect(wrapper.state('currentVolume')).toBe(volume);
      wrapper.instance().handleVolumeInfoCloseClick();
      expect(wrapper.state('currentVolume')).toBe(null);
    });
  });
});
