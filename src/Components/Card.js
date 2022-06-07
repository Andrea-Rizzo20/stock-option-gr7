import { Card } from "react-bootstrap"

const CardHome = ({contents, className}) =>{
    return(
        <Card className={className} >
        <Card.Img variant="top" src={contents.img} />
        <Card.Body>
        <Card.Title>{contents.title}</Card.Title>
        <Card.Text>
            {contents.content}
        </Card.Text>
  </Card.Body>
</Card>
    )
}

export default CardHome