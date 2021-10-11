import { useEffect, useRef } from "react";

import QRCode from 'qrcode';
import { api } from "../../services/api";

export function TesteQR() {
    const canvasRef = useRef(null);

    useEffect(() => {
        async function getQR() {
            try {
                const frequencia = (await api.post("/frequencias/abrir-aula", { data: new Date() })).data;

                QRCode.toDataURL(canvasRef.current, JSON.stringify(frequencia), (error) => {
                    console.log(error);
                });
            } catch (err) {
                console.log(err);
            }            
        }
        
        getQR();
    }, []);

    return (
        <canvas ref={canvasRef} />
    );
}