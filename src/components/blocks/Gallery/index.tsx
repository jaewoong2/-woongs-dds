import styled from '@emotion/styled'
import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { useDebouncedCallback } from '../../../hooks/useDebounce'
import { Image } from '../../atoms'

type GalleryProps = {
  children?: React.ReactNode
}

const ImageContainer = styled.div`
  --gap: 10px;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: var(--gap);
  grid-auto-rows: 10px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 400px) {
    display: block;
    width: 100%;
  }
`

const ImageItem = styled.div`
  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    --gap: 10px;
    width: 100%;

    box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.2);
    border-radius: 16px;

    @media screen and (max-width: 400px) {
      margin-bottom: var(--gap);
      width: 100%;
      height: auto;
    }

    img {
      width: 100%;
      height: auto;
      /* border-radius: 16px 16px 0 0; */
      border-radius: 16px;
    }

    .caption {
      width: calc(100% - 20px);
      padding: 15px 10px;
    }
  }
`
type InitialValueType = {
  addItemRefs: (entitiy: React.RefObject<HTMLDivElement>) => void
}

const GalleryContext = createContext({} as InitialValueType)

const GalleryImage = ({ src, children }: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isAdded, setIsAdded] = useState(false)
  const { addItemRefs } = useContext(GalleryContext)

  useEffect(() => {
    if (ref) {
      setIsAdded(true)
    }
  }, [ref])

  useEffect(() => {
    if (!isAdded) {
      addItemRefs(ref)
    }
  }, [ref, isAdded])

  return (
    <ImageItem ref={ref} className="masonry-item">
      <figure className="figure">
        <Image className="img" src={src} isLoading={false} />
        <figcaption className={children ? 'caption' : ''}>{children}</figcaption>
      </figure>
    </ImageItem>
  )
}

export const Gallery = ({ children }: GalleryProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [itemRefs, setItemRefs] = useState<React.RefObject<HTMLDivElement>[]>([])

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

  const debouncedFunction = useDebouncedCallback(handleLayout, 5)

  useEffect(() => {
    handleLayout()
  }, [ref.current, itemRefs])

  useEffect(() => {
    window.addEventListener('resize', debouncedFunction)

    return () => removeEventListener('resize', debouncedFunction)
  }, [ref.current, itemRefs])

  return (
    <GalleryContext.Provider value={{ addItemRefs: (entitiy) => setItemRefs((prev) => [...prev, entitiy]) }}>
      <ImageContainer ref={ref}>{children}</ImageContainer>
    </GalleryContext.Provider>
  )
}

Gallery.Image = GalleryImage
