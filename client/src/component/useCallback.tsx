import React from 'react';



const UseCallBack: React.FC<any> = ({ callbacks }:any) => {
  console.log('this is callback children');
  return (
    <div>
        <button onClick={()=>callbacks()}></button>
    </div>
  );
}

export default React.memo(UseCallBack);
