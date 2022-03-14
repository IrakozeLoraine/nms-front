import { BarMoleculeType, BarType } from '../../types';
import DropdownMolecule from '../molecule/PopupMolecule';

export default function BarsHolder({
  content,
  iconImg,
}: {
  content: BarMoleculeType[];
  iconImg?: string;
}) {
  return (
    <div className="mt-12">
      {content.map((item: BarMoleculeType, i: number) => {
        return (
          <DropdownMolecule
            key={i}
            courseTitle={item.courseTitle}
            notes={item.notes}
            iconImg={iconImg}
            link={{
              to: '',
              label: 'download all',
            }}
          />
        );
      })}
    </div>
  );
}
