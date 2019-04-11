import React from 'react';
import { shallow } from 'enzyme';
import Edition from '../OtherEditionsParts/edition';
import EditionTooltip from '../OtherEditionsParts/editionTooltip';

describe('Edition Component', () => {
  const editionData = {
    id: 1,
    coverurl: 'coverurl',
    title: 'title',
  };

  const wrapper = shallow(<Edition editionData={editionData} />);

  test('Edition renders properly when given edition props', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('Edition contains an edition img', () => {
    expect(wrapper.find('.editionImg').length).toEqual(1);
  });

  test('Edition contains EditionTooltip component', () => {
    expect(wrapper.find(EditionTooltip).length).toEqual(1);
  });
});
