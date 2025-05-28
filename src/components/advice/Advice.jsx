import { useEffect, useState } from 'react';

const Advice = () => {
  const [advice, setAdvice] = useState('');
  //   getAdvice();

  useEffect(() => {
    getAdvice(setAdvice);
  }, []);

  return (
    <>
      <h1>ADVICE</h1>

      <h2>{advice?.slip?.advice}</h2>
      <button onClick={() => getAdvice(setAdvice)}>Get advice</button>
    </>
  );
};

const getAdvice = async setAdvice => {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const advices = await response.json();
    setAdvice(advices);
  } catch (error) {
    console.log(error);
  }
};

export default Advice;
