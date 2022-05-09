import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

const Home = () => {
    return ( 
        <motion.div 
            initial={{scaleY:0}}
            animate={{scaleY:1}}
            exit={{scaleY:0}}
            transition={{duration:0.5}}
        >
            <div className='home'>
                <div>
                    <Link to="/todo"><h1>Go to Todo App</h1></Link>
                    <Link to="/about"><p>go to About page</p></Link>
                </div>
            </div>
        </motion.div>
    );
}

export default Home;