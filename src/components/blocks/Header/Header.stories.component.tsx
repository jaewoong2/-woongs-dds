import { useState } from 'react'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { LightColor } from '../../../styles/theme/constant'
import { Image, Navigation, SearchInput } from '../../atoms'

export const NavigationContainer = () => {
  return (
    <div
      style={{
        display: 'flex',
        padding: '0 10px',
        width: 'fit-content',
        wordBreak: 'keep-all',
        alignItems: 'center',
        gap: '10px',
        justifyContent: 'flex-end',
      }}
    >
      <Navigation>
        <Navigation.Anchor href="/">메뉴</Navigation.Anchor>
      </Navigation>
    </div>
  )
}

export const Logo = () => {
  return (
    <div
      style={{
        width: '120px',
      }}
    >
      <Image
        style={{ width: '100%', height: 'auto' }}
        isLoading={false}
        src="https://user-images.githubusercontent.com/63512217/180431797-88c715f3-5787-49f6-916e-a5bf7f07f45d.png"
      />
    </div>
  )
}

export const SearchInputContainer = () => {
  const isMobile = useMediaQuery('(max-width: 700px)')
  const [isClicked, setIsClicked] = useState(false)

  return isMobile && isClicked ? (
    <div
      style={{
        position: 'absolute',
        width: `100%`,
        height: `100%`,
        top: `10px`,
        zIndex: '999',
        borderColor: 'white',
      }}
      role="button"
      tabIndex={0}
      onKeyDown={() => {}}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsClicked(false)
        }
      }}
    >
      <SearchInput
        borderRadius="8px"
        maxWidth="calc(100% - 40px)"
        type="text"
        placeholder="강남구 선릉역"
        animated={false}
        boxShadow={false}
        backgroundColor={LightColor.serachSmallBackGround}
      />
    </div>
  ) : (
    <SearchInput
      onClick={() => setIsClicked(true)}
      size="lg"
      borderRadius="8px"
      placeholder="강남구 선릉역"
      maxWidth="450px"
      animated={false}
      type="text"
      boxShadow={false}
      backgroundColor={LightColor.serachSmallBackGround}
    />
  )
}
