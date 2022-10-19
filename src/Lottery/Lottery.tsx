import React from 'react';

interface LotteryProps extends React.PropsWithChildren{
  number: number;
}

const Lottery: React.FC<LotteryProps> = (props) => {
  return (
    <div className={"numbers"}>{props.number}</div>
  );
};

export default Lottery;