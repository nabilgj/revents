import React from 'react';
import {
  Segment,
  Container,
  Header,
  Image,
  Button,
  Icon,
} from 'semantic-ui-react';

const HomePage = ({ history }) => {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/logo.png"
            style={{ marginBottom: 23 }}
          />
          Re-vents
        </Header>

        <Button size="huge" inverted onClick={() => history.push('/events')}>
          Get Started
          <Icon name="right arrow" inverted />
        </Button>
      </Container>
    </Segment>
  );
};

// into App
export default HomePage;
