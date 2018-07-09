import Bubble from '../components/Bubble';
import { shallowMount, mount } from '@vue/test-utils';

const factory = (values = {}) => {
  return shallowMount(Chart, {
    propsData: { ...values}
  })
};

describe('Bubble', () => {
  it('renders a svg group element, a circle and a foreignobject according to its props', () => {
    const wrapper = mount(Bubble, {
      propsData: {
        id: 0,
        x: 100,
        y: 20,
        r: 30,
        title: "Bubble Title",
        zoomedOut: true
      }});
    expect(wrapper.find('g').exists()).toBe(true);
    expect(wrapper.find('circle').exists()).toBe(true);
    expect(wrapper.find('circle').attributes().r).toBe("30");
    expect(wrapper.find('#bubble0').exists()).toBe(true);
    expect(wrapper.find('#bubble0').attributes().transform).toBe("translate(100,20)");
    expect(wrapper.find('h2').text()).toBe("Bubble Title");
    expect(wrapper.find('foreignobject').exists()).toBe(true);
  });

  it('s circle element reacts to mouseover, mouseout, click and doubleclick events', () => {
    const wrapper = mount(Bubble, {
      propsData: {
        id: 0,
        x: 100,
        y: 20,
        r: 30,
        title: "Bubble Title",
        zoomedOut: true
      }});
    const circleWrapper = wrapper.find('circle');
    circleWrapper.trigger('mouseover');
    expect(wrapper.emitted('bubbleMouseEnter')).toBeTruthy();
    circleWrapper.trigger('mouseout');
    expect(wrapper.emitted('bubbleMouseLeave')).toBeTruthy();
    circleWrapper.trigger('click');
    expect(wrapper.emitted('bubbleClick')).toBeTruthy();
    circleWrapper.trigger('dblclick');
    expect(wrapper.emitted('bubbleDoubleClick')).toBeTruthy();
  });

  it('s foreignobject element reacts to mouseover, mouseout, click and doubleclick events', () => {
    const wrapper = mount(Bubble, {
      propsData: {
        id: 0,
        x: 100,
        y: 20,
        r: 30,
        title: "Bubble Title",
        zoomedOut: true
      }});
    const foreignObjectWrapper = wrapper.find('foreignObject');
    foreignObjectWrapper.trigger('mouseover');
    expect(wrapper.emitted('bubbleMouseEnter')).toBeTruthy();
    foreignObjectWrapper.trigger('mouseout');
    expect(wrapper.emitted('bubbleMouseLeave')).toBeTruthy();
    foreignObjectWrapper.trigger('click');
    expect(wrapper.emitted('bubbleClick')).toBeTruthy();
    foreignObjectWrapper.trigger('dblclick');
    expect(wrapper.emitted('bubbleDoubleClick')).toBeTruthy();
  });

  it('s title is not shown when zoomed out flag is set', () => {
    const wrapper = mount(Bubble, {
      propsData: {
        id: 0,
        x: 100,
        y: 20,
        r: 30,
        title: "Bubble Title",
        zoomedOut: true
      }});
    expect(wrapper.find('h2').isVisible()).toBe(false);
    wrapper.setProps({zoomedOut: false});
    expect(wrapper.find('h2').isVisible()).toBe(true);
  });

  //Snapshot Test!
  it('matches a previously made snapshot', () => {
    const wrapper = mount(Bubble, {
      propsData: {
        id: 0,
        x: 100,
        y: 20,
        r: 30,
        title: "Bubble Title",
        zoomedOut: true
      }});
    expect(wrapper).toMatchSnapshot();
  })
});