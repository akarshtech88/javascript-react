import Navbar from './Navbar';
import Aside from './Aside';
import Article from './Article';
import mob from './mob.jpeg';
import Main from './Main';
import news from './news.avif'

function App() {
  return (
     <>
     <Navbar sname="Home" sabout="About" scontact="contact us" sdetail="Detail">

       <h1>Logo</h1>      

     </Navbar>
     <main>
     <Aside />
     <Article>
      <img src={mob} id="mob"/>
     </Article>
     </main>
     <Main className="wrapper">
       <img src={news} id="ph"></img>
     </Main>

     </>
  );
}

export default App;
