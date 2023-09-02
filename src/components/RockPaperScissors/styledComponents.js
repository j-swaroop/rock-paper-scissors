import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  background-size: cover;
  padding-top: 20px;
  padding-bottom: 20px;
`

export const ResponsiveContainer = styled.div`
  width: 90%;
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding-top: 20px;
  padding-bottom: 20px;
`
export const ScoreCardContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-color: #ffffff;
  border-width: 2px;
  border-style: solid;
  border-radius: 12px;
  width: 90%;
`
export const ScoreCardTitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ScoreCardTitles = styled.h1`
  font-family: 'Bree Serif';
  font-size: 25px;
  color: #ffffff;
  margin-bottom: 1px;
  margin-top: 1px;
  font-weight: 400;
  width: 100px;
  @media (max-width: 576px){
    font-size: 18px;
    width: 80px;
  }
`
export const ScoreCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;
  width: 130px;
  padding: 10px;
  @media (max-width: 500px) {
    height: 100px;
    width: 100px;
  }
`

export const ScoreText = styled.p`
  font-family: 'Bree Serif';
  font-size: 22px;
  color: #223a5f;
  margin-bottom: 2px;
`
export const Score = styled.p`
  font-family: 'Roboto';
  font-size: 35px;
  font-weight: 600;
  color: #223a5f;
  margin-top: 1px;
`
export const ImagesList = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-top: 25px;
  width: 300px;
  @media (min-width: 576px) {
    width: 500px;
  }
`
export const ImageItem = styled.li`
  margin: 8px;
`

export const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`

export const Image = styled.img`
  width: 100px;
  @media (min-width: 568px) {
    width: 150px;
  }
`
export const RulesBtn = styled.button`
  color: #223a5f;
  font-family: 'Bree Serif';
  border: 0;
  border-radius: 8px;
  height: 40px;
  width: 90px;
  font-size: 16px;
  align-self: flex-end;
`

export const Modal = styled.div`
  background-color: #ffffff;
  padding: 10px;
  width: 50vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 576px) {
    width: 90vw;
    height: 50vh;
  }
`
export const RulesImage = styled.img`
  width: 450px;
  height: 350px;
  @media (max-width: 576px) {
    width: 280px;
    height: 240px;
  }
`
export const CloseBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  align-self: flex-end;
  font-size: 20px;
  margin-right: 20px;
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-item:center;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 20px;
`

export const ResultImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
`

export const ResultImage = styled.img`
  margin: 10px;
  margin-top:5px;
  margin-bottom: 5px;
  width: 100px;
  @media (min-width: 568px) {
    width: 150px;
    margin: 25px;
    margin-top:5px;
    margin-bottom: 5px;
  }
`

export const ChoiceMsg = styled.p`
  color: #ffffff;
  font-family: "Roboto"
  font-size: 13px;
  margin: 10px;
  margin-bottom:5px;
  font-weight: 600;
  @media (min-width: 576px){
    margin-left: 28px;
    margin-right: 28px;
    margin-bottom:5px;
  }
`
export const ResultMessage = styled.p`
  color: #ffffff;
  font-family: "Roboto"
  font-size: 25px;
  font-weight: 700;
`
export const PlayAgainBtn = styled.button`
  color: #223a5f;
  font-family: 'Bree Serif';
  border: 0;
  border-radius: 8px;
  height: 40px;
  width: 150px;
  font-size: 16px;
  margin-bottom: 30px;
  cursor:pointer;
`