import {Image, Button, ImageItem} from './styledComponents'

const Images = props => {
  const {details, onClickImageItem} = props

  const imageClicked = () => {
    onClickImageItem(details)
  }

  return (
    <ImageItem>
      <Button data-testid={details.dataId} onClick={imageClicked}>
        <Image alt={details.id} src={details.imageUrl} />
      </Button>
    </ImageItem>
  )
}

export default Images
