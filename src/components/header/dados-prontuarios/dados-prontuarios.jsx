import './dados-prontuarios.css'
import folder from '../../../assets/folder.png'

const MinhasPastas = () => {
  
    const pastas = [
        'Amanda',
        'Bianca',
        'Charles'
    ].sort();

    return (
    <div>
        <div className="p-mid">
            <h1>Minhas Pastas</h1>
            <div className="b-folder">
                <div className="p-folder">
                    <img src={folder} alt="Ícone de Pasta" />
                    <p>Pasta 1</p>
                </div>
                <div className="p-folder">
                    <img src={folder} alt="Ícone de Pasta" />
                    <p>Pasta 2 </p>
                </div>
            </div>
        </div>
    </div>
)
}
export default MinhasPastas;