// import React from 'react';
// import { ScrollView, View } from 'react-native';
import Aula01 from './src/components/Aula01';
import Aula02 from './src/components/Aula02';
import Aula03 from './src/components/Aula03';
import Aula04 from './src/components/Aula04';
import Aula05 from './src/components/Aula05';
import Aula06 from './src/components/Aula06';
import NavBottomTabs from './src/pages/NavBottomTabs';

// export default function App() {
//   return (
//     // Usei ScrollView para você conseguir rolar a tela e ver tudo
//     <ScrollView style={{ flex: 1, backgroundColor: '#ecc6db', paddingTop: 50 }}>
//       <Aula01 />
//       <Aula02 />
//       <Aula03 />
//     </ScrollView>
//   );
// }

import NavDrawer from "./src/pages/NavDrawer";
import NavStack from './src/pages/NavStack';
import NavTopTabs from './src/pages/NavTopTabs';
// import NavStack from "./src/pages/NavStack";

export default function App (){
  return (
    <NavStack/>
    // <NavDrawer/>
    // <NavTopTabs/>
    // <NavBottomTabs/>
  )
}


