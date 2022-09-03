import {Card, Button} from 'react-bootstrap';
import BG from '../../assets//images/bg.png';
import Title from '../../assets/images/jdlwitcher.png';
// import degra from '../images/degradasi.png'


function Background() {
    return (
        <div className="bg-dark text-white">
            <Card.Img src={BG} alt="" />
            <div className="container-fluid">
                <Card.ImgOverlay className="ms-5" style={{ marginTop: '17%',width:"100vh", height:"100%", padding:"0px" }}>
                    <Card.Title className="w-50"><img className="mb-4" src={Title} alt="" /></Card.Title>
                    <Card.Text className="fs-5 fw-semibold">
                        <p>Geralt of Rivia, a solitary monster hunter, struggles to find his place in</p>
                        <p>a world where people often prove more wicked than beast</p>
                    </Card.Text>
                    <Card.Text className="fs-5 fw-semibold">2019<Button className='bg-none outline-sm-light text-light ms-3 px-3 fs-5' variant='none'>TV Series</Button></Card.Text>
                    <Button className='bg-danger text-light fw-semibold ms-1 px-5 fs-5' variant='danger'>Watch Now!</Button>
                </Card.ImgOverlay>
            </div>
        </div>
    );
}

export default Background;