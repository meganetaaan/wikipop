/* eslint no-unused-vars: 0 */
import Vue from 'vue'

import { storiesOf } from '@storybook/vue'

import WikiPop from '../components/WikiPop.vue'

storiesOf('WikiPop', module)
  .add('Random article', () => ({
    components: { WikiPop },
    template: '<WikiPop :style="style" lang="ja" random="true"></WikiPop>',
    data () {
      return {
        style: {
          height: '100%',
          width: '100%'
        }
      }
    }
  }))
  .add('fixed size', () => ({
    components: { WikiPop },
    template: '<WikiPop :style="style" name="BatMan"></WikiPop>',
    data () {
      return {
        style: {
          height: '200px',
          width: '200px'
        }
      }
    }
  }))
  .add('100% size', () => ({
    components: { WikiPop },
    template: '<WikiPop :style="style" name="BatMan"></WikiPop>',
    data () {
      return {
        style: {
          height: '100%',
          width: '100%'
        }
      }
    }
  }))
