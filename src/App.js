import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import NotFound from './components/pages/NotFound';
import About from './components/pages/About';
import Academics from './components/pages/Academics';
import Learn from './components/pages/Learning';
import School from './components/pages/School';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Contact from "./components/pages/sub_pages/About/Contact";
import Conduct from "./components/pages/sub_pages/About/Conduct";

import History from "./components/pages/sub_pages/About/History";
import HumanResources from "./components/pages/sub_pages/About/HumanResources";
import PrincipalsDesk from "./components/pages/sub_pages/About/PrincipalsDesk";
import Apply from "./components/pages/sub_pages/Academics/Apply";
import AgeCons from "./components/pages/sub_pages/Academics/AgeCons";
import International from "./components/pages/sub_pages/Academics/International";

import Result from "./components/pages/sub_pages/Academics/Result";
import Eyfs from "./components/pages/sub_pages/Learning/Eyfs";
import SecSchool from "./components/pages/sub_pages/Learning/SecSchool";

import Primary from "./components/pages/sub_pages/Learning/Primary";
import Module from "./components/pages/sub_pages/Learning/Module";

import Nursery from "./components/pages/sub_pages/Learning/Nursery";
import Curriculum from "./components/pages/sub_pages/School/Curriculum";
import Gallery from "./components/pages/Gallery";
import News from "./components/pages/News";


function App() {
  // const script = document.createElement("script");

  // script.src = "https://apps.elfsight.com/p/platform.js";
  // script.async = true;
  // document.body.appendChild(script);

  return (
    <>
      <Router>
        <NavBar />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={450} classNames="fade">
                <Switch>
                  <Route path="/" component={HeroSection} exact />
                  <Route path={"/about"} component={About} />
                  <Route path={"/academics"} component={Academics} />
                  <Route path={"/learn"} component={Learn} />
                  <Route path={"/school"} component={School} />
                  <Route path={"/contact"} component={Contact} />
                  <Route path={"/conduct"} component={Conduct} />

                  <Route path={"/gallery"} component={Gallery} />
                  <Route path={"/history"} component={History} />
                  <Route path={"/message"} component={HumanResources} />
                  <Route path={"/principal"} component={PrincipalsDesk} />
                  <Route path={"/apply"} component={Apply} />
                  <Route path={"/fees"} component={AgeCons} />
                  <Route path={"/transfer"} component={Result} />
                  <Route path={"/international"} component={International} />

                  <Route path={"/senior"} component={Eyfs} />
                  <Route path={"/secondary"} component={SecSchool} />
                  <Route path={"/module"} component={Module} />

                  <Route path={"/primary"} component={Primary} />

                  <Route path={"/junior"} component={Nursery} />
                  <Route path={"/school"} component={Curriculum} />
                  <Route path={"/News"} component={News} />

                  <Route path="*" component={NotFound} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />

        <Footer />
      </Router>
    </>
  );
}

export default App;
