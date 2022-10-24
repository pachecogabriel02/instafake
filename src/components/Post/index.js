import './style.css'
import { FiMoreHorizontal } from 'react-icons/fi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsChat } from 'react-icons/bs'
import { FiSend } from  'react-icons/fi'
import { BsBookmark, BsEmojiSmile } from 'react-icons/bs'
import { IconContext } from 'react-icons'

export function Post() {
    return (
        <>
            <header className="header-post" >

                <div className="infos-post" >
                    <img className="img-header-post" src="https://media.discordapp.net/attachments/1033116457820753983/1033121723672952934/unknown.png" />

                    <p>ongsalvagato</p>
                </div>


                    <FiMoreHorizontal />
            </header>

            <div className="img-post" >
                <img src="https://media.discordapp.net/attachments/1033116457820753983/1033121012868460594/unknown.png?width=663&height=663"/>
            </div>

            <div className="footer-post" >
                <IconContext.Provider value={{size: "30px"}} >

                    <section className="engagement-post" >
                        <div className="icons-1" >
                            <div className="icon"><IoMdHeartEmpty /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>
                        </div>

                        
                        <div className="icon"><BsBookmark /></div>
                        
                    </section>
                </IconContext.Provider>

                <section className="like" >
                    <span>61 curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <span>ongsalvagato</span> Boa tarde amigatos, 

primeiramente gostaríamos de agradecer à todos que tem colaborado e contribuído com o nosso trabalho, muita gratidão à todos vocês.

Agora estamos precisando de ajuda com produtos de limpeza para mantermos a higiene básica e necessária da nossa sede.

Precisamos de granulado higiênico e materiais básicos, tais como, sabão em pó, detergente, água sanitária, panos, sacos de lixo 40 e 100 litros - preto ou branco, papel toalha, entre outros.

Cada ajuda é válida, um detergente, um saco de lixo... tudo conta!

👉 Quem puder contribuir, temos dois pontos de arrecadação na cobasi unidade do Morumbi, na Av. Giovanni Gronch, 5411 e também a clínica gattinivetcaffeoficial - Av. Professor Vicente Rao, 2139.

Qualquer contribuição é muito importante, nossos gatinhos agradecem 😻🙏🏻


                    </p>
                </div>

                <div className="time-post" >
                    <time>HÁ 1 HORA</time>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px'}}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                            
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>
            </div>
        </>

    )
}
