import React from 'react';
import {Text} from 'react-native';
import {Container} from '../../atoms/Container';

export const Home: React.FC = React.memo(({}) => {
  return (
    <Container>
      <Text>Home</Text>
    </Container>
  );
});
