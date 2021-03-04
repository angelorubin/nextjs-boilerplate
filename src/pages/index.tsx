import Main from 'components/main'

type HomeProps = {
  description: string
}

export default function Home({ description }: HomeProps) {
  return <Main description={description} />
}
