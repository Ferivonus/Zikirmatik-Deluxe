import { useState, useEffect, useRef } from "react";
import zikirSound from "../assets/zikir_sound.m4a"; 

export default function Zikir() {
    const [count, setCount] = useState(0);
    const audioRef = useRef(null); 

    function handleClick() {
        setCount(count + 1);
    }

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    }, []);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>ZİKİR ÇEK</button>

            <audio ref={audioRef} src={zikirSound} loop /> 
        </div>
    );
}
