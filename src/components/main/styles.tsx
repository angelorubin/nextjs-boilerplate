import styled from 'styled-components'

export const Container = styled.main`
  background-color: #06092b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #fff;
  padding: 3rem;
  text-align: center;
`
export const Logo = styled.img`
  width: min(45rem, 100%);
  margin-bottom: 2rem;
`

export const DescriptionContainer = styled.div`
  display: flex;
`

export const Description = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
`
export const Illustration = styled.img`
  width: min(20rem, 100%);
  margin-top: 3rem;
`
