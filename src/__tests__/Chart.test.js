import Chart from '../templates/Chart';
import { shallowMount } from '@vue/test-utils';

const factory = (values = {}) => {
  return shallowMount(Chart, {
    propsData: { ...values}
  })
};

describe('Chart', () => {
  it('matches a previously made snapshot', () => {
    const wrapper = factory({height: 600, width: 600});
    expect(wrapper).toMatchSnapshot();
  });
});
