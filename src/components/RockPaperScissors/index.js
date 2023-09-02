import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import Images from '../Images'
import {
  MainContainer,
  ResponsiveContainer,
  ScoreCardContainer,
  ScoreCardTitles,
  ScoreCardTitlesContainer,
  ScoreCard,
  ScoreText,
  Score,
  ImagesList,
  RulesBtn,
  Modal,
  RulesImage,
  CloseBtn,
  ResultContainer,
  ResultImage,
  ResultImageContainer,
  ChoiceMsg,
  PlayAgainBtn,
  ResultMessage,
} from './styledComponents'

const resultsConstants = {
  paper: 'PAPER',
  scissors: 'SCISSORS',
  rock: 'ROCK',
}

class RockPaperScissors extends Component {
  state = {
    score: 0,
    isGameOver: false,
    playerImage: '',
    opponentImage: '',
    resultText: '',
  }

  renderScoreCard = () => {
    const {score} = this.state

    return (
      <ScoreCardContainer>
        <ScoreCardTitlesContainer>
          <ScoreCardTitles> Rock Paper Scissors</ScoreCardTitles>
        </ScoreCardTitlesContainer>

        <ScoreCard>
          <ScoreText> Score </ScoreText>
          <Score> {score} </Score>
        </ScoreCard>
      </ScoreCardContainer>
    )
  }

  onClickImageItem = details => {
    const {choicesList} = this.props
    const randomImageIndex = Math.floor(Math.random() * 3)

    const randomImage = choicesList[randomImageIndex]

    const result = randomImage.id === details.id

    let resultMsg
    if (result === true) {
      resultMsg = 'IT IS DRAW'
    } else if (details.id === resultsConstants.paper) {
      if (randomImage.id === resultsConstants.rock) {
        resultMsg = 'YOU WON'
      } else {
        resultMsg = 'YOU LOSE'
      }
    } else if (details.id === resultsConstants.scissors) {
      if (randomImage.id === resultsConstants.rock) {
        resultMsg = 'YOU LOSE'
      } else {
        resultMsg = 'YOU WON'
      }
    } else if (details.id === resultsConstants.rock) {
      if (randomImage.id === resultsConstants.paper) {
        resultMsg = 'YOU LOSE'
      } else {
        resultMsg = 'YOU WON'
      }
    } else if (details.id === resultsConstants.scissors) {
      if (randomImage.id === resultsConstants.paper) {
        resultMsg = 'YOU WON'
      } else {
        resultMsg = 'YOU LOSE'
      }
    } else if (details.id === resultsConstants.rock) {
      if (randomImage.id === resultsConstants.scissors) {
        resultMsg = 'YOU WON'
      } else {
        resultMsg = 'YOU LOSE'
      }
    } else if (details.id === resultsConstants.paper) {
      if (randomImage.id === resultsConstants.scissors) {
        resultMsg = 'YOU LOSE'
      } else {
        resultMsg = 'YOU WON'
      }
    }

    if (resultMsg === 'YOU WON') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (resultMsg === 'YOU LOSE') {
      this.setState(prevState => ({score: prevState.score - 1}))
    }

    console.log(resultMsg)

    this.setState({
      playerImage: details.imageUrl,
      opponentImage: randomImage.imageUrl,
      isGameOver: true,
      resultText: resultMsg,
    })
  }

  renderImages = () => {
    const {choicesList} = this.props

    return (
      <ImagesList>
        {choicesList.map(item => (
          <Images
            details={item}
            key={item.id}
            onClickImageItem={this.onClickImageItem}
          />
        ))}
      </ImagesList>
    )
  }

  renderModal = () => (
    <Popup modal trigger={<RulesBtn type="button"> Rules </RulesBtn>}>
      {close => (
        <Modal>
          <CloseBtn
            type="button"
            className="trigger-button"
            onClick={() => close()}
          >
            <RiCloseLine />
          </CloseBtn>
          <RulesImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </Modal>
      )}
    </Popup>
  )

  playAgainBtn = () => {
    this.setState({
      isGameOver: false,
      playerImage: '',
      opponentImage: '',
      resultText: '',
    })
  }

  renderResults = () => {
    const {opponentImage, playerImage, resultText} = this.state

    return (
      <>
        <ResultContainer>
          <ResultImageContainer>
            <ChoiceMsg> YOU </ChoiceMsg>
            <ResultImage src={playerImage} alt="your choice" />
          </ResultImageContainer>
          <ResultImageContainer>
            <ChoiceMsg> OPPONENT </ChoiceMsg>
            <ResultImage alt="opponent choice" src={opponentImage} />
          </ResultImageContainer>
        </ResultContainer>
        <ResultMessage> {resultText} </ResultMessage>
        <PlayAgainBtn onClick={this.playAgainBtn}> PLAY AGAIN </PlayAgainBtn>
      </>
    )
  }

  render() {
    const {isGameOver} = this.state
    return (
      <MainContainer>
        <ResponsiveContainer>
          {this.renderScoreCard()}
          {isGameOver ? this.renderResults() : this.renderImages()}
          {this.renderModal()}
        </ResponsiveContainer>
      </MainContainer>
    )
  }
}

export default RockPaperScissors
