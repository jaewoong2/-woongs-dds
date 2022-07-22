import { memo, useState } from 'react'
import { Main } from '.'
import { LightColor } from '../../../styles/theme/constant'
import { HashTag, SearchInput, TextCard } from '../../atoms'

export const MainComponent = memo((args: any) => {
  const [value, setValue] = useState('')

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <Main {...args}>
      <Main.Column style={{ width: '100%', height: '500px', justifyContent: 'center', paddingLeft: '20px' }}>
        <div>
          <strong>
            여러분의 특별한 기념일을 <br /> 달콤하게 장식해줄,
          </strong>
          <p style={{ marginTop: '20px' }}>
            <strong>
              우리는 <b style={{ color: `${LightColor.titleText}` }}>달다</b> 입니다.
            </strong>
          </p>
          <div style={{ marginTop: '20px', width: '80%', borderTop: '1px solid black', paddingTop: '20px' }}>
            <TextCard title="우리 동네 케이크" description="240건" />
          </div>
        </div>
      </Main.Column>
      <Main.Column style={{ width: '100%', justifyContent: 'center', paddingRight: '20px', alignItems: 'flex-end' }}>
        <SearchInput
          value={value}
          onChange={onChangeValue}
          size="lg"
          placeholder="우리 동네 케이크 검색하기"
          maxWidth="400px"
          type="text"
        />
        <div
          style={{
            fontSize: '0.7em',
            fontWeight: 'normal',
            width: '100%',
            display: 'flex',
            maxWidth: '400px',
            color: `${LightColor.searchPlaceholderText}`,
          }}
        >
          <HashTag>선릉</HashTag>
          <HashTag>강남</HashTag>
          <HashTag>홍대입구</HashTag>
        </div>
      </Main.Column>
    </Main>
  )
})

MainComponent.displayName = 'MainComponent'
