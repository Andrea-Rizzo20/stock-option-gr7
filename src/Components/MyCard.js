import { Card } from "react-bootstrap"
import {ReactComponent as CheckCircle} from '../assets/check-circle.svg'


const CardHome = ({contents, className}) =>{
    return(
        <Card className={className} >
        <Card.Img variant="top" src={contents.img} />
        <Card.Body>
        <Card.Title><CheckCircle/>{contents.title}</Card.Title>
        <Card.Text>
            {contents.content}
        </Card.Text>
  </Card.Body>
</Card>
    )
}

export default CardHome