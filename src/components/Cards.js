import Card from 'react-bootstrap/Card';

function Cards(props) {
  return (
    <Card style={{backgroundColor:"",textAlign:"center", boxSizing:"border-box", border: "1px solid rgba(134,134,134,1)"}}>
      <Card>
      <Card.Img style={{ width: '40%', marginLeft:"30%", boxSizing:"border-box", paddingTop:"10px",paddingBottom: "-120px"}} variant="top" src={props.image} />
      </Card>
      <Card.Body>
        <Card.Title style={{color:"black", fontSize:"90%", fontWeight:"600"}}>{props.alt}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Cards;