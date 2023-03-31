import React from 'react';
import { shallow } from 'enzyme';
import QRCodeGenerator from '../src/components/QRCodeGenerator';

describe('QRCodeGenerator', () => {
  it('should render correctly', () => {
    // Shallow rendering of QRCodeGenerator component
    const wrapper = shallow(<QRCodeGenerator />);
    // Compare the rendered output with a saved snapshot
    expect(wrapper).toMatchSnapshot();
  });
});
