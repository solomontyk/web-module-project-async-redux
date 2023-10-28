import { connect } from 'react-redux';
import './App.css';
import { useEffect } from 'react';

import { getGifs } from './actions';

import GifList from './components/GifList'
import GifForm from './components/GifForm';

function App(props) {
  const { loading, error, getGifs } = props;

  useEffect(() => {
   
    getGifs();
    
  },[]);
  return (
    <div className="App">
      <h1> Find Gifs Here:</h1>
      <GifForm />

      {
        (error !== "") && <h3>{error}</h3>
      }
      {
        loading ? <h3> Looking for Gif...</h3> : <GifList/>
      }

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  }
}
export default connect(mapStateToProps, { getGifs })(App);