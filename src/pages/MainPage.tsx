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
              <h2>Garota de programa WEB FULLSTACK</h2>
              <p>a very nice and fine woman</p>
            </WindowAbout>
            </div>
            <div className={ styles.stacks}>
            <WindowStacks title="Stacks that she knows"  >
              <h2>Programming Languages & Frameworks</h2>
              <p>She actualy know lots of stuff, give her a job pleeeeaase</p>
            </WindowStacks>
            </div>
            <div className={ styles.misc}>
            <WindowMisc title="Oh, well"  >
              <img className={ styles.beT } src={ beT }/>
            </WindowMisc>
            </div>
            <div className={ styles.certify}>
            <WindowCertify title="Pretty formal, huh?"  >
              <h2>Certifies</h2>
              <h4>blabla bla</h4>
              <h4>blablalba</h4>
              <h4>blablalbalbalbalba</h4>
            </WindowCertify>
            </div>
            <div className={ styles.findme}>
            <WindowFindMe title="Where is she?" > 
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