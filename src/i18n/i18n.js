

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from "./langs";
import locale from 'element-ui/lib/locale'
Vue.use(VueI18n)
// Vue.config.lang = 'cn'
// 从localStorage中拿到用户的语言选择，如果没有，默认中文
console.log(messages);
const i18n = new VueI18n({
  locale: localStorage.lang || "cn",
  messages
});
locale.i18n((key, value) => i18n.t(key, value)) // 为了实现element插件的多语言切换

export default i18n