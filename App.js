import logo from './maxresdefault.jpg';
import './App.css';

function App() {


  const name = "Hello World";

  const obj = {name: "Hello World Object"}

  const data = ['We', 'are', 'United'] //Show these in seperate tags

  const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}] //Show these in seperate tags
  
  const complex = [{company: 'XYZ', jobs: ['Javascript' ,'React']}, {company: 'ABC', jobs: ['AngularJs' ,'Ionic']}] //Show these in a Table
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {name}
        </p>

        <p>
        {obj.name}
        </p>

        <ol>
          {data.map(function (item) {
           return <li>{item} </li> 
          })} 
        </ol>

        <ol>
          {list.map(function (item) {
           return <li>{item.name} </li> 
          })} 
        </ol>

        <table border={1}>
          <tr>
            <th>company</th>
            <th>jobs</th>
          </tr>
          {
            complex.map(function(item){

              return <tr> 
                <td>{item.company}</td>
                <td>{item.jobs}</td>
              </tr>
            })
          }
         
        </table>

      </header>
    </div>
  );
}

export default App;
