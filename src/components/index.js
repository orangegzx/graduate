import Vue from 'vue'
import { forEach } from 'lodash'

// normal components sort by dictionary order.
import BaseWorld from './baseWorld'

function $using (components) {
  const obj = {}
  forEach(components, (c, key) => {
    const name = (typeof c === 'function') ? key : c.name
    obj[name] = Vue.component(name, c)
  })
  return obj
}

export default $using({
  BaseWorld
})