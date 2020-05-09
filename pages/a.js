import styled from 'styled-components';
import dynamic from 'next/dynamic';

const Comp = dynamic(import('../components/Comp'));

const Title = styled.h1`
  color: yellow;
  font-size: 40px;
`;

const A = ({ timeDiff }) => {
  return (
    <>
      <Title>
        This is A page, timeDiff is { timeDiff }
        dynamic component:
        <Comp />
      </Title>
    </>
  )
};

A.getIntitialProps = async ctx => {
  const moment = await import('moment');
  const timeDiff = moment.default(Date.now() - 60 * 1000).fromNow();
  return { timeDiff };
}

export default A;