import './style.css'
export function Suggestion() {
    return (
        <div className='cointainer-suggestion'>
            <div className="header-suggestion" >
                <img src="https://github.com/pachecogabriel02.png" />
                <div className="user-infos-suggestion" >

                <div className="infos" >
                        <span>10gpc</span>
                        <p>Gabriel Pacheco</p>
                </div> 

                    <button className='switch'>Mudar</button>

                </div>
            </div>

            <div className='header-main-suggestion'>
                    <p>Sugestões para você</p>
                    <span>Ver tudo</span>
            </div>

            <div className='user-suggestion' >
                <div className='infos-suggestion'> 
                <img src="https://media.discordapp.net/attachments/1033116457820753983/1033117467796590762/ongsbrasil.png" />
                <div className='info-suggestion'>
                    <span>ongsbrasil</span>
                    <p>Seguido por jaummx</p>
                    </div>
                <button className='follow' >Seguir</button>  
                </div>

                <div className='infos-suggestion'> 
                <img src="https://media.discordapp.net/attachments/1033116457820753983/1033116500980142090/mds.jpeg?width=1178&height=662" />
                <div className='info-suggestion'>
                    <span>Mães da Sé</span>
                    <p>Seguido por gabrielharmony</p>
                    </div>
                <button className='follow' >Seguir</button>  
                </div>

            <div className='infos-suggestion'> 
                <img src="https://media.discordapp.net/attachments/1033116457820753983/1033118080336937110/ada.png?width=730&height=662" />
                <div className='info-suggestion'>
                    <span>projetoadotandoumamigo</span>
                    <p>Seguido por _danielssantos</p>
                    </div>
                <button className='follow' >Seguir</button>  
                </div>

                <div className='infos-suggestion'> 
                <img src="https://media.discordapp.net/attachments/1033116457820753983/1033119006737059840/ias.png" />
                <div className='info-suggestion'>
                    <span>institutoayrtonsenna</span>
                    <p>Seguido por gab.augustoz</p>
                    </div>
                <button className='follow' >Seguir</button>  
                </div>

                <div className='infos-suggestion'> 
                <img src="https://media.discordapp.net/attachments/1033116457820753983/1033120445278462002/melhor.png" />
                <div className='info-suggestion'>
                    <span>institutomelhoramigo</span>
                    <p>Seguido por im_freitas</p>
                    </div>
                <button className='follow' >Seguir</button>  
                </div>

            </div>

            <footer className='footer-suggestion'>
            <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>

            <p>&copy; 2021 INSTAGRAM FROM META</p>

            </footer>
        </div>
    )
}