import { useEffect, useRef, useState } from 'react'

export const useAnimationObserve = () => {
  const refSec = useRef(null)
  const [showSec, setShowSec] = useState(false)
  useEffect(function () {
    Promise.resolve( // validate if browser support IntersectionObserver
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer') // you must install intersection-observer package
    ).then(() => {
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShowSec(true)
          observer.disconnect()
        }
      })
      observer.observe(refSec.current)
    })
  }, [refSec])
  return [refSec, showSec]
}
