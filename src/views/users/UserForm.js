import { useReducer } from "react";
import UserService from "./UserService";

function UserForm(){

    const formReducer = (state, event) => {
        if (event=="reset")
            return{};
        
        return {
            ...state,
            [event.name]: event.value
        }
    }

    //estado do formulario
    const [formData, setFormData] = useReducer(formReducer,{});

    const handleChange = (event)=>{
        setFormData({
            name: event.target.name,
            value: event.target.value 
        });
    }

    const handleSave = ()=>{
        console.log(formData);
        
        //salvando na api
        UserService.save(formData)
        .then((res)=>{
            console.log(res);
            alert("Salvo com sucesso")
        })
        .catch((err)=>{
            console.log(err)
        });
    }

    

    return(
        <>
            <h1>Cadastro de usuarios</h1>
            <form>
                <fieldset className="form-group">
                    <label></label>
                    <input type="text" name="first_name" className="form-control" placeholder="fulano" onChange={handleChange}/>
                </fieldset>

                <fieldset className="form-group">
                    <label></label>
                    <input type="text" name="last_name" className="form-control" placeholder="de Tal" onChange={handleChange}/>
                </fieldset>

                <fieldset className="form-group">
                    <label></label>
                    <input type="email" name="email" className="form-control" placeholder="fulano@provedor.com" onChange={handleChange}/>
                </fieldset>

                <div className="mt-2">
                    <button type="submit" className="btn btn-success me-1" onClick={handleSave}>Salvar</button>
                    <button type="button" className="btn btn-light">Cancelar</button>

                </div>
            </form>
        </>
    );
}

export default UserForm;