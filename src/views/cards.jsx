import './cards.css'
import Salamanca from '../assets/salamanca.webp'
import Trail from '../assets/trail.jpg'
import Vulcan from '../assets/vulcan.webp'
import Honda from '../assets/honda.jpg'
import CBR from '../assets/cbr.webp'
import Ducati from '../assets/ducati.webp'

function Cards() {

    return (

        <div className='blog flex'>
            <h2 className='title'>Nuestro Blog</h2>
            <span className='divider'></span>
        
            <div className='cardsContainer' id='Blog'>
                <div className='card'>
                    <div className='cardImg'>
                        <img src={Salamanca} alt="Salamanca"></img>
                    </div>
                    <div className='cardInfo flex'>
                        <h2>Las motos más espectaculares toman la plaza mayor de Salamanca</h2>
                        <p>
                            El pasado fin de semana, la Plaza Mayor de Salamanca vivió un espectacular 
                            encuentro motero que reunió a cientos de motociclistas de toda España y de 
                            otros países. El evento, que atrajo a amantes de las dos ruedas de todas las edades, 
                            llenó las históricas calles del centro de la ciudad con el rugir de los motores,
                            creando un ambiente festivo y cargado de adrenalina. Los participantes aprovecharon
                            la oportunidad para mostrar sus motos.
                        </p>
                    </div> 
                    <div className='actions flex'>
                            <p>13 comentarios</p><p>/</p><p>09-09-2024</p>
                    </div>
                </div>

                <div className='card'>
                    <div className='cardImg'>
                        <img src={Trail} alt="Trail"></img>
                    </div>
                    <div className='cardInfo flex'>
                        <h2>Las mejores rutas trail de España</h2>
                        <p>
                        España cuenta con algunas de las mejores rutas trail para motocicletas, ofreciendo paisajes impresionantes y terrenos 
                        desafiantes que van desde montañas escarpadas hasta caminos rurales llenos de historia. Entre las más destacadas se encuentran
                         la Transpirenaica, que recorre los Pirineos de este a oeste atravesando valles y picos imponentes, y la Ruta de la Plata, que 
                         sigue el antiguo trazado romano desde el norte hasta el sur del país. Otra ruta imperdible es la Vía Verde de Ojos Negros, un 
                         recorrido que atraviesa antiguas vías ferroviarias entre Aragón y la Comunidad Valenciana.
                        </p>
                    </div> 
                    <div className='actions flex'>
                            <p>48 comentarios</p><p>/</p><p>07-09-2024</p>
                    </div>
                </div>

                <div className='card'>
                    <div className='cardImg'>
                        <img src={Vulcan} alt="Vulcan"></img>
                    </div>
                    <div className='cardInfo flex'>
                        <h2>Kawasaki Vulcan S, una mirada retrospectiva a la "Vulcan 70" personalizada, inspirada en la Mach III</h2>
                        <p>
                        La Kawasaki Vulcan S, que inicialmente estaba programada para ser descontinuada después de 2022, será relanzada como modelo 2025 el 
                        15 de septiembre. Aprovechando esta oportunidad, recordamos la Vulcan 70, un modelo personalizado de la Vulcan S, que fue anunciada 
                        en 2016 y ganó seguidores por su inesperada similitud con la icónica Mach III.
                        </p>
                    </div> 
                    <div className='actions flex'>
                            <p>24 comentarios</p><p>/</p><p>05-09-2024</p>
                    </div>
                </div>

                <div className='card'>
                    <div className='cardImg'>
                        <img src={Honda} alt="Honda"></img>
                    </div>
                    <div className='cardInfo flex'>
                        <h2>Repsol y Honda, fin a un idilio de más de 30 años</h2>
                        <p>
                        Pocas cosas más míticas que el estampado de Repsol en las motos de Honda han existido en el mundial de motociclismo. Al menos desde hace 30 años, 
                        justo cuando empezó la colaboración entre la empresa multi energética española y la fábrica de motos japonesa.
                        </p>
                    </div> 
                    <div className='actions flex'>
                            <p>84 comentarios</p><p>/</p><p>03-09-2024</p>
                    </div>
                </div>

                <div className='card'>
                    <div className='cardImg'>
                        <img src={CBR} alt="Cbr"></img>
                    </div>
                    <div className='cardInfo flex'>
                        <h2>La Honda CBR china de 800 cc ya está oficialmente en Europa. Su precio es una broma y tiene 95 CV</h2>
                        <p>
                        Llegó el día. A lo largo de los años hemos hablado largo y tendido sobre motos deportivas chinas; lo buenas, bonitas y baratas 
                        que parecían (recalcamos el "parecían") en China y su futurible llegada a Europa. Pues ha llegado el día, porque la CBR china 
                        de 800 cc ya está aquí.
                        </p>
                    </div> 
                    <div className='actions flex'>
                            <p>13 comentarios</p><p>/</p><p>01-09-2024</p>
                    </div>
                </div>

                <div className='card'>
                    <div className='cardImg'>
                        <img src={Ducati} alt="Ducati"></img>
                    </div>
                    <div className='cardInfo flex'>
                        <h2>Subastadas dos Ducati de carreras por un precio increíble</h2>
                        <p>
                        No hace falta decir que Ducati es sinónimo de éxito en competición. El fabricante italiano ha establecido prácticamente el 
                        punto de referencia, en particular con su moto de carreras Desmosedici, que fue pionera en el motor V4 desmodrómico, que ahora
                         estamos viendo tanto dentro como fuera de los circuitos.
                        </p>
                    </div> 
                    <div className='actions flex'>
                            <p>24 comentarios</p><p>/</p><p>30-08-2024</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Cards;