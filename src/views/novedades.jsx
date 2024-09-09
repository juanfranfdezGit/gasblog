import './novedades.css'
import YamahaMT09 from '../assets/yamahaMT09.jpg';
import Marc from '../assets/marc.webp'
import Motocross from '../assets/motocross.jpg'
import Cfmoto800 from '../assets/cfmoto.jpg'

function Novedades() {

    return(
        <div id='Novedades' className='novedades flex'>
            <h2>Últimas Novedades!</h2>
            <span className='divider'></span>


            <div className='novedad-container flex'>
                <div className='novedad flex'>
                    <img src={YamahaMT09} alt='primera Yamaha MT09 automática'></img>
                    <div className='novedad-info flex'>
                        <h3>Primera Yamaha MT-09 con cambio automático</h3>
                        <p>La MT-09 original de Yamaha reescribió las reglas de las motos Naked de media cilindrada y ahora llega una máquina 
                            igual de revolucionaria, desarrollada para ofrecer el siguiente nivel en conducción deportiva y crear una simbiosis 
                            única entre piloto y máquina: la MT-09 Y-AMT.</p>
                            <a href='#' className='novedadesBTN'>Saber Más</a>
                    </div>
                </div>

                <div className='novedad flex'>
                    <img src={Marc} alt='MotoGP en San Marino 2024'></img>
                    <div className='novedad-info flex'>
                        <h3>MotoGP en San Marino 2024</h3>
                        <p>Marc Márquez volvió a saborear la victoria 1.042 días más tarde, sin duda, demasiado tiempo para un piloto que ha ganado el
                             Mundial en ocho ocasiones. El de Cervera ha vivido tres años para olvidar, entre los que se suceden un cambio de equipo y 
                             numerosas lesiones que le habían impedido, hasta Aragón, pisar lo más alto del podio. Pero el español se resarció en Alcañiz, 
                             mostrando esa versión temible y dominadora a la que durante tanto tiempo nos tenía acostumbrados en MotoGP.</p>
                            <a href='#' className='novedadesBTN'>Saber Más</a>
                    </div>
                </div>
                

                <div className='novedad flex'>
                    <img src={Motocross} alt='MXGP de Turquía 2024'></img>
                    <div className='novedad-info flex'>
                        <h3>MXGP de Turquía 2024</h3>
                        <p>El Mundial de Motocross llega a la parte decisiva de la temporada 2024. Y es que este fin de semana, los días 7 y 8 de septiembre, 
                            es el momento de disputar la antepenúltima cita de la campaña: el Gran Premio de Turquía en el circuito de Afyonkarahisar.</p>
                            <a href='#' className='novedadesBTN'>Saber Más</a>
                    </div>
                </div>

                <div className='novedad flex'>
                    <img src={Cfmoto800} alt='CFMoto 800 MT-X'></img>
                    <div className='novedad-info flex'>
                        <h3>CFMoto 800 MT-X</h3>
                        <p>En China ya han salido a la luz fotos de un nuevo modelo, la CFMoto 800 MT-X, una moto más trail (campera) que su hermana 800 MT. 
                            La recién llegada monta llantas de 21 y 18 pulgadas, respectivamente, con neumáticos 90-90-21 y 150/70-18. La 800 MT Touring, en cambio, 
                            lleva unas llantas más turísticas de 19 y 17 pulgadas.</p>
                            <a href='#' className='novedadesBTN'>Saber Más</a>
                    </div>
                </div>
            </div>

        </div>
    )
    
}

export default Novedades;