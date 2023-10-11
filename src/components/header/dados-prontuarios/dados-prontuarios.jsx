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
    <h1 className='p-midh1'>Meus pacientes</h1>
        <div className="p-mid">
            <div className="folder-left">
                <div className="b-folder">
                    <div className="p-folder">
                        <img src={folder} alt="Ícone de Pasta" />
                        <p>Nome: </p>
                        <p>Amanda Nunes</p>
                        <p className='p-cpf'>CPF:</p>
                        <p>XXX.XXX.XXX-XX</p> 
                    </div>
                    <div className="p-folder">
                        <img src={folder} alt="Ícone de Pasta" />
                        <p>Nome: </p>
                        <p>Bruno Ribeiro</p> 
                        <p className='p-cpf'>CPF:</p>
                        <p>XXX.XXX.XXX-XX</p> 
                    </div>
                    <div className="p-folder">
                        <img src={folder} alt="Ícone de Pasta" />
                        <p>Nome: </p>
                        <p>Caio Berman</p> 
                        <p className='p-cpf'>CPF:</p>
                        <p>XXX.XXX.XXX-XX</p> 
                    </div>
                    <div className="p-folder">
                        <img src={folder} alt="Ícone de Pasta" />
                        <p>Nome: </p>
                        <p>David Neres</p> 
                        <p className='p-cpf'>CPF:</p>
                        <p>XXX.XXX.XXX-XX</p> 
                    </div>

                </div>
            </div>

            <div className="folder-mid">
                <div className="b-folder">
                <div className="p-folder">
                        <img src={folder} alt="Ícone de Pasta" />
                        <p>Nome: </p>
                        <p>Emilliano Mendes</p> 
                        <p className='p-cpf'>CPF:</p>
                        <p>XXX.XXX.XXX-XX</p> 
                    </div>
                    <div className="p-folder">
                        <img src={folder} alt="Ícone de Pasta" />
                        <p>Nome: </p>
                        <p>Fabricio Guedes</p> 
                        <p className='p-cpf'>CPF:</p>
                        <p>XXX.XXX.XXX-XX</p> 
                    </div>
                    <div className="p-folder">
                        <img src={folder} alt="Ícone de Pasta" />
                        <p>Nome: </p>
                        <p>Gustavo Lima</p> 
                        <p className='p-cpf'>CPF:</p>
                        <p>XXX.XXX.XXX-XX</p> 
                    </div>
                    <div className="p-folder">
                        <img src={folder} alt="Ícone de Pasta" />
                        <p>Nome: </p>
                        <p>Hiago Ferreira</p> 
                        <p className='p-cpf'>CPF:</p>
                        <p>XXX.XXX.XXX-XX</p> 
                    </div>
                </div>
            </div>
            <div className="folder-right">
                <div className="b-folder">
                    <div className="p-folder">
                        <img src={folder} alt="Ícone de Pasta" />
                        <p>Nome: </p>
                        <p>Igor Castro</p> 
                        <p className='p-cpf'>CPF:</p>
                        <p>XXX.XXX.XXX-XX</p> 
                    </div>
                    <div className="p-folder">
                        <img src={folder} alt="Ícone de Pasta" />
                        <p>Nome: </p>
                        <p>João Gomes</p> 
                        <p className='p-cpf'>CPF:</p>
                        <p>XXX.XXX.XXX-XX</p> 
                    </div>
                    <div className="p-folder">
                        <img src={folder} alt="Ícone de Pasta" />
                        <p>Nome: </p>
                        <p>Kellyson B</p> 
                        <p className='p-cpf'>CPF:</p>
                        <p>XXX.XXX.XXX-XX</p> 
                    </div>
                    <div className="p-folder">
                        <img src={folder} alt="Ícone de Pasta" />
                        <p>Nome: </p>
                        <p>Luccas Neto</p> 
                        <p className='p-cpf'>CPF:</p>
                        <p>XXX.XXX.XXX-XX</p> 
                    </div>
                </div>
            </div>
            <div className="folder-right">
                <div className="b-folder">
                    <div className="p-folder">
                        <img src={folder} alt="Ícone de Pasta" />
                        <p>Nome: </p>
                        <p>Marcela Luiza</p> 
                        <p className='p-cpf'>CPF:</p>
                        <p>XXX.XXX.XXX-XX</p> 
                    </div>
                    <div className="p-folder">
                        <img src={folder} alt="Ícone de Pasta" />
                        <p>Nome: </p>
                        <p>Neymar Junior</p> 
                        <p className='p-cpf'>CPF:</p>
                        <p>XXX.XXX.XXX-XX</p> 
                    </div>
                    <div className="p-folder">
                        <img src={folder} alt="Ícone de Pasta" />
                        <p>Nome: </p>
                        <p>Olavo de Carvalho</p> 
                        <p className='p-cpf'>CPF:</p>
                        <p>XXX.XXX.XXX-XX</p> 
                    </div>
                    <div className="p-folder">
                        <img src={folder} alt="Ícone de Pasta" />
                        <p>Nome: </p>
                        <p>Paulo Cesar</p> 
                        <p className='p-cpf'>CPF:</p>
                        <p>XXX.XXX.XXX-XX</p> 
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}
export default MinhasPastas;