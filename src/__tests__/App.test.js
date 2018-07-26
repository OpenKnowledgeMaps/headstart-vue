import { shallowMount, mount } from '@vue/test-utils';
import App from '../App';
import Bubble from '../components/Bubble';

describe('App', () => {
  it('can be mounted', () => {
    const wrapper = mount(App);
  });

  it('has a method onBubbleMouseEnter that sets a zoomedOut flag true for the bubble', () => {
    const wrapper = mount(App);
    expect(wrapper.vm.bubbles[0].zoomedOut).toBe(false);
    wrapper.find('circle').trigger('mouseover');
    expect(wrapper.vm.bubbles[0].zoomedOut).toBe(true);
  });

  it('has a method onBubbleMouseLeave that sets a zoomedOut flag false for the bubble', () => {
    const wrapper = mount(App);
    wrapper.setData({
      bubbles: [
        {
          id: 1,
          x: 300,
          y: 300,
          r: 74.4123,
          title: 'Cool executive functions, Hot and cool, Cool and hot',
          zoomedOut: true,
        },
      ],
    });
    expect(wrapper.vm.bubbles[0].zoomedOut).toBe(true);
    wrapper.find('circle').trigger('mouseout');
    expect(wrapper.vm.bubbles[0].zoomedOut).toBe(false);
  });
});
