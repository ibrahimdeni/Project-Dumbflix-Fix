import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BodyPremium() {
    return (
        <div style={{ backgroundColor: "black", marginTop:"9vh" , width: "100%", height: "100vh" }}>
            <div className="d-flex justify-content-center">
            <Card className="text-center" style={{ backgroundColor: "black"}}>
                <Card.Body className="text-light" style={{ marginTop:"10vh"}}>
                    <Card.Title><h1 className="fw-bold mb-5">Premium</h1></Card.Title>
                    <Card.Text style={{lineHeight:"40px"}}>
                        Bayar sekarang dan nikmati streaming film-film yang kekinian dari <span className="text-danger fw-bold">DUMBFLIX</span><br />
                        DUMBFLIX : <span className="text-danger fw-bold">0981312323</span>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </div>
        </div>
    );
}

export default BodyPremium;