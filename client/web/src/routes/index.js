import { useAuth } from "../contexts/AuthContext";
import { AdminHome } from "../pages/AdminHome";
import { HomeProfessores } from "../pages/HomeProfessores";
import { LoginPage } from "../pages/LoginPage";

export function Routes() {
    const { role } = useAuth();

    return (
        <>
            {
                role ?
                    role === "escola" ?
                        <AdminHome /> :
                        <HomeProfessores /> :                
                    <LoginPage />
            } 
        </> 
    );
}