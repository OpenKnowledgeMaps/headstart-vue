import Bubble from '../components/Bubble';
import { mount } from '@vue/test-utils';

describe('Bubble', () => {
  let wrapper, circleWrapper, foreignObjectWrapper;
  beforeEach(() => {
    wrapper = mount(Bubble, {
      propsData: {
        id: 0,
        x: 100,
        y: 20,
        r: 30,
        title: "Bubble Title",
        zoomedOut: true
      }});
    circleWrapper = wrapper.find('circle');
    foreignObjectWrapper = wrapper.find('foreignObject');
  });

  it('renders a svg group element, a circle and a foreignobject according to its props', () => {
    expect(wrapper.find('g').exists()).toBe(true);
    expect(wrapper.find('circle').exists()).toBe(true);
    expect(wrapper.find('circle').attributes().r).toBe("30");
    expect(wrapper.find('#bubble0').exists()).toBe(true);
    expect(wrapper.find('#bubble0').attributes().transform).toBe("translate(100,20)");
    expect(wrapper.find('h2').text()).toBe("Bubble Title");
    expect(wrapper.find('foreignobject').exists()).toBe(true);
  });

  it('s circle element reacts to mouseover events', () => {
    circleWrapper.trigger('mouseover');
    expect(wrapper.emitted('bubbleMouseEnter')).toBeTruthy();
  });

  it('s circle element reacts to mouseout events', () => {
    circleWrapper.trigger('mouseout');
    expect(wrapper.emitted('bubbleMouseLeave')).toBeTruthy();
  });

  it('s circle element reacts to click events', () => {
    circleWrapper.trigger('click');
    expect(wrapper.emitted('bubbleClick')).toBeTruthy();
  });

  it('s circle element reacts to doubleclick events', () => {
    circleWrapper.trigger('dblclick');
    expect(wrapper.emitted('bubbleDoubleClick')).toBeTruthy();
  });

  it('s foreignobject element reacts to mouseover events', () => {
    foreignObjectWrapper.trigger('mouseover');
    expect(wrapper.emitted('bubbleMouseEnter')).toBeTruthy();
  });

  it('s foreignobject element reacts to mouseout events', () => {
    foreignObjectWrapper.trigger('mouseout');
    expect(wrapper.emitted('bubbleMouseLeave')).toBeTruthy();
  });

  it('s foreignobject element reacts to click events', () => {
    foreignObjectWrapper.trigger('click');
    expect(wrapper.emitted('bubbleClick')).toBeTruthy();
  });

  it('s foreignobject element reacts to doubleclick events', () => {
    foreignObjectWrapper.trigger('dblclick');
    expect(wrapper.emitted('bubbleDoubleClick')).toBeTruthy();
  });

  it('s title is not shown when zoomed out flag is set', () => {
    expect(wrapper.find('h2').isVisible()).toBe(false);
    wrapper.setProps({zoomedOut: false});
    expect(wrapper.find('h2').isVisible()).toBe(true);
  });

  //Snapshot Test!
  it('matches a previously made snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});