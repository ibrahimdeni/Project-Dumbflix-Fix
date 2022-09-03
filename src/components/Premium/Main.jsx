import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import "../../assets/css/premium.modules.css"

function BodyPremium() {
    return (
        <div style={{ backgroundColor: "black", marginTop: "9vh", width: "100%", height: "100vh" }}>
            <div className="d-flex justify-content-center">
                <Card className="text-center" style={{ backgroundColor: "black" }}>
                    <Card.Body className="text-light" style={{ marginTop: "10vh" }}>
                        <Card.Title><h1 className="fw-bold mb-5">Premium</h1></Card.Title>
                        <Card.Text style={{ lineHeight: "25px" }}>
                            Bayar sekarang dan nikmati streaming film-film yang kekinian dari <span className="text-danger fw-bold">DUMBFLIX</span><br />
                            DUMBFLIX : <span className="text-danger fw-bold">0981312323</span>
                        </Card.Text>
                        <div>
                            <Form className="w-75 mx-auto">
                                <Form.Group className="mb-5" controlId="formBasicEmail">
                                    <Form.Control className="bg-dark mb-3 p__holdera py-3" type="email" placeholder="Enter email"/>
                                    <Form.Control className="bg-light p__holderb py-3"  type="email" placeholder="Attache proof of tranfer"/>
                                </Form.Group>
                                <Button style={{backgroundColor:"red"}} className="w-100 fw-bold " variant="danger">Kirim</Button>
                            </Form>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default BodyPremium;