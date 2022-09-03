import {Card, Button} from 'react-bootstrap';
import Title from '../../assets/images/Tjoker.png';
import BGjoker from "../../assets/images/BGjoker.png"
// import degra from '../images/degradasi.png'


function Background() {
    return (
        <div className="bg-dark text-white">
            <Card.Img src={BGjoker} alt="" />
            <div className="container-fluid">
                <Card.ImgOverlay className="ms-5" style={{ marginTop: '17%',width:"100vh", height:"100%", padding:"0px" }}>
                    <Card.Title className="w-50"><img className="mb-4" src={Title} alt="" /></Card.Title>
                    <Card.Text className="fs-5 fw-semibold">
                        In Gotham City, mentally troubled comedian Arthur Fieck is <br></br>disregarded and mistreated by society. 
                        Arthur wears two masks -- the one he paints <br></br> for his day job as a clown, and the guise he projects in a futile attempt to feel like he's <br></br>
                        part of the world around him.
                    </Card.Text>
                    <Card.Text className="fs-5 fw-semibold">2019<Button className='bg-none outline-sm-light text-light ms-3 px-3 fs-5' variant='none'>Movies</Button></Card.Text>
                    <Button className='bg-danger text-light fw-semibold ms-1 px-5 fs-5' variant='danger'>Watch Now!</Button>
                </Card.ImgOverlay>
            </div>
        </div>
    );
}

export default Background;