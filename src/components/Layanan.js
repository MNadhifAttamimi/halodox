import Card from "react-bootstrap/Card";

const Layanan = (props) => {
  return (
    <Card style={{border: "none", textAlign:"center",margin:"", display: "flex",boxShadow:"none" }}>
      <Card.Body>
        <Card.Img style={{marginLeft:"",width:"3rem", maxWidth: "100%"}} src={props.image} />
        <Card.Text style={{width:"200%", marginLeft:"-50%"}}>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Layanan;