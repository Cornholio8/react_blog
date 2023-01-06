//import styles from './NotFound.module.scss';
//import PageTitle from '../PageTitle/PageTitle';
import Gojira from './Gojira.jpg'

const NotFound = () => {
    return (
        <div>
            <h1>404 NOT FOUND</h1>
            <img src={Gojira} alt='not found'></img>
        </div>
    )
};

export default NotFound