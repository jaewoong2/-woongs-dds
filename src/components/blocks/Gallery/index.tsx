import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { useDebouncedCallback } from '../../../hooks/useDebounce'
import { useWindowResize } from '../../../hooks/useWindowResize'
import { Image } from '../../atoms'
import { AnchorContainer, Figure, ImageContainer } from './Gallery.styles'

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
      const columnGap = parseInt(masonryContainerStyle.getPropertyValue('column-gap'))
      const autoRows = parseInt(masonryContainerStyle.getPropertyValue('grid-auto-rows'))
      const captionHeight = itemRef.current.querySelector('.caption')?.scrollHeight ?? 0
      const imageHeight = itemRef.current.querySelector('.figure')?.scrollHeight ?? 0
      const spanValue =
        captionHeight > 0
          ? Math.ceil((imageHeight + captionHeight) / autoRows + columnGap / autoRows) - 5
          : Math.ceil((imageHeight + captionHeight) / autoRows + columnGap / autoRows)

      itemRef.current.style.gridRowEnd = `span ${spanValue}`
    })
  }, [ref.current, itemRefs])

  // Trade-off between UX and Performance
  const debouncedFunction = useDebouncedCallback(handleLayout, 200)
  useWindowResize(debouncedFunction, [ref.current, itemRefs])

  useEffect(() => {
    handleLayout()
  }, [ref.current, itemRefs])

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
