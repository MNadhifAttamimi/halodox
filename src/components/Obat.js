import Card from 'react-bootstrap/Card';

function Obat(props) {
  return (
    <Card style={{padding: "10px",width: "100%", border: "1px solid grey"}}>
        <div style={{display:"flex", alignItems:"center"}}>
            <div>
        <Card.Img style={{width:"40px", marginLeft: "20px"}} variant='top' src={props.image}/>
        </div>
        <div>
      <Card.Text style={{margin:"10px"}}>{props.text}</Card.Text>
      </div>
      </div>
    </Card>
  );
}

export default Obat;