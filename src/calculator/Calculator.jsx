import React, { useState } from 'react';

const Calculator = () => {

const [input, setInput] = useState('')

const calculateResult = (input) =>{
    let result;

    try{
        const operators = ['+','-','*','/','%'];
        let operator = null;

        for(let i=0; i<input.length;i++){
            if(operators.includes(input[i])){
                operator = input[i];
                break;
            }
        }
        if(!operator){
            setInput(parseFloat(input).toString());
            return;
        }


const [operand1,operand2] = input.split(operator).map(parseFloat);
let result;

switch(operator){
    case '+':
        result = operand1+operand2;
        break;
        case '-':
            result = operand1-operand2;
            break;
            case '*':
                result = operand1*operand2;
                break;
                case '/':
                    result = operand1/operand2;
                    break;
                    case '%':
                    result = operand1%operand2;
                    break;
default: 
throw new Error ('invalid operator')

}
setInput(result.toString());

    }
    catch(error){
        setInput('Error')
    }
}



const handleButtonClick = (value) =>{
if(value==='c')
    {
      setInput('')  
    }else if(value === '<'){
        setInput(input.slice(0,-1));
    }else if(value === '='){
// setInput(eval(input).toString())
calculateResult(input);
    }

else{
    setInput((preValue )=> preValue + value)
}
}

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-zinc-200">
        
      <div className="w-80 bg-violet-900 p-4 rounded-lg shadow-lg drop-shadow-3xl">
      <h1 className="text-center uppercase text-white text-4xl font-bold mb-4">Calculator</h1>

        <h2 id="input" className="text-right text-white text-4xl mb-4 bg-violet-800 p-4 rounded-md">
          {input}
        </h2>
        <div className="grid grid-cols-4 gap-2">
          <button onClick={()=>handleButtonClick('c')} className="drop-shadow-3xl bg-violet-700 text-white text-xl p-4 rounded-full">c</button>
          <button onClick={()=>handleButtonClick('<')}       className="bg-violet-700 text-white text-xl p-4 drop-shadow-3xl rounded-full">&lt;</button>
          <button onClick={()=>handleButtonClick('%')} className="bg-violet-700 drop-shadow-3xl text-white text-xl p-4 rounded-full">%</button>
          <button onClick={()=>handleButtonClick('/')} className="bg-violet-700 drop-shadow-3xl text-white text-xl p-4 rounded-full">/</button>
          
          <button onClick={()=>handleButtonClick('7')} className="bg-violet-700 drop-shadow-3xl text-white text-xl p-4 rounded-full">7</button>
          <button onClick={()=>handleButtonClick('8')} className="bg-violet-700 drop-shadow-3xl text-white text-xl p-4 rounded-full">8</button>
          <button onClick={()=>handleButtonClick('9')} className="bg-violet-700 drop-shadow-3xl text-white text-xl p-4 rounded-full">9</button>
          <button onClick={()=>handleButtonClick('*')} className="bg-violet-700 drop-shadow-3xl text-white text-xl p-4 rounded-full">*</button>
          
          <button onClick={()=>handleButtonClick('4')} className="bg-violet-700 drop-shadow-3xl text-white text-xl p-4 rounded-full">4</button>
          <button onClick={()=>handleButtonClick('5')} className="bg-violet-700 drop-shadow-3xl text-white text-xl p-4 rounded-full">5</button>
          <button onClick={()=>handleButtonClick('6')} className="bg-violet-700 drop-shadow-3xl text-white text-xl p-4 rounded-full">6</button>
          <button onClick={()=>handleButtonClick('-')} className="bg-violet-700 drop-shadow-3xl text-white text-xl p-4 rounded-full">-</button>
          
          <button onClick={()=>handleButtonClick('1')} className="bg-violet-700 drop-shadow-3xl  text-white text-xl p-4 rounded-full">1</button>
          <button onClick={()=>handleButtonClick('2')} className="bg-violet-700 drop-shadow-3xl text-white text-xl p-4 rounded-full">2</button>
          <button onClick={()=>handleButtonClick('3')} className="bg-violet-700 drop-shadow-3xl text-white text-xl p-4 rounded-full">3</button>
          <button onClick={()=>handleButtonClick('+')} className="bg-violet-700 drop-shadow-3xl text-white text-xl p-4 rounded-full">+</button>
          
          <button onClick={()=>handleButtonClick('0')} className="bg-violet-700 drop-shadow-3xl text-white text-xl p-4 rounded-full col-span-2">0</button>
          <button onClick={()=>handleButtonClick('00')} className="bg-violet-700 drop-shadow-3xl text-white text-xl p-4 rounded-full">00</button>
          <button onClick={()=>handleButtonClick('.')} className="bg-violet-700 drop-shadow-3xl text-white text-xl p-4 rounded-full">.</button>
          <button onClick={()=>handleButtonClick('=')} className="bg-violet-700 drop-shadow-3xl text-white text-xl p-4 rounded-full">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;


// import React, { useState } from 'react';

// const Calculator = () => {
//   const [input, setInput] = useState('');

//   const calculateResult = (input) => {
//     // ... (keep the existing calculateResult function)
//   };

//   const handleButtonClick = (value) => {
//     // ... (keep the existing handleButtonClick function)
//   };

//   const buttonClass = "bg-violet-700 text-white text-base sm:text-lg md:text-xl p-2 sm:p-3 md:p-4 rounded-full drop-shadow-lg hover:bg-violet-600 active:bg-violet-800 transition-colors";

//   return (
//     <div className="flex items-center justify-center min-h-screen w-full bg-zinc-200 p-4">
//       <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-violet-900 p-4 rounded-lg shadow-lg">
//         <h1 className="text-center uppercase text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Calculator</h1>

//         <h2 id="input" className="text-right text-white text-xl sm:text-2xl md:text-3xl mb-4 bg-violet-800 p-3 rounded-md overflow-x-auto whitespace-nowrap">
//           {input}
//         </h2>
//         <div className="grid grid-cols-4 gap-2 sm:gap-3">
//           {[
//             'c', '<', '%', '/',
//             '7', '8', '9', '*',
//             '4', '5', '6', '-',
//             '1', '2', '3', '+',
//             '0', '00', '.', '='
//           ].map((btn, index) => (
//             <button
//               key={btn}
//               onClick={() => handleButtonClick(btn)}
//               className={`${buttonClass} ${btn === '0' ? 'col-span-2' : ''}`}
//             >
//               {btn}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Calculator;















