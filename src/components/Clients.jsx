import {clients} from '../constants';
import styles from '../styles';


const Clients = () => (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} 
          className={`flex-1 ${styles.flexCenter} 
          sm:min-w-[192px] min-w-[120px] m-2
          hover:opacity-100 opacity-70 transition duration-300`}>
            <img src={client.logo} alt='client'
            className='sm:w-[192px] w-[100px]'/>
          </div>
        ))}
      </div>
    </section>
  )

export default Clients