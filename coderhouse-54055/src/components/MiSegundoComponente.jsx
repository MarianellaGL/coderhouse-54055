import { functionRara } from '../utils/functionRara';
import ComponenteAnidado from './ComponenteAnidado';
import './style.css'

export const MiSegundoComponente = ({ saludo, adios = null, tercera }) => {



    return (<>
        <div>
            <h1>Hola desde mi componente</h1>
            <p style={{ paddingBottom: "10px" }}> Hola </p>
            <button onClick={() => functionRara()}>clickeame</button>
            <h1>{saludo} {adios}</h1>
            <ComponenteAnidado tercera={tercera} />
        </div>
    </>);
}

//export default MiPrimerComponente;