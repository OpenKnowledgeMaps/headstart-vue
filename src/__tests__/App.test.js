import App from '../App';
import Bubble from '../components/Bubble';
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
    expect(bubbleWrapper.vm.zoomedOut).toBe(false);
    bubbleWrapper.vm.$emit('bubbleMouseEnter', bubbleWrapper.vm.id);
    expect(bubbleWrapper.vm.zoomedOut).toBe(true);
  });

  it('calls onBubbleMouseLeave if a bubbleMouseLeave signal is emitted', () => {
    const wrapper = mount(App);
    const bubbleWrapper = wrapper.find(Bubble);
    expect(bubbleWrapper.exists()).toBeTruthy();
    bubbleWrapper.vm.$emit('bubbleMouseEnter', bubbleWrapper.vm.id);
    expect(bubbleWrapper.vm.zoomedOut).toBe(true);
    bubbleWrapper.vm.$emit('bubbleMouseLeave', bubbleWrapper.vm.id);
    expect(bubbleWrapper.vm.zoomedOut).toBe(false);
  });
});