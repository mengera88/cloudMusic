import Vue from 'vue';

import Alert from './alert';


/**
 *
 * @param {Object} options
 * title: string
 * body: string 待定
 */

const AlertInstance = (options) => {
  if (!options) {
    options = {};
  }

  // 处理props
  const propsData = Object.assign({}, options);

  const div = document.createElement('div');
  document.body.appendChild(div);

  const ShowAlert = Vue.extend(Alert);


  const alert = new ShowAlert({
    el: div,
    data() {
      return {
        message: options.message ? options.message : '提示',
      };
    },
    propsData,
  });

  alert.$on('sure', () => {
    console.log('父点击了确定');
  });

  alert.$on('cancel', () => {
    alert.close();
    console.log('父点击了取消');
    document.body.removeChild(div);
  });

  return alert.show();
};


export default AlertInstance;
