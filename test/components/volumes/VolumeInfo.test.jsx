import React from 'react';
import { shallow, mount } from 'enzyme';
import { VolumeInfo, Loading, ErrorMessage } from '../../../src/components/volumes';
import { getVolume } from '../../../src/services/books';
import { aVolume } from '../../builders/volume';

jest.mock('../../../src/services/books');

describe('<VolumeInfo />', () => {
  let volume;

  beforeEach(() => {
    volume = { id: '000' };
    getVolume.mockClear();
  });

  it('should have loading state by default', () => {
    const wrapper = shallow(<VolumeInfo volume={volume} />);
    expect(wrapper.state('loading')).toBe(true);
  });

  it('should have an empty currentVolume state by default', () => {
    const wrapper = shallow(<VolumeInfo volume={volume} />);
    expect(wrapper.state('currentVolume')).toEqual({});
  });

  it('should have error set to false by default', () => {
    const wrapper = shallow(<VolumeInfo volume={volume} />);
    expect(wrapper.state('error')).toBe(false);
  });

  it('should have a loading element by default', () => {
    const wrapper = shallow(<VolumeInfo volume={volume} />);
    expect(wrapper.find(Loading).length).toBe(1);
  });

  describe('handleCloseClick', () => {
    it('should call props.onCloseClick', () => {
      const mockClose = jest.fn();
      const wrapper = shallow(<VolumeInfo volume={volume} onCloseClick={mockClose} />);
      wrapper.instance().handleCloseClick();
      expect(mockClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('.close onClick', () => {
    it('should call handleCloseClick', (done) => {
      const wrapper = shallow(<VolumeInfo volume={volume} />);
      const spy = jest.spyOn(wrapper.instance(), 'handleCloseClick');
      wrapper.setState({ currentVolume: volume, loading: false }, () => {
        wrapper.find('.fb-close-button').simulate('click');
        expect(spy).toHaveBeenCalledTimes(1);
        done();
      });
    });
  });

  describe('on componentDidMount', () => {
    it('should fetch the volume, finish loading and update the currentVolume', () => {
      expect.assertions(4);
      const serviceVolume = aVolume();
      const promise = Promise.resolve({ data: serviceVolume });
      getVolume.mockReturnValueOnce(promise);
      const wrapper = mount(<VolumeInfo volume={volume} />);

      return promise.then(() => {
        wrapper.update();
        expect(getVolume).toHaveBeenCalledTimes(1);
        expect(getVolume).toHaveBeenCalledWith(volume.id);
        expect(wrapper.state('loading')).toBe(false);
        expect(wrapper.state('currentVolume')).toBe(serviceVolume);
      });
    });

    it('finish loading, reset currentVolume and show an error message when fetch fails', () => {
      expect.assertions(5);
      const promise = Promise.reject(new Error('meu erro'));
      getVolume.mockReturnValueOnce(promise);
      const wrapper = mount(<VolumeInfo volume={volume} />);

      return promise.catch(() => {
        wrapper.update();
        expect(getVolume).toHaveBeenCalledTimes(1);
        expect(getVolume).toHaveBeenCalledWith(volume.id);
        expect(wrapper.state('currentVolume')).toEqual({});
        expect(wrapper.state('loading')).toBe(false);
        expect(wrapper.state('error')).toBe(true);
      });
    });
  });

  describe('when loading is true and error is false', () => {
    it('shouldn\'t have a loading element', (done) => {
      const wrapper = shallow(<VolumeInfo volume={volume} />);
      wrapper.setState({ loading: false }, () => {
        expect(wrapper.find('.fb-loading').length).toBe(0);
        done();
      });
    });
  });

  describe('when error is true', () => {
    it('shouldn have a error message', (done) => {
      const wrapper = shallow(<VolumeInfo volume={volume} />);
      wrapper.setState({ error: true }, () => {
        expect(wrapper.find(ErrorMessage).length).toBe(1);
        done();
      });
    });
  });

  describe('when currentVolume is set and erro and loading are false', () => {
    it('should display volume info', (done) => {
      const wrapper = shallow(<VolumeInfo volume={volume} />);
      wrapper.setState({ currentVolume: volume, loading: false }, () => {
        expect(wrapper.find('.fb-info').length).toBe(1);
        done();
      });
    });
  });
});

