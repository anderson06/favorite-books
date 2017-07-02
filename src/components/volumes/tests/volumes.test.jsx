import React from 'react';
import { shallow } from 'enzyme';
import Volumes from '../volumes.jsx';
import Volume from '../volume.jsx';
import { volume } from './builders/volume';

describe('<Volumes />', () => {
  it('should render a list of <Volume /> components', () => {
    const volumes = [ volume(), volume(), volume() ];
    const wrapper = shallow(<Volumes volumes={volumes} />);
    expect(wrapper.find(Volume).length).toBe(3);
  });
});
