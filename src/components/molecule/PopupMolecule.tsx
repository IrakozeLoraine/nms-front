import Bar from '../atoms/Bar';
import { BarMoleculeType, NotesType } from '../../types';
import { Link } from 'react-router-dom';

export default function DropdownMolecule({
  courseTitle,
  notes,
  link,
  iconImg,
}: BarMoleculeType) {
  return (
    <div className="mt-12">
      <div className="flex justify-between">
        <h1 className="text-gray-300 uppercase">{courseTitle}</h1>
        {link && (
          <Link to={link.to} className="uppercase text-primary">
            {link.label}
          </Link>
        )}
      </div>
      {notes.map((item: NotesType, i: number) => {
        return (
          <Bar
            key={i}
            title={item.mainNote}
            subnotes={item.subnotes}
            hasColor={i % 2 === 0 && true}
            iconImg={iconImg}
          />
        );
      })}
    </div>
  );
}
