import { shallowMount } from '@vue/test-utils';
import messageFormatterMixin from '../messageFormatterMixin';

describe('messageFormatterMixin', () => {
  it('returns correct plain text', () => {
    const Component = {
      render() {},
      mixins: [messageFormatterMixin],
    };
    const wrapper = shallowMount(Component);
    const message =
      '<b>Chatquick is an opensource tool. https://www.quicksales.vn</b>';
    expect(wrapper.vm.getPlainText(message)).toMatch(
      'Chatquick is an opensource tool. https://www.quicksales.vn'
    );
  });
});
