import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { useDebouncedCallback } from '../../../hooks/useDebounce'
import { useWindowResize } from '../../../hooks/useWindowResize'
import { Image } from '../../atoms'
import { AnchorContainer, Figure, ImageContainer } from './Gallery.styles'
import { getGridRowEnd } from './utils'

type GalleryProps = {
  children?: React.ReactNode
}

type InitialValueType = {
  addItemRefs: (entitiy: React.RefObject<HTMLAnchorElement>) => void
}

const GalleryContext = createContext({} as InitialValueType)

export const Gallery = ({ children }: GalleryProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [itemRefs, setItemRefs] = useState<React.RefObject<HTMLAnchorElement>[]>([])
  const handleLayout = useCallback(() => {
    itemRefs.forEach((itemRef) => {
      if (!itemRef.current || !ref.current) {
        return
      }
      const masonryContainerStyle = getComputedStyle(ref.current)
      itemRef.current.style.gridRowEnd = getGridRowEnd(masonryContainerStyle, itemRef.current)
    })
  }, [ref, itemRefs])

  // Trade-off between UX and Performance
  const debouncedFunction = useDebouncedCallback(handleLayout, 0)
  useWindowResize(debouncedFunction, [ref.current, itemRefs, debouncedFunction])

  useEffect(() => {
    debouncedFunction()
  }, [ref, itemRefs, debouncedFunction])

  return (
    <GalleryContext.Provider value={{ addItemRefs: (entitiy) => setItemRefs((prev) => [...prev, entitiy]) }}>
      <ImageContainer ref={ref}>{children}</ImageContainer>
    </GalleryContext.Provider>
  )
}

const GalleryImage = ({ src, children, href }: React.ImgHTMLAttributes<HTMLImageElement> & { href?: string }) => {
  const ref = useRef<HTMLAnchorElement>(null)
  const { addItemRefs } = useContext(GalleryContext)

  useEffect(() => {
    addItemRefs(ref)
  }, [ref])

  return (
    <AnchorContainer href={href} ref={ref} className="masonry-item">
      <Figure className="figure">
        <Image className={children ? 'img' : 'img no-caption-img'} src={src} isLoading={false} />
        <figcaption className={children ? 'caption' : ''}>{children}</figcaption>
      </Figure>
    </AnchorContainer>
  )
}

Gallery.Image = GalleryImage
