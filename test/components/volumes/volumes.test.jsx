import React from 'react';
import { shallow } from 'enzyme';
import Volumes from '../../../src/components/volumes/volumes.jsx';
import Volume from '../../../src/components/volumes/volume.jsx';
import { volume } from '../../builders/volume';

describe('<Volumes />', () => {
  it('should render a list of <Volume /> components', () => {
    const volumes = [ volume(), volume(), volume() ];
    const wrapper = shallow(<Volumes volumes={volumes} />);
    expect(wrapper.find(Volume).length).toBe(3);
  });

  it('should generate a index number for each Volume', () => {
    const volumes = [ volume(), volume(), volume() ];
    const wrapper = shallow(<Volumes volumes={volumes} />);
    expect(wrapper.find({ index: 0 }).length).toBe(1);
    expect(wrapper.find({ index: 1 }).length).toBe(1);
    expect(wrapper.find({ index: 2 }).length).toBe(1);
    // expect(wrapper.find(Volume)[1].props.index).toBe(1);
    // expect(wrapper.find(Volume)[2].props.index).toBe(2);
  });
});
