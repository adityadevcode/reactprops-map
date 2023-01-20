// import Props from "./Components/Props";
// import Classprops from "./Components/Classprops";

// function App() {
//   return (
//     <div>
//      {/* <p>welcome</p>  below are called props */}
//      <Props name='tony' age='24' place="Ban" country="Denmark"/>
//      <hr></hr>
//      <Props name='pony' age='14' place="del" country="Canada"/>
//      <br></br>
//      <Props name='lony' age='54' place="hyd" country="USA"/>
//      <br></br>
//      <Props name='aony' age='19' place="tel" country="London"/>
//      <br></br>
//      <Props name='bony' age='94' place="mys" country="India"/>
//      <br></br>
//      <Props name='cony' age='84' place="che" country="Poland"/>
//      <br></br>
//      <Props name='rony' age='54' place="pjb" country="Crotia"/>
//      <br></br>
//      <Props name='lony' age='24' place="lad" country="Portugal"/>
//      <br></br>
//      <Props name='wony' age='54' place="nep" country="France"/>
//      <br></br>
//      <Props name='tony' age='74' place="ker" country="Brussels"/>
//     <br></br>
//     <Classprops id='1' series= 'A ' designation='AM'/>
//     <hr></hr>
//     <Classprops id=' 2' series= ' B' designation='PM'/>
//     <br></br>
//     <Classprops id='3 ' series= ' C' designation='Midnight'/>
//     <br></br>
//     <Classprops id='4 ' series= ' D' designation='Supervision'/>
//     <br></br>
//     <Classprops id='5 ' series= ' E' designation='Reprting manager'/>
//     <br></br>
//     </div>
//   );
// }

// export default App;

//map method introduced

import React from 'react';
import Mapmethod from './Components/Mapmethod';

function App() {

let mapmethod = [
{
  id:9,
  name:'plan',
  age:29,
  place:'oen'
},
{
  id:15,
  name:'man',
  age:74,
  place:'ien'
},
{
  id:29,
  name:'mub',
  age:93,
  place:'pic'
},
{
  id:105,
  name:'tonn',
  age:73,
  place:'jud'
},
{
  id:211,
  name:'kev',
  age:34,
  place:'dyd'
},
{
  id:4,
  name:'kin',
  age:28,
  place:'oxn'
},
{
  id:5,
  name:'jgi',
  age:89,
  place:'pin'
},
{
  id:19,
  name:'dev',
  age:54,
  place:'chen'
},
{
  id:11,
  name:'chirs',
  age:20,
  place:'tel'
},
{
  id:6,
  name:'mary',
  age:98,
  place:'ker'
},
{
  id:2,
  name:'ton',
  age:89,
  place:'zin'
},
{
  id:75,
  name:'nxev',
  age:53,
  place:'vin'
},
{
  id:25,
  name:'cun',
  age:83,
  place:'xyd'
},
{
  id:55,
  name:'bohn',
  age:24,
  place:'Byd'
},
{
  id:26,
  name:'pohn',
  age:23,
  place:'Hyd'
}
]


return (
    <>
{
  mapmethod.map(
    (m)=> {
      return <Mapmethod key={m.id} id={m.id} name={m.name} age={m.age} place={m.place}/>
    }
  )
}
    </>
  )
}

export default App;