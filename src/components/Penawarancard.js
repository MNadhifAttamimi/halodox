import Card from "react-bootstrap/Card";

const Penawarancardtu = (props) => {
    return (
        <Card style={{width:"", height: "", border:"none"}}>
            <Card.Img variant="top" src={props.image} style={{borderRadius: "8px"}}/>
        </Card>
    )
}

export default Penawarancardtu