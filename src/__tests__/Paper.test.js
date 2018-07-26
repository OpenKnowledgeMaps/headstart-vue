import Paper from '../components/Paper';
import { shallowMount } from '@vue/test-utils';

const factory = (values = {}) => {
  return shallowMount(Paper, {
    propsData: { ...values}
  })
};
let wrapper, gWrapper, foreignObjectWrapper;

beforeEach(() => {
  wrapper = factory({
    x: 20,
    y: 20,
    w: 40,
    h: 40,
    id: 0,
    bubbleId: 1,
    metadata_height: 10,
    metadata_width: 10,
    title: 'Test Paper',
    authors_string: 'Test Author',
    published_in: 'Test Journal',
    year: '2018',
    readers: '20',
    base_unit: 'readers'
  });

  gWrapper = wrapper.find('g');
  foreignObjectWrapper = wrapper.find('foreignobject');
});

describe('Paper', () => {
  it('matches a previously made snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('s g element reacts to mouseover events', () => {
    gWrapper.trigger('mouseover');
    expect(wrapper.emitted('bubbleMouseEnter')).toBeTruthy();
  });

  it('s g element reacts to mouseout events', () => {
      gWrapper.trigger('mouseout');
      expect(wrapper.emitted('bubbleMouseLeave')).toBeTruthy();
  });

  it('s g element reacts to click events', () => {
      gWrapper.trigger('click');
      expect(wrapper.emitted('bubbleClick')).toBeTruthy();
  });

  it('s g element reacts to doubleclick events', () => {
      gWrapper.trigger('click');
      expect(wrapper.emitted('bubbleClick')).toBeTruthy();
  });

  it('s foreignObject element reacts to mouseover events', () => {
      foreignObjectWrapper.trigger('mouseover');
      expect(wrapper.emitted('bubbleMouseEnter')).toBeTruthy();
  });

  it('s foreignObject element reacts to mouseout events', () => {
      foreignObjectWrapper.trigger('mouseout');
      expect(wrapper.emitted('bubbleMouseLeave')).toBeTruthy();
  });

  it('s foreignObject element reacts to click events', () => {
      foreignObjectWrapper.trigger('click');
      expect(wrapper.emitted('bubbleClick')).toBeTruthy();
  });

  it('s foreignObject element reacts to doubleclick events', () => {
      foreignObjectWrapper.trigger('dblclick');
      expect(wrapper.emitted('bubbleDoubleClick')).toBeTruthy();
  });
});