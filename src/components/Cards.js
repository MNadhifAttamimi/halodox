import Card from 'react-bootstrap/Card';

function Cards(props) {
  return (
    <Card style={{textAlign:"center", boxSizing:"border-box"}}>
      <Card.Img style={{ width: '75px', marginLeft:"60px", boxSizing:"border-box", paddingTop:"10px"}} variant="top" src={props.image} />
      <Card.Body>
        <Card.Title style={{color:"black", fontSize:"15px", fontWeight:"600"}}>{props.alt}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Cards;