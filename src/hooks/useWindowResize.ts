import { useEffect } from 'react'

export const useWindowResize = <A = unknown>(cb: () => void, ...deps: A[]) => {
  useEffect(() => {
    window.addEventListener('resize', cb)

    return () => removeEventListener('resize', cb)
  }, [deps])
}
