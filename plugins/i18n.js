import Vue from 'vue'
// eslint-disable-next-line import/default
import VueI18n from 'vue-i18n'
import {
  LOCATE_KEY,
  SET_LANG_MUTATION,
} from '@/store/language/language.constant'

Vue.use(VueI18n)

const locale = process.client ? localStorage.getItem(LOCATE_KEY) : ''

const i18n = new VueI18n({
  locale,
  messages: {},
})

export default async ({ app, store }, inject) => {
  if (process.client) {
    if (locale) store.commit(SET_LANG_MUTATION, locale)
    await loadMessages(store.getters['language/getLocale'])
  }

  app.i18n = i18n
  inject('loadMessages', loadMessages)
}

/**
 * @param {String} locale
 */
export async function loadMessages(locale) {
  if (Object.keys(i18n.getLocaleMessage(locale)).length === 0) {
    const messages = await import(
      /* webpackChunkName: "lang-[request]" */ `~/lang/${locale}`
    ).then((m) => m.default || m)
    i18n.setLocaleMessage(locale, messages)
  }

  if (i18n.locale !== locale) {
    i18n.locale = locale
  }
}
