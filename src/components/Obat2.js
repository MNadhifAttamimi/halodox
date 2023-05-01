import Card from 'react-bootstrap/Card';

function Obat2(props) {
  return (
    <Card style={{width: "100%", border: "1px solid grey"}}>
      <Card.Text style={{textAlign:"center",margin:"20px"}}><a style={{color:"red", textDecoration:"none"}} href='https://www.halodoc.com/obat-dan-vitamin'>LIHAT SEMUA</a></Card.Text>
    </Card>
  );
}

export default Obat2;