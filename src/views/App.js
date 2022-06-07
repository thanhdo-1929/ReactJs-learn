import logo from './logo.svg';
import './App.scss';
import MyComponents from './Example/MyComponents';
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {/* <p>hello</p> */}
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          {/* Learn React */}
        </a>

        {/* call components */}
        <MyComponents />
        {/* component k co con  */}

        {/* <MyComponents></MyComponents> */}
      </header>
    </div>
  );
}

/**
 * 2 components: class components/function components(function,arrow)
 *
 *
 *
 *
 *
 *
 */

export default App;
