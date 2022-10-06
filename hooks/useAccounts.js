const { useEffect, useState } = require('react')

import { KEYS } from 'public/const/keysLocalStorage'
import { getLocal } from 'utils/LocalStorage'

export function useAccounts() {
  const [accounts, setAccounts] = useState([])
  useEffect(() => {
    const accounts = getLocal(KEYS.accounts)
    if (Array.isArray(accounts)) {
      setAccounts(accounts)
    }
  }, [])

  const methods = accounts.map(({ name = 'not found', balance = 0 }) => {
    return name
  })

  const total = accounts.reduce(
    (previousValue, currentValue) =>
      previousValue.balance || 0 + currentValue.balance || 0,
    0
  )

  return {
    accounts,
    methods,
    total,
  }
}
