import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "<Hello World />";
      
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;
    
            if (index > fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                onComplete();
                }, 1000);
            }
            }, 100);
    
        return () => clearInterval(interval);
    }, [onComplete]);


    return (
        <div className="loading-screen-parent">
            <div className="animate-blink">
                <h1 className="loading-title">{text}</h1>
            </div>
            <div>
                <div className="loading-bar"></div>
            </div>

        </div>
    );


}