/**
 * toast 组件封装
 * 使用示例：
 * Toast({
      message: '我来了',
      type: 'warning',
      duration: 1000,
    });
 * @params {String} message  提示的信息内容
 * @params {String} type     提示的类别，可以为success, error, warning, info 默认为info
 * @params {Number} duration 提示漂浮显示的时间，默认为3000ms
 */
import Vue from 'vue';
import toast from './toast';

const ToastConstructor = Vue.extend(toast);

const Toast = (options) => {
  options = options || {};
  const div = document.createElement('div');
  document.body.appendChild(div);
  const ToastInstance = new ToastConstructor().$mount(div);
  ToastInstance.message = options.message || '我是一条提示信息';
  ToastInstance.type = options.type || 'info';
  ToastInstance.duration = options.duration || 3000;
  return ToastInstance.show();
};

export default Toast;
