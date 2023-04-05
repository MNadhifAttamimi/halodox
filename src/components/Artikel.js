import Card from 'react-bootstrap/Card';

const Artikel = (props) => {
  return (
    <Card style={{width:"280x"}}>
      <Card.Img variant="top" style={{width:"100%", height: "150px"}} src={props.image} />
      <Card.Body>
        <Card.Title style={{fontSize: "18px"}}>Tips Menjaga Berat Badan di Hari Raya </Card.Title>
        <Card.Text className="d-flex">
          <div
            style={{
              background: "#87cefa",
              fontSize: "12px",
              color: "#778899",
              borderRadius: "3px",
              marginRight: "8px",
              padding: "3px",
            }}>
            <small>ddddaap</small>
          </div>
          <div
            style={{
              background: "#87cefa",
              fontSize: "12px",
              color: "#778899",
              borderRadius: "3px",
              marginRight: "8px",
              padding: "3px",
            }}>
            <small>ddddaap</small>
          </div>
        </Card.Text>
      </Card.Body>
      <Card style={{border:"none", marginLeft:"15px", fontSize:"14px", marginBottom:"7px"}}>
          <small className="text-muted">“Hari raya Idulfitri identik dengan hidangan khas yang lezat dan berlemak. Namun, jika ... </small>
        </Card>
    </Card>
  );
};

export default Artikel;
