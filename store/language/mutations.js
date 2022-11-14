import { LOCATE_KEY } from './language.constant'

export default {
  setLang(state, locale) {
    if (state.locales.includes(locale)) {
      // this.$cookies.set(LOCATE_KEY, locale)
      window.localStorage.setItem(LOCATE_KEY, locale)
      // this.$i18nInjectedFunction(locale)
      state.locale = locale
    }
  },
  removeLang() {
    if (process.client) {
      window.localStorage.removeItem(LOCATE_KEY)
    }
  },
}
