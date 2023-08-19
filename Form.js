import { useState } from "react";

function Form() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function Cadastrar(e) {
        e.preventDefault();
        console.log(`O usuario: ${email} tem a senha: ${senha}`);
    }

    return (
        <form onSubmit={Cadastrar}>
            <div className="Email">
                <label htmlFor="email" name="email" id="email">E-mail: </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            
            <div className="Senha">
                <label htmlFor="senha">Senha:</label>
                <input type="password"
                    name="senha"
                    id="senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                    />
            </div>
            
            <button type="submit" value="Cadastrar">Cadastrar</button>
        </form>
    )
}

export default Form;


