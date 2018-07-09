import Chart from '../components/Chart';
import { shallowMount, mount } from '@vue/test-utils';

const factory = (values = {}) => {
  return shallowMount(Chart, {
    propsData: { ...values}
  })
};

describe('Chart', () => {
  it('renders an svg chart with a given height and width', () => {
    const wrapper = factory({height: 600, width: 600});
    expect(wrapper.contains('svg')).toEqual(true);
    expect(wrapper.find('svg').attributes().height).toBe("600");
    expect(wrapper.find('svg').attributes().width).toBe("600");
  });

  it('renders an svg chart with 0 height 0 width', () => {
    const wrapper = factory({height: 0, width: 0});
    expect(wrapper.contains('svg')).toEqual(true);
    expect(wrapper.find('svg').attributes().height).toBe("0");
    expect(wrapper.find('svg').attributes().width).toBe("0");
  });

  it('initially has class zoomed_out', () => {
    const wrapper = mount(Chart);
    expect(wrapper.find('rect').attributes().class).toBe('zoomed_out');
  });
});