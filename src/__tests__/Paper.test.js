import Paper from '../templates/Paper';
import { shallowMount } from '@vue/test-utils';

const factory = (values = {}) => {
  return shallowMount(Paper, {
    propsData: { ...values}
  })
};
let wrapper, gWrapper, foreignObjectWrapper;

beforeEach(() => {
  wrapper = factory({
    id: 0,
    x: 300,
    y: 300,
    w: 22.28,
    h: 29,
    order: 0,
    metadata: {
      width: 20,
      height: 23,
      title: "De­vel­op­ment of re­la­tional pro­cess­ing in hot and cool tasks.",
      authors_string: "Katie M Bunch, Glenda An­drews",
      published_in: "Developmental neuropsychology",
      year: "(2012)",
      readers: "2",
      base_unit: "citations"
    },
    bubbleId: 1
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
    expect(wrapper.emitted('mouseEnter')).toBeTruthy();
  });

  it('s g element reacts to mouseout events', () => {
      gWrapper.trigger('mouseout');
      expect(wrapper.emitted('mouseLeave')).toBeTruthy();
  });

  it('s g element reacts to click events', () => {
      gWrapper.trigger('click');
      expect(wrapper.emitted('click')).toBeTruthy();
  });

  it('s g element reacts to doubleclick events', () => {
      gWrapper.trigger('dblclick');
      expect(wrapper.emitted('doubleClick')).toBeTruthy();
  });

  it('s foreignObject element reacts to mouseover events', () => {
      foreignObjectWrapper.trigger('mouseover');
      expect(wrapper.emitted('mouseEnter')).toBeTruthy();
  });

  it('s foreignObject element reacts to mouseout events', () => {
      foreignObjectWrapper.trigger('mouseout');
      expect(wrapper.emitted('mouseLeave')).toBeTruthy();
  });

  it('s foreignObject element reacts to click events', () => {
      foreignObjectWrapper.trigger('click');
      expect(wrapper.emitted('click')).toBeTruthy();
  });

  it('s foreignObject element reacts to doubleclick events', () => {
      foreignObjectWrapper.trigger('dblclick');
      expect(wrapper.emitted('doubleClick')).toBeTruthy();
  });
});
