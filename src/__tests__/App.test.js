import App from '../App';
import Bubble from '../js/components/Bubble';
import { shallowMount, mount } from '@vue/test-utils';

describe('App', () => {
  it('matches a previously made snapshot', () => {
    const wrapper = shallowMount(App);
    expect(wrapper).toMatchSnapshot();
  });

  it('calls onBubbleMouseEnter if a bubbleMouseEnter signal is emitted', () => {
    const wrapper = mount(App);
    const bubbleWrapper = wrapper.find(Bubble);
    expect(bubbleWrapper.exists()).toBeTruthy();
    expect(bubbleWrapper.vm.hovered).toBe(false);
    bubbleWrapper.vm.$emit('mouseEnter', bubbleWrapper.vm.id);
    expect(bubbleWrapper.vm.hovered).toBe(true);
  });

  it('calls onBubbleMouseLeave if a bubbleMouseLeave signal is emitted', () => {
    const wrapper = mount(App);
    const bubbleWrapper = wrapper.find(Bubble);
    expect(bubbleWrapper.exists()).toBeTruthy();
    bubbleWrapper.vm.$emit('mouseenter', bubbleWrapper.vm.id);
    expect(bubbleWrapper.vm.hovered).toBe(true);
    bubbleWrapper.vm.$emit('mouseLeave', bubbleWrapper.vm.id);
    expect(bubbleWrapper.vm.hovered).toBe(false);
  });
});