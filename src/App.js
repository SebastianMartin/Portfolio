import './App.css';
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import SideBar from './Components/SideBar/SideBar'
import Person from './Image/beer.jpg'
import './Style/Card.css'
import './Style/Grid.css'
import './Style/Section.css'
function App() {



	return (
		<div className="App">
			<div className="UserTopImage">
				<div className="UserTopImageBackground">
					<img
						className="UserTopImageBackgroundImage"
						src={Person}
						alt="Not Found" />
				</div>
			</div>
			<div className="MainContainer">
				<SideBar />
				<Main />
			</div>
			<Footer />
		</div>
	);
}

export default App;
