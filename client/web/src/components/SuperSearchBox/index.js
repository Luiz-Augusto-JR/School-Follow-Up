import "./styles.css";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

export function SuperSearchbox({ users, addUser }) {
    const [text, setText] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);
       
    useEffect(() => {       
        const textToLowerCase = text.toLowerCase(); 
        const filteredList = users.filter(user => {                       
            if (text) {
                return user.nome.toLowerCase().includes(textToLowerCase) ||
                    user.email.toLowerCase().includes(textToLowerCase);
            }
            return false;            
        });

        setFilteredUsers(filteredList.slice(0, 3));
    }, [text, users]);

    function handleSubmit(e, user) {
        e.preventDefault();

        addUser(user);
        setText("");
    }

    return (        
        <div className="search-box">
            <label>
                <input type="text" onChange={e => setText(e.target.value)} value={text} />
            </label>
            { !!filteredUsers.length && 
                filteredUsers.map(user => (
                    <div key={user.id} className="filtered-data">
                        <div>
                            <p className="filtered-data__name">{user.nome}</p>
                            <p className="filtered-data__email">{user.email}</p>                
                        </div>
                        <button 
                            className="filtered-data__button"
                            onClick={e => handleSubmit(e, user)}
                        ><FaPlus /></button>
                    </div>
                ))                
            }                    
        </div>
    );
}