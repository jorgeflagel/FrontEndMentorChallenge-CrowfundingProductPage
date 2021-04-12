import styled from 'styled-components';
import devices from '../shared/breakpoints';


const StatisticsContainer = styled.section`
  display: flex;
  gap: 32px;
  background-color: #FFFFFF;
  flex-direction: column;
  padding: 32px 24px 40px 24px;
  @media ${devices.pc} {
    padding: 48px;
    gap: 37px;
  }
`;

const Statistics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  @media ${devices.pc} {
    flex-direction: row;
    & > p {
      width: 33%;
      font-weight: 400;
      font-size: 15px;
      line-height: 18px;
      color: rgba(122,122,122,1);
      border-top: none;
      border-right: 1px solid rgba(0,0,0,0.15);
      &:last-child {
        border-right: none;
      }
    }
  }
`;

const Bold = styled.span`
  display: block;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: black;
  padding-bottom: 8px;
`;

const Bar = styled.div`
  height: 12px;
  width: 100%;
  background-color: rgba(47,47,47,0.05);
  border-radius: 33.5px;
  &::after {
    display: block;
    content: " ";
    height: 12px;
    border-radius: 33.5px;
    width: ${(props) => props.porcentage};
    background-color: rgba(60,179,171,1);
  }
`;

function StatisticCard({total, backers}) {
    return(
        <StatisticsContainer>
          <Statistics>
            <p><Bold>${total}</Bold> of $100,000</p>
            <p><Bold>{backers}</Bold> total backers</p>
            <p><Bold>56 days</Bold> left</p>
          </Statistics>
          <Bar porcentage={String(Math.min(total / 100000 * 100, 100)) + "%"}/>
        </StatisticsContainer>
    );
}

export default StatisticCard;