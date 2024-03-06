import { useEffect, useState } from 'react'

export const useDebounce = <TType>(
  value: TType,
  delay = 300,
): TType => {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const handler = setTimeout(
      () => setDebounced(value),
      delay,
    )
    return () => clearTimeout(handler)
  }, [value, delay])

  return debounced
}
