import Paper from '../components/Paper';
import { shallowMount } from '@vue/test-utils';

const factory = (values = {}) => {
  return shallowMount(Paper, {
    propsData: { ...values}
  })
};
let wrapper;

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
});

describe('Paper', () => {
  it('matches a previously made snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('s g element reacts to mouseover, mouseout, click and doubleclick events', () => {
    const gWrapper = wrapper.find('g');
    gWrapper.trigger('mouseover');
    expect(wrapper.emitted('bubbleMouseEnter')).toBeTruthy();
    gWrapper.trigger('mouseout');
    expect(wrapper.emitted('bubbleMouseLeave')).toBeTruthy();
    gWrapper.trigger('click');
    expect(wrapper.emitted('bubbleClick')).toBeTruthy();
    gWrapper.trigger('dblclick');
    expect(wrapper.emitted('bubbleDoubleClick')).toBeTruthy();
  });

  it('s foreignObject element reacts to mouseover, mouseout, click and doubleclick events', () => {
    const foreignObjectWrapper = wrapper.find('foreignobject');
    foreignObjectWrapper.trigger('mouseover');
    expect(wrapper.emitted('bubbleMouseEnter')).toBeTruthy();
    foreignObjectWrapper.trigger('mouseout');
    expect(wrapper.emitted('bubbleMouseLeave')).toBeTruthy();
    foreignObjectWrapper.trigger('click');
    expect(wrapper.emitted('bubbleClick')).toBeTruthy();
    foreignObjectWrapper.trigger('dblclick');
    expect(wrapper.emitted('bubbleDoubleClick')).toBeTruthy();
  });
});