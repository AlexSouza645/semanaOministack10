import React from 'react';
import './global.css';
import './app.css';
import './Sidebar.css'
import './main.css'


function App() {// função que retorna um arquivo html
  return (
    <div id='app'>
      <aside><strong>Cadastrar</strong>
        <form>
          <div class='input-block'></div>
          <label htmlFor="github_username"> Usuário do GitHub </label>
          <input name='github_username' id='github_username' required></input>

          <div class='input-block'>
            <label htmlFor="techs"> Tecnologias </label>
            <input name='techs' id='techs ' required></input>
          </div>

          <div className="input-group">
            <div class='input-block'>
              <label htmlFor="latidude">  Latitude  </label>
              <input name='latidude' id='latidude ' required></input>
            </div>

            <div class='input-block'>
              <label htmlFor="Longitude"> Longitude</label>
              <input name='Longitude' id='Longitude ' required></input>
            </div>

          </div>



          <button type="submit">Salvar</button>
        </form>

      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/2254731?v=4" alt="diego Fernandes" srcset="" />
            <div className="user-info">
              <strong>Diego Fernandes</strong>
              <span>ReactJs, ReactNative, NodeJS</span>
              <p>CTO at @Rocketseat. Passionate about education and changing people's lives through programming</p>
              <a href="https://github.com/diego3g">Acessar perfil no Github</a>
            </div>
            </header>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/2254731?v=4" alt="diego Fernandes" srcset="" />
            <div className="user-info">
              <strong>Diego Fernandes</strong>
              <span>ReactJs, ReactNative, NodeJS</span>
              <p>CTO at @Rocketseat. Passionate about education and changing people's lives through programming</p>
              <a href="https://github.com/diego3g">Acessar perfil no Github</a>
            </div>
            </header>
          </li>
          
          <li className="dev-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/2254731?v=4" alt="diego Fernandes" srcset="" />
            <div className="user-info">
              <strong>Diego Fernandes</strong>
              <span>ReactJs, ReactNative, NodeJS</span>
              <p>CTO at @Rocketseat. Passionate about education and changing people's lives through programming</p>
              <a href="https://github.com/diego3g">Acessar perfil no Github</a>
            </div>
            </header>
          </li>
          
          <li className="dev-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/2254731?v=4" alt="diego Fernandes" srcset="" />
            <div className="user-info">
              <strong>Diego Fernandes</strong>
              <span>ReactJs, ReactNative, NodeJS</span>
              <p>CTO at @Rocketseat. Passionate about education and changing people's lives through programming</p>
              <a href="https://github.com/diego3g">Acessar perfil no Github</a>
            </div>
            </header>
          </li>
        </ul>
      </main>

    </div>
  )
}

export default App;
