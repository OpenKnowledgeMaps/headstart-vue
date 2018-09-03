import { shallowMount } from '@vue/test-utils';
import Chart from '../templates/Chart';

const factory = (values = {}) => shallowMount(Chart, {
  propsData: { ...values },
});

describe('Chart', () => {
  it('matches a previously made snapshot', () => {
    const wrapper = factory({ height: 600, width: 600 });
    expect(wrapper).toMatchSnapshot();
  });
});
