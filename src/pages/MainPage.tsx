import React from 'react';
import styles from './css/MainPage.module.css'
import WindowAbout from "../components/WindowAbout";
import WindowStacks from '../components/WindowStacks';
import WindowMisc from '../components/WindowMisc';
import beT from '../assets/beT.png'
import WindowCertify from '../components/WindowCertify';
import WindowFindMe from '../components/WindowFindMe';
import Menu from '../components/Menu';
import GnomeShell from '../components/GnomeShell';



class MainPage extends React.Component {

       render() {
         return (
           <div className={ styles.container }>
            <GnomeShell />
            <div className={ styles.about }>
            <WindowAbout title="About Laura">
              <h2>Desenvolvedora Web Fullstack</h2>
              <p>Olá, me chamo Laura e atualmente moro em Florianópolis. 
                Recentemente concluí o curso de Análise e Desenvolvimento de Sistemas pela Unicesumar, e também estou fazendo o curso da Trybe de Desenvolvimento Web. 
                Sempre fui muito apaixonada pela cultura nerd/geek e logo nos meus últimos anos no ensino médio comecei a desenvolver uma série de aplicativos para android 
                voltados para essa comunidade, Para esses aplicativos eu utilizava java e xml para a interface, e uma vez ou outra arriscava com um pouco de Firebase para o 'back-end'.
                Hoje em dia sou uma desenvolvedora Web, crio soluções usando tencnologias atuais, minha preferencia atualmente é pelo back-end, mas encaro um full-stack ou frontEnd
                de muito grado :3
              </p>
            </WindowAbout>
            </div>
            <div className={ styles.stacks}>
            <WindowStacks title="Stacks that she knows">
              <h2>Linguagens de Programação & Frameworks</h2>
              <p>She actualy know lots of stuff, give her a job pleeeeaase</p>
            </WindowStacks>
            </div>
            <div className={ styles.misc}>
            <WindowMisc title="Oh, well">
              <img className={ styles.beT } src={ beT }/>
            </WindowMisc>
            </div>
            <div className={ styles.certify}>
            <WindowCertify title="Pretty formal, huh?">
              <h2>Formação</h2>
              <h4>blabla bla</h4>
              <h4>blablalba</h4>
              <h4>blablalbalbalbalba</h4>
            </WindowCertify>
            </div>
            <div className={ styles.findme}>
            <WindowFindMe title="Where is she?">
              <h2>Connect with me</h2>
              <p>Linkedin</p>
              <p>GitHub</p>
            </WindowFindMe>
            </div>
            <div>
            <Menu
             items={[
                { name: 'Projetos', type: 'folder', path: '/react' },
                { name: 'Contato', type: 'contact', path: '/nodejs' },
                { name: 'Baixar CV', type: 'file', path: '/typescript' },
              ]}
            />
            </div>
           </div>
         );
       }
}

export default MainPage;