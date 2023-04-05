import Card from 'react-bootstrap/Card';

const Penawaran = (props) => {
    return (
        <Card style={{marginLeft: "20px"}}>
          <Card.Img style={{width: "100%", height:"100%"}} variant="top" src={props.image} />
        </Card>
      );
}

export default Penawaran