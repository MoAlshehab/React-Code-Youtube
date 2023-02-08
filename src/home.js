const Home = () => {
    const clickMe = (e) => {
      console.log(e.target)
    }
    const clickName = (firstname) => {
        console.log('First name is '+ firstname);

    }
    const clickNameTwo = (firstname,secondname) => {
        console.log('First name is '+ firstname + ' And the secondname is '+ secondname);

    }
  return(
      <div className="container">

          <h1>I'm the king of this home</h1><br/>
          <button type="button"  onClick={clickMe} className="btn btn-success">Success</button><br/><br/>
          {/*// dit is een knop om de bron te tonen .*/}

          <button type="button"  onClick={()=> clickName('Dana')} className="btn btn-primary">Success</button><br/><br/>
          {/*// dit is een knop om de voor maan te tonen .*/}

          <button type="button"  onClick={()=> clickNameTwo('Dana','Alshehab')} className="btn btn-info">Success</button>
          {/*// deze is voor de voornaam en de achternaam.*/}

      </div>


  );
}
export default Home;