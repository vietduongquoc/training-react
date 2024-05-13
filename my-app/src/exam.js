import { useEffect, useState } from "react";

function Exams() {
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const timeId = setInterval(() => {
            setCountdown(prevState => prevState - 1);
            console.log('Countdown..');
        }, 1000);

        return () => clearInterval(timeId);
    }, []);

    useEffect(() => {
        if (countdown === 0) {
            alert('Đã đếm đến 0!!!')
        }
    }, [countdown]);

    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    );
}

export default Exams;
