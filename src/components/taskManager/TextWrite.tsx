import React, { useState, useEffect } from 'react';
import './TextWrite.scss';
interface Props {
    text: string;
    delay: number;
}

const Typewriter: React.FC<Props> = ({ text, delay }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(prevText => prevText + text[index]);
        setIndex(prevIndex => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeoutId);
    }
  }, [index, text, delay]);

  return <span className="typewriter">{displayedText}</span>;
}

export default Typewriter;