import {motion, AnimatePresence} from 'framer-motion'
import { useSnapshot } from 'valtio'
import state from '../store'
import { CustomButton } from '../components'
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion'

const Home = () => {

    const snap = useSnapshot(state);

  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.div className='home' {...slideAnimation('left')}>
                <motion.header {...slideAnimation('down')}>
                    <img src="./logo.png" class="w-15 h-10 rounded-3xl object-contain" alt="logo" />
                </motion.header>
                <motion.div className='home-content' {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h1 className='head-text'>
                            Design <br className='x1:block hidden'/>.
                        </h1>
                    </motion.div>
                    <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                        <p className='max-w-md font-normal text-gray-600 text-base'>
                        Create your unique and exclusive shirt with our brand-new 3D customization
                        tool. <strong> Unleash your imagination</strong> {" "} and define your own style.
                        Use AI to design your Tshirt with the power of DallE and Reach the next level of
                        Desiging.
                        </p>
                    </motion.div>
                    <motion.div {...headContentAnimation}>
                    <CustomButton
                            type="filled"
                            title="customize It"
                            handleClick={()=> state.intro = false}
                            customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
  )
}

export default Home