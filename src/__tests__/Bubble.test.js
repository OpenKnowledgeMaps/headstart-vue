import Bubble from '../templates/Bubble';
import { mount } from '@vue/test-utils';

describe('Bubble', () => {
  let wrapper, circleWrapper, foreignObjectWrapper;
  beforeEach(() => {
    wrapper = mount(Bubble, {
      propsData: {
        id: 1,
        x: 300,
        y: 300,
        r: 74.4123,
        order: 1,
        hovered: false,
        area: "Cool"
      }});
    circleWrapper = wrapper.find('circle');
    foreignObjectWrapper = wrapper.find('foreignObject');
  });

  it('renders a svg group element, a circle and a foreignobject according to its props', () => {
    expect(wrapper.find('g').exists()).toBe(true);
    expect(wrapper.find('circle').exists()).toBe(true);
    expect(wrapper.find('circle').attributes().r).toBe("74.4123");
    expect(wrapper.find('#bubble1').exists()).toBe(true);
    expect(wrapper.find('#bubble1').attributes().transform).toBe("translate(300,300)");
    expect(wrapper.find('h2').text()).toBe("Cool");
    expect(wrapper.find('foreignobject').exists()).toBe(true);
  });

  it('s circle element reacts to mouseover events', () => {
    circleWrapper.trigger('mouseover');
    expect(wrapper.emitted('mouseEnter')).toBeTruthy();
  });

  it('s circle element reacts to mouseout events', () => {
    circleWrapper.trigger('mouseout');
    expect(wrapper.emitted('mouseLeave')).toBeTruthy();
  });

  it('s circle element reacts to click events', () => {
    circleWrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });

  it('s circle element reacts to doubleclick events', () => {
    circleWrapper.trigger('dblclick');
    expect(wrapper.emitted('doubleClick')).toBeTruthy();
  });

  it('s foreignobject element reacts to mouseover events', () => {
    foreignObjectWrapper.trigger('mouseover');
    expect(wrapper.emitted('mouseEnter')).toBeTruthy();
  });

  it('s foreignobject element reacts to mouseout events', () => {
    foreignObjectWrapper.trigger('mouseout');
    expect(wrapper.emitted('mouseLeave')).toBeTruthy();
  });

  it('s foreignobject element reacts to click events', () => {
    foreignObjectWrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });

  it('s foreignobject element reacts to doubleclick events', () => {
    foreignObjectWrapper.trigger('dblclick');
    expect(wrapper.emitted('doubleClick')).toBeTruthy();
  });

  it('s title is not shown when hovered flag is set', () => {
    expect(wrapper.find('h2').isVisible()).toBe(true);
    wrapper.setProps({hovered: true});
    expect(wrapper.find('h2').isVisible()).toBe(false);
  });

  //Snapshot Test!
  it('matches a previously made snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
