import React from 'react'
import loading from './loading.gif';

const Loading = () => {
  return ( // src'nin içerisinde başa "/" eklenmesinin sebebi, "relative" bir source yazmak yerine dosyanın her zaman ana dizin altında(root altında yani localhost:8080) "absolute" olarak aranmasını sağlamaktır. Relative olarak yazdığımızda userDetails içerisinde <Loading /> componenti ile çağrılan gif dosyası gelmiyordu.
    <React.Fragment>
        <img src={`/${loading}`} alt="Loading..." style={{width:'200px', display: 'block', margin: 'auto'}} />
    </React.Fragment>
  )
}

export default Loading;


