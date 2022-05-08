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
                    <Link to="/about"><p>go to About page</p></Link>
                    <Link to="/todo"><p>go to TODO APP</p></Link>
                </div>
            </div>
        </motion.div>
    );
}

export default Home;