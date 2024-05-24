import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden' /> in few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        of ksdnfui ksahfue ksafni vuhf dlkshfur aklnf akshfuir sdu kasu ufd usvdi dskhfr uhdfg dkuvhds auifhr auhf aiuhf isud dud uefs iudf iubfd 
      </p>

      <Button styles='mt-10'/>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt='card' className='w-[100%] h-[100%]' />
    </div>
  </section>
)

export default CardDeal