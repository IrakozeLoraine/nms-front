import { BarType } from '../../types';
import Delete from '../../public/icons/ellipse.svg';
import { useState } from 'react';

export default function Bar({
  hasColor,
  subnotes,
  title,
  iconImg = Delete,
}: BarType) {
  const [toggle, hangleToggle] = useState<boolean>(false);
  return (
    <div
      className={`cursor-pointer mt-4 p-3  ${
        hasColor ? 'bg-gray-100' : 'bg-green-50'
      } `}
      onClick={() => {
        subnotes.length !== 0
          ? hangleToggle(!toggle)
          : alert('This is a subnote');
      }}
    >
      <div className="flex justify-between items-center">
        <div>{title}</div>
        <div>
          <img src={iconImg} alt="" />
        </div>
      </div>
      {/* Subnotes */}
      {toggle && (
        <div className="border">
          {subnotes.map((item: string, i) => {
            return (
              <Bar key={i} title={item} subnotes={[]} hasColor={hasColor} />
            );
          })}
        </div>
      )}
    </div>
  );
}
