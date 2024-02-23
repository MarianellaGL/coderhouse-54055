import { functionRara } from '../utils/functionRara';
import './style.css'

export const MiPrimerComponente = ({ saludo, adios }) => {



    return (<>
        <div>
            <h1>Hola desde mi componente</h1>
            <p style={{ paddingBottom: "10px" }}> Hola </p>
            <button className='btn btn-primary' onClick={() => functionRara()}>clickeame</button>
            <h1>{saludo} {adios}</h1>

        </div>
    </>);
}

//export default MiPrimerComponente;