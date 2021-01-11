import './App.css';
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import SideBar from './Components/SideBar/SideBar'
function App() {



	return (
		<div className="App">
			<div className="MainContainer">
				<SideBar />
				<Main />
			</div>
			<Footer />
		</div>
	);
}

export default App;
