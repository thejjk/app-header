

import App from "./App";
import BaseLayout from "./layouts/BaseLayout";

const Root = (props) => {
  
  const Mero = () => {

    return (
    <BaseLayout>
    Mera
    </BaseLayout>
  )
}
  
  
  
  return (
<>
    <section>{props.name} is mounted!</section>
    <App/>
</>
    )
}

export default Root
