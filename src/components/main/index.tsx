import * as S from './styles'

type MainProps = {
  description: string
}

export default function Main({
  description = 'NextJS, Typescript, Storybook and Styled Components'
}: MainProps) {
  return (
    <S.Container>
      <S.Logo src="/img/logo.svg" alt="logo" />
      <S.DescriptionContainer>
        <S.Description>{description}</S.Description>
      </S.DescriptionContainer>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="um desenvolvedor de frente para uma tela"
      />
    </S.Container>
  )
}
