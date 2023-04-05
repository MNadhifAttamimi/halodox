import Button from 'react-bootstrap/Button';

function Menu() {
  return (
    <div style={{marginLeft:"15px", marginTop: "100px", marginBottom: "-30px"}}>
      <Button style={{fontSize:"12px", color:"black"}} variant="outline-secondary">Terbaru</Button>{' '}
      <Button style={{fontSize:"12px",color:"black"}} variant="outline-secondary">Flu Babi</Button>{' '}
      <Button style={{fontSize:"12px", color:"black"}} variant="outline-secondary">Populer</Button>{' '}
      <Button style={{fontSize:"12px", color:"black"}} variant="outline-secondary">Kanker</Button>{' '}
    </div>
  );
}

export default Menu;