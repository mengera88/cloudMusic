import Vue from 'vue';

import alert from './alert';

const AlertConstructor = Vue.extend(alert);

const div = document.createElement('div');

AlertConstructor.show = (options) => {
  document.body.appendChild(div);
  options.type = 'inform';
  const propsData = Object.assign({}, options);
  console.log(propsData);
  const alertInstance = new AlertConstructor({
    propsData,
  }).$mount(div);
  alertInstance.show();
};
AlertConstructor.confirm = (options) => {
  document.body.appendChild(div);
  options.type = 'confirm';
  const propsData = Object.assign({}, options);
  console.log(propsData);
  const alertInstance = new AlertConstructor({
    propsData,
  }).$mount(div);
  alertInstance.show();
};

export default AlertConstructor;
