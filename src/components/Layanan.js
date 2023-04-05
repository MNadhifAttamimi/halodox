import Card from "react-bootstrap/Card";

const Layanan = (props) => {
  return (
    <Card style={{border: "none", textAlign:"center",margin:"", display: "flex", }}>
      <Card.Body>
        <Card.Img style={{marginLeft:"22px",width:"3rem", maxWidth: "100%"}} src={props.image} />
        <Card.Text style={{width:"90px"}}>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Layanan;