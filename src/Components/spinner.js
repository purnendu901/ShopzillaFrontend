
import { HashLoader } from "react-spinners";



function Spinner(props) {

  return (
        
      <HashLoader className={`${props.loading} position-absolute start-50 top-50 translate-middle`} color="#efb10c"  cssOverride={{}} loading size={60} speedMultiplier={1}/>
  );
}

export default Spinner
