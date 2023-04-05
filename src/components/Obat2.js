import Card from 'react-bootstrap/Card';

function Obat2(props) {
  return (
    <Card style={{width: "100%", border: "1px solid grey"}}>
        <div style={{display:"flex", alignItems:"center", justifyContent: "center"}}>
            <div>
        <Card.Img style={{width:"40px", marginLeft: "-40px"}} variant='top' src={props.image}/>
        </div>
        <div>
      <Card.Body><a style={{color:"red", textDecoration:"none"}} href='https://www.halodoc.com/obat-dan-vitamin'>LIHAT SEMUA</a></Card.Body>
      </div>
      </div>
    </Card>
  );
}

export default Obat2;