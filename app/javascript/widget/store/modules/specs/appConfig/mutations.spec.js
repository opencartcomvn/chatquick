import { mutations } from '../../appConfig';

describe('#mutations', () => {
  describe('#SET_REFERRER_HOST', () => {
    it('sets referrer host properly', () => {
      const state = { referrerHost: '' };
      mutations.SET_REFERRER_HOST(state, 'www.quicksales.vn');
      expect(state.referrerHost).toEqual('www.quicksales.vn');
    });
  });

  describe('#SET_BUBBLE_VISIBILITY', () => {
    it('sets bubble visibility properly', () => {
      const state = { hideMessageBubble: false };
      mutations.SET_BUBBLE_VISIBILITY(state, true);
      expect(state.hideMessageBubble).toEqual(true);
    });
  });

  describe('#SET_WIDGET_COLOR', () => {
    it('sets widget color properly', () => {
      const state = { widgetColor: '' };
      mutations.SET_WIDGET_COLOR(state, '#00bcd4');
      expect(state.widgetColor).toEqual('#00bcd4');
    });
  });
});
