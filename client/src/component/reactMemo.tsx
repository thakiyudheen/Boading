import React from 'react';

interface ReactMemoProps {
  name?: string;
}

const ReactMemo: React.FC<ReactMemoProps> = ({ name }) => {
  console.log('this is child');
  return (
    <div>
      I am {name ? name : 'nan'}
    </div>
  );
}

export default React.memo(ReactMemo);
