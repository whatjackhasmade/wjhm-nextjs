import styled from 'styled-components';
import { device } from 'particles';

const GithubComponent = styled.section`
  margin: 96px 0;

  @media ${device?.xs} {
    margin: 96px 0;
  }

  @media ${device?.md} {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .github__calendar {
    display: block;
    margin: 32px auto;
    max-width: 700px;
    width: 100%;
  }

  .intro {
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export default GithubComponent;
