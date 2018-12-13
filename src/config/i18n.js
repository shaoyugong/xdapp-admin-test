import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import LangEnElement from 'element-ui/lib/locale/lang/en' // element-ui lang
import LangCnElement from 'element-ui/lib/locale/lang/zh-CN' // element-ui lang
import LangTWElement from 'element-ui/lib/locale/lang/zh-TW' // element-ui lang
import LangEnLocal from '../lang/en'
import LangCnLocal from '../lang/zh-CN'
import LangTWLocal from '../lang/zh-TW'

Vue.use(VueI18n)

const messages = {
  en: {
    ...LangEnLocal,
    ...LangEnElement
  },
  cn: {
    ...LangCnLocal,
    ...LangCnElement
  },
  tw: {
    ...LangTWLocal,
    ...LangTWElement
  }
}

const i18n = new VueI18n({
  locale: Cookies.get('lang') || 'cn', // 语言包选项
  messages
})

console.log('当前语言：' + (Cookies.get('lang') || 'cn'))

export default i18n
