import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TheWelcome from '../TheWelcome.vue'

describe('TheWelcome', () => {
  it('plus', async () => {
    const wrapper = mount(TheWelcome)
    await wrapper.find('#a').setValue('10');
    await wrapper.find('#b').setValue('20');
    await wrapper.find('button').trigger('click');
    expect(wrapper.find('div').text()).toBe('Result: 30');
  })
  it('Div by 0', async () => {
    const wrapper = mount(TheWelcome)
    await wrapper.find('#a').setValue('10');
    await wrapper.find('#b').setValue('0');
    await wrapper.find('#div').trigger('click');
    expect(wrapper.find('div').text()).toBe('Result: Infinity');
  })
})

