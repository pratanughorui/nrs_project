  import React, { useState, useEffect } from 'react';

  const initialHistoryDeck = [
    { id: 1, text: 'Painful Progressive Swelling', code: 'H', type:'history' },
    { id: 2, text: 'Continuous bleeding from bite site', code: 'H', type:'history' },
    { id: 3, text: 'Bleeding from the gum and other orifices', code: 'H', type:'history' },
    { id: 4, text: 'Epistaxis', code: 'H', type:'history' },
    { id: 5, text: 'Vomiting', code: 'H', type:'history' },
    { id: 6, text: 'Haematemesis', code: 'H', type:'history' },
    { id: 7, text: 'Haemoptysis', code: 'H', type:'history' },
    { id: 8, text: 'Acute abdominal Pain', code: 'H', type:'history' },
    { id: 9, text: 'Bleeding per rectum', code: 'H', type:'history' },
    { id: 10, text: 'Low back pain', code: 'H', type:'history' },
    { id: 11, text: 'Declining urine output', code: 'H', type:'history' },
    { id: 12, text: 'Difficulty in focusing with eyelids feeling heavy', code: 'N', type:'history' },
    { id: 13, text: 'Diplopia', code: 'N', type:'history' },
    { id: 14, text: 'Progressive swelling and local pain', code: 'N', type:'history' },
    { id: 15, text: 'Numbness around lips and mouth', code: 'N', type:'history' },
    { id: 16, text: 'Paralysis noted early in the morning', code: 'N', type:'history' },
    { id: 17, text: 'Dyspnea', code: 'N', type:'history' },
    { id: 18, text: 'Dysphonia', code: 'N', type:'history' },
    { id: 19, text: 'Dysphagia', code: 'N', type:'history' },
    { id: 20, text: 'Acute pain abdomen starting from early in the morning', code: 'N', type:'history' },
    { id: 21, text: 'Unexplained throat/chest/joint pain', code: 'N', type:'history' }
  ];

  const initialExaminationDeck = [
    { id: 22, text: 'Distinct bite mark with local swelling', code: 'X',type:'exam' },
    { id: 23, text: 'Local necrosis with rancid smell in a swollen limb with taught and shiny skin and skip lesions', code: 'H' ,type:'exam'},
    { id: 24, text: 'Significant Painful swelling involving the whole limb and extending onto the trunk', code: 'H',type:'exam' },
    { id: 25, text: 'Compartment Syndrome', code: 'H',type:'exam' },
    { id: 26, text: 'Tender enlargement of local lymph nodes', code: 'H',type:'exam' },
    { id: 27, text: 'Hypotension', code: 'H',type:'exam' },
    { id: 28, text: 'Petechiae, purpura and ecchymosis', code: 'H',type:'exam' },
    { id: 29, text: 'Asymmetrical pupil', code: 'H',type:'exam' },
    { id: 30, text: 'Parotid swelling, conjunctival edema, sub-conjunctival haemorrhage', code: 'H' ,type:'exam'},
    { id: 31, text: 'Ptosis', code: 'N' ,type:'exam'},
    { id: 32, text: 'Ophthalmoplegia', code: 'N',type:'exam' },
    { id: 33, text: 'Local necrosis and/or blistering', code: 'N',type:'exam' },
    { id: 34, text: 'Inability to swallow and aspiration of pooled secretions', code: 'N',type:'exam' },
    { id: 35, text: 'Cyanosis and altered sensorium', code: 'N' ,type:'exam'},
    { id: 36, text: 'Paradoxical respiration', code: 'N',type:'exam' },
    { id: 37, text: 'Dysarthria', code: 'N' ,type:'exam'},
    { id: 38, text: 'Ascending paralysis starting from early morning', code: 'N' ,type:'exam'},
    { id: 39, text: 'Unexplained respiratory distress in children in the presence of ptosis', code: 'N' ,type:'exam'},
    { id: 40, text: 'Sudden onset of Acute Flaccid Paralysis in a child', code: 'N',type:'exam' },
    { id: 41, text: 'Unexplained respiratory distress in children', code: 'N',type:'exam' }
  ];

  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const App = () => {
    const [shuffledHistoryDeck, setShuffledHistoryDeck] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(0);
    const [shuffledExaminationDeck, setShuffledExaminationDeck] = useState([]);
    const [examinationIndex, setExaminationIndex] = useState(0);
    const [historyselect, setHistoryselect] = useState(false);
    const [examinationselect, setExaminationselect] = useState(false);
    const [current1, setCurrent1] = useState(null);
    const [current2, setCurrent2] = useState(null);
    const [current3, setCurrent3] = useState(null);
    const [current4, setCurrent4] = useState(null);
    const [countdown, setCountdown] = useState(60);
    const [alertVisible, setAlertVisible] = useState(false);
    const[alertwrongVisible,setalertwrongVisible]=useState(false);
    const[sc,setsc]=useState(0);
    // Create a new Map
    const myMap = new Map();
    
    var x=0;


    useEffect(() => {
      if (historyselect && shuffledHistoryDeck.length === 0) {
        setShuffledHistoryDeck(shuffleArray([...initialHistoryDeck]));
      }
      if (examinationselect && shuffledExaminationDeck.length === 0) {
        setShuffledExaminationDeck(shuffleArray([...initialExaminationDeck]));
      }
     x=0;
    }, []);
    useEffect(() => {
      if (countdown <= 0) {
        window.location.reload(); // Reload the page when countdown reaches zero
        return;
      }
      const timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 10000);
      return () => clearInterval(timer);
    }, [countdown]);
    

    const handleHistoryClick = () => {
      setShuffledHistoryDeck(shuffleArray([...initialHistoryDeck]));
      setHistoryselect(true);
      setExaminationselect(false);
    };

    const handleExaminationClick = () => {
      setShuffledExaminationDeck(shuffleArray([...initialExaminationDeck]));

      setHistoryselect(false);
      setExaminationselect(true);
    };

    const handleSelection = (setCurrent) => {
      // if(myMap.has[shuffledHistoryDeck[historyIndex].id]){
      //   return;
      // }
      const curr=shuffledHistoryDeck[historyIndex];
      // console.log(myMap.has(curr.text));
      if (historyselect && shuffledHistoryDeck.length > 0) {
        setCurrent(curr);
        // myMap.set(curr.text,true);
        setHistoryIndex((prevIndex) => (prevIndex + 1) % shuffledHistoryDeck.length);
      } else if (examinationselect && shuffledExaminationDeck.length > 0) {
        setCurrent(shuffledExaminationDeck[examinationIndex]);
        myMap.set(shuffledExaminationDeck[examinationIndex].id,true)
        setExaminationIndex((prevIndex) => (prevIndex + 1) % shuffledExaminationDeck.length);
      }
    };

    const handleSelect1=()=>{
      
   let a=0;
      if (historyselect && shuffledHistoryDeck.length > 0) {
        if(conditionforhis(shuffledHistoryDeck[historyIndex])){
          alert("meaximum 3 card can seleted");
          return;
        }
        if(current2?.id==shuffledHistoryDeck[historyIndex].id || current3?.id==shuffledHistoryDeck[historyIndex].id || current4?.id==shuffledHistoryDeck[historyIndex].id){
          return;
        }


        setCurrent1(shuffledHistoryDeck[historyIndex]);
        setHistoryIndex((prevIndex) => (prevIndex + 1) % shuffledHistoryDeck.length);
        a=1;
      } else if (examinationselect && shuffledExaminationDeck.length > 0) {
        if(conditionforexam(shuffledExaminationDeck[examinationIndex])){
          alert("meaximum 3 card can seleted");
          return;
        }
       // console.log(shuffledExaminationDeck[examinationIndex]);
        setCurrent1(shuffledExaminationDeck[examinationIndex]);
        //myMap.set(shuffledExaminationDeck[examinationIndex].id,true)
        setExaminationIndex((prevIndex) => (prevIndex + 1) % shuffledExaminationDeck.length);
        a=1;
      }
      setsc(sc+1);
      if(sc>=3){
        if(a==2){
          result(shuffledExaminationDeck[examinationIndex],current2,current3,current4);
        }else{
          result(shuffledHistoryDeck[historyIndex],current2,current3,current4);
        }
      }
    }
    const handleSelect2=()=>{
     let a=0;
      if (historyselect && shuffledHistoryDeck.length > 0) {
        if(conditionforhis(shuffledHistoryDeck[historyIndex])){
          alert("meaximum 3 card can seleted");
          return;
        }
        if(current1?.id==shuffledHistoryDeck[historyIndex].id || current3?.id==shuffledHistoryDeck[historyIndex].id || current4?.id==shuffledHistoryDeck[historyIndex].id){
          return true;
        }
        setCurrent2(shuffledHistoryDeck[historyIndex]);
        // myMap.set(curr.text,true);
        setHistoryIndex((prevIndex) => (prevIndex + 1) % shuffledHistoryDeck.length);
        a=1;
      } else if (examinationselect && shuffledExaminationDeck.length > 0) {
        if(conditionforexam(shuffledExaminationDeck[examinationIndex])){
          alert("meaximum 3 card can seleted");
          return;
        }
        setCurrent2(shuffledExaminationDeck[examinationIndex]);
        //myMap.set(shuffledExaminationDeck[examinationIndex].id,true)
        setExaminationIndex((prevIndex) => (prevIndex + 1) % shuffledExaminationDeck.length);
        a=2;
      }
      setsc(sc+1);
      if(sc>=3){
        if(a==2){
          result(current1,shuffledExaminationDeck[examinationIndex],current3,current4);
        }else{
          result(current1,shuffledHistoryDeck[historyIndex],current3,current4);
        }
      }
    }
    const handleSelect3=()=>{
      let a=0
      if (historyselect && shuffledHistoryDeck.length > 0) {
        if(conditionforhis(shuffledHistoryDeck[historyIndex])){
          alert("meaximum 3 card can seleted");
          return;
        }
        if(current2?.id==shuffledHistoryDeck[historyIndex].id || current1?.id==shuffledHistoryDeck[historyIndex].id || current4?.id==shuffledHistoryDeck[historyIndex].id){
          return true;
        }
        setCurrent3(shuffledHistoryDeck[historyIndex]);
        // myMap.set(curr.text,true);
        setHistoryIndex((prevIndex) => (prevIndex + 3) % shuffledHistoryDeck.length);
        a=1;
      } else if (examinationselect && shuffledExaminationDeck.length > 0) {
        if(conditionforexam(shuffledExaminationDeck[examinationIndex])){
          alert("meaximum 3 card can seleted");
          return;
        }
        setCurrent3(shuffledExaminationDeck[examinationIndex]);
        //myMap.set(shuffledExaminationDeck[examinationIndex].id,true)
        
        setExaminationIndex((prevIndex) => (prevIndex + 1) % shuffledExaminationDeck.length);
       a=2;
      }
      setsc(sc+1);
      if(sc>=3){
        if(a==2){
          result(current1,current2,shuffledExaminationDeck[examinationIndex],current4);
        }else{
          result(current1,current2,shuffledHistoryDeck[historyIndex],current4);
        }
      }
    }
    const handleSelect4=()=>{
      let a=0
      if (historyselect && shuffledHistoryDeck.length > 0) {
        if(conditionforhis(shuffledHistoryDeck[historyIndex])){
          alert("meaximum 3 card can seleted");
          return;
        }
        if(current2.id==shuffledHistoryDeck[historyIndex].id || current3.id==shuffledHistoryDeck[historyIndex].id || current1.id==shuffledHistoryDeck[historyIndex].id){
          return true;
        }
        setCurrent4(shuffledHistoryDeck[historyIndex]);
        // myMap.set(curr.text,true);
        setHistoryIndex((prevIndex) => (prevIndex + 1) % shuffledHistoryDeck.length);
       a=1;
      } else if (examinationselect && shuffledExaminationDeck.length > 0) {
        if(conditionforexam(shuffledExaminationDeck[examinationIndex])){
          alert("meaximum 3 card can seleted");
          return;
        }
        setCurrent4(shuffledExaminationDeck[examinationIndex]);
        //myMap.set(shuffledExaminationDeck[examinationIndex].id,true)
        setExaminationIndex((prevIndex) => (prevIndex + 1) % shuffledExaminationDeck.length);
        a=2;
      }
      setsc(sc+1);
      if(sc>=3){
        if(a==2){
          result(current1,current2,current3,shuffledExaminationDeck[examinationIndex]);
        }else{
          result(current1,current2,current3,shuffledHistoryDeck[historyIndex]);
        }
      }
      
    }

    const result=(curr1,curr2,curr3,curr4)=>{
     
      if(sc>=3){
        //console.log(current1,current2,current3,current4);
      
        if(curr1?.code=='H' && curr2?.code=='H' && curr3?.code=='H' && curr4?.code=='H'){
          setAlertVisible(true);
        }
        else if(curr1?.code=='N' && curr2?.code=='N' && curr3?.code=='N' && curr4?.code=='N'){
          setAlertVisible(true);
        }else{
          setalertwrongVisible(true);
        }
      }
    
    }

     const conditionforhis=(curr)=>{
      //console.log(curr);
          if((current1?.type=='history' && current2?.type=='history' && current3?.type=='history') && curr?.type=='history'){
            return true;
          }
          else if((current1?.type=='history' && current2?.type=='history' && current4?.type=='history') && curr?.type=='history'){
            return true;
          }
          else if((current1?.type=='history' && current3?.type=='history' && current4?.type=='history') && curr?.type=='history'){
            return true;
          }
          else if((current3?.type=='history' && current2?.type=='history' && current4?.type=='history') && curr?.type=='history'){
            return true;
          }else{
            return false;
          }
     }
     const conditionforexam=(curr)=>{
      console.log(curr);
          if((current1?.type=='exam' && current2?.type=='exam' && current3?.type=='exam') && curr.type=='exam'){
            return true;
          }
          else if((current1?.type=='exam' && current2?.type=='exam' && current4?.type=='exam') && curr.type=='exam'){
            return true;
          }
          else if((current1?.type=='exam' && current3?.type=='exam' && current4?.type=='exam') && curr.type=='exam'){
            return true;
          }
          else if((current3?.type=='exam' && current2?.type=='exam' && current4?.type=='exam') && curr.type=='exam'){
            return true;
          }else{
            return false;
          }
     }



    return (
      <div>
        
        <div className="w-full h-auto md:flex">
        
          {/* history Section */}
          <div className="w-full h-80 m-7  flex flex-col items-center">
            <div className="text-blue-600 font-bold text-2xl">History</div>
            <div
              className="relative w-60 h-72 cursor-pointer"
              onClick={handleHistoryClick}
            >
              <div className="absolute inset-0 bg-blue-500 border border-gray-400 transform translate-y-12 translate-x-8"></div>
              <div className="absolute inset-0 bg-blue-400 border border-gray-400 transform translate-y-9 translate-x-6"></div>
              <div className="absolute inset-0 bg-blue-300 border border-gray-400 transform translate-y-6 translate-x-4"></div>
              <div className="absolute inset-0 bg-blue-200 border border-gray-400 transform translate-y-3 translate-x-2"></div>
              <div className="absolute inset-0 bg-blue-100 border border-gray-400 flex items-center justify-center">
                <p className='text-center text-xl'>{shuffledHistoryDeck[historyIndex]?.text}</p>
              </div>
            </div>
          </div>
          {/* Examination Section */}
          <div className="w-full h-80 m-7 flex flex-col items-center">
          <div className="text-blue-600 font-bold text-2xl">Examination</div>
            <div
              className="relative w-60 h-72 cursor-pointer"
              onClick={handleExaminationClick}
            >
              <div className="absolute inset-0 bg-blue-500 border border-gray-400 transform translate-y-12 translate-x-8"></div>
              <div className="absolute inset-0 bg-blue-400 border border-gray-400 transform translate-y-9 translate-x-6"></div>
              <div className="absolute inset-0 bg-blue-300 border border-gray-400 transform translate-y-6 translate-x-4"></div>
              <div className="absolute inset-0 bg-blue-200 border border-gray-400 transform translate-y-3 translate-x-2"></div>
              <div className="absolute inset-0 bg-blue-100 border border-gray-400 flex items-center justify-center">
                <p className='text-center text-xl'>{shuffledExaminationDeck[examinationIndex]?.text}</p>
              </div>
            </div>
          </div>
          <div>
          <p className="text-blue-600 font-bold text-xl m-2">Timer:{countdown}s</p>
          </div>
        </div>
        <div>
          <h2 className="text-blue-600 font-bold text-center text-2xl">Choose the correct sequence</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 p-4">
  <div className="border border-black w-full  h-60 flex items-center justify-center" onClick={() => handleSelect1()}>
    <p>{current1?.text}</p>
  </div>
  <div className="border border-black w-full h-60 flex items-center justify-center" onClick={() => handleSelect2()}>
    <p>{current2?.text}</p>
  </div>
  <div className="border border-black w-full h-60 flex items-center justify-center" onClick={() => handleSelect3()}>
    <p>{current3?.text}</p>
  </div>
  <div className="border border-black w-full h-60 flex items-center justify-center" onClick={() => handleSelect4()}>
    <p>{current4?.text}</p>
  </div>
</div>

          <div className='flex flex-col items-center m-9'>
          {/* <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={result}>Submit</button> */}
      
          </div>
          {alertVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4 text-green-600">Success!</h2>
              <p className="text-lg">You have selected the correct sequence!</p>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={() =>{setAlertVisible(false);window.location.reload();}}
              >
                OK
              </button>
            </div>
          </div>
        )}
         {alertwrongVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4 text-red-600">Wrong!</h2>
              <p className="text-lg">You have selected the Wrong sequence!</p>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={() =>{setAlertVisible(false);window.location.reload();}}
              >
                play again
              </button>
            </div>
          </div>
        )}
        </div>
      </div>
    );
  };

  export default App;
