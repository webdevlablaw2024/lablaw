import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

export default function FAQCard({ question, answer }) {
    const [showAnswer, setShowAnswer] = useState(false);

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    return (
        <div className="w-full hover:cursor-pointer" onClick={toggleAnswer}>
            <div className="flex items-center justify-between">
                <h4 className="text-lg font-medium mt-5">{question}</h4>
                <FontAwesomeIcon icon={showAnswer ? faCaretUp : faCaretDown} />
            </div>
            {showAnswer && <p className="text-[#828282] text-md">{answer}</p>}
            <div className="w-full h-[0.5px] bg-[#828282] mt-5"></div>
        </div>
    );
}
