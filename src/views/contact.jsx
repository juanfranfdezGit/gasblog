import './contact.css'
import Youtube from '../assets/youtube.png'
import Facebook from '../assets/facebook.png'
import Insta from '../assets/insta.webp'

function Contact() {
    return (
        <div className='contactContainer flex'>
            <div className='contactForm flex' id='Contact'>
                <div className='info flex'>
                    <div className='ubicacion flex'>
                        <h2>Ubicación</h2>
                        <p>41006 - Sevilla, España</p>
                    </div>

                    <div className='flex socials'>
                        <div className='flex'>
                            <img src={Facebook} alt="facebook"></img>
                            <img src={Insta} alt='instagram'></img>
                            <img src={Youtube} alt='youtube'></img>
                        </div>
                        <p>© 2024 Proyecto Juan Francisco Romero Fdez</p>
                    </div>
                </div>

                <div className='form flex'> 
                    <h2>Contáctanos</h2>
                    <form className='flex'>
                        <div className='flex'>
                            <input type='text' required></input>
                            <label>Nombre</label>
                        </div>

                        <div className='flex'>
                            <input type='mail' required></input>
                            <label>E-mail</label>
                        </div>

                        <div className='flex'>
                            <input type='textarea' required></input>
                            <label>Mensaje</label>
                        </div>

                        <div className='flex'>
                            <button>Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;