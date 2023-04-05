import Card from "react-bootstrap/Card";

const Asuransi = (props) => {
  return (
    <Card className="px-4" style={{width: "390px", alignItems:"center", flexDirection: "row", display: "flex" }}>
        <Card.Img variant="left" style={{width: "35px"}} src={props.image} />
        <Card.Body>
        <Card.Title style={{fontSize: "18px", fontWeight: "600"}}>Sambungkan Asuransimu </Card.Title>
        <Card.Text style={{fontSize: "13px", color: "rgba(134,134,134,1)"}}>Dapatkan manfaat asuransi secara langsung untuk layanan Halodoc. </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Asuransi;
