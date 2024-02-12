import { useQuery } from '@apollo/client'

import {
  GET_PROGRAM,
  ProgramQueryResult,
  ProgramQueryVariables,
} from 'services/program'

import Card from 'components/Card'
import Carousel from 'components/Carousel'

import Styled from './Home.styles'

const Home = () => {
  const { loading, error, data } = useQuery<
    ProgramQueryResult,
    ProgramQueryVariables
  >(GET_PROGRAM, {
    fetchPolicy: 'cache-first',
    variables: {
      limit: 6,
    },
  })

  if (loading) {
    return (
      <Styled.Main>
        <p>Loading...</p>
      </Styled.Main>
    )
  }

  if (error) {
    return (
      <Styled.Main>
        <p>Error : {error.message}</p>
      </Styled.Main>
    )
  }

  return (
    <Styled.Main>
      <Carousel>
        {data?.program?.map(({ id, name, thumnail }) => (
          <Card
            key={id}
            alt={thumnail.alt}
            picture={thumnail.url}
            title={name}
          />
        ))}
      </Carousel>
    </Styled.Main>
  )
}

export default Home
