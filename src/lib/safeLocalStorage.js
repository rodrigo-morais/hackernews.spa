const localStorageAvailable = () => {
  try {
    if (window.localStorage) return true
  } catch (e) {
    return false
  }

	return false
}

const safeLocalStorage = {
  get: (key) => {
    if (localStorageAvailable()) return localStorage.getItem(key)

		return null
  },
  set: (key, value) => {
    try {
      if (localStorageAvailable()) {
        return localStorage.setItem(key, value)
      }
    } catch (e) { console.log(`Error local storage: ${e}`) }

		return null
  },
}

export default safeLocalStorage
