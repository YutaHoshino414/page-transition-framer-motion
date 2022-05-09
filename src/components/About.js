import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';


const About = () => {
    return ( 
        <motion.div 
            initial={{scaleY:0}}
            animate={{scaleY:1}}
            exit={{scaleY:0}}
            transition={{duration:0.5}}
        >
        <div className='about'>
            <div>
                <h1>About</h1>
                <Link to="/">
                    <p>go to home page</p>
                </Link>
            </div>
        </div>
        </motion.div>
    );
}
 
export default About;