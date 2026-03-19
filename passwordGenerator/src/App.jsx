import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
   
   // useRef hook
   const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}|;:,.<>?/~`";

    for (let index = 0; index < length; index++) {  // Fixed: < not <=
      let char = Math.floor(Math.random() * str.length);  // Fixed: removed +1
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipBoard = useCallback(() =>  {
     passwordRef.current?.select();
     passwordRef.current?.setSelectionRange(0,8); 
    window.navigator.clipboard.writeText(password)
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg 
          px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>

        <div className='flex shadow rounded-lg mb-4 overflow-hidden bg-white'>
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="passwords"
            readOnly
            ref={passwordRef}
          />
          <button 
            onClick={(copyPasswordToClipBoard) }
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >
            copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(parseInt(e.target.value))}  // Added parseInt
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              checked={numberAllowed}  // Changed from defaultChecked
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              checked={charAllowed}  // Changed from defaultChecked
              id="charInput"
              onChange={() => setCharAllowed((prev) => !prev)}  // Fixed: now sets charAllowed
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;