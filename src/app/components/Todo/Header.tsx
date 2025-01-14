import React from 'react';
import { FaFilter } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import Switch from 'src/libs/shared/ui/components/Switch';
import Badge from 'src/libs/shared/ui/components/Badge';
import { useRecoilState } from 'recoil';
import { COMPLETED, INCOMPLETE } from 'src/libs/shared/utils/helper';
import { filterSelector } from 'src/app/atom/todoSelector';

const Header = () => {
  const [filter, setFilter] = useRecoilState(filterSelector);

  const handleFilter = (isActive: boolean, filter: string) => {
    // set filter base on completed or incomplete
    setFilter({
      active: isActive,
      activeFilter: filter,
    });
  };

  const handleToggleFilter = () => {
    const activeFilter = filter.activeFilter;

    setFilter({
      active: true,
      activeFilter: activeFilter === COMPLETED ? INCOMPLETE : COMPLETED,
    });
  };

  return (
    <header className="absolute top-0 left-0 w-full bg-blue-500 text-white text-center px-10 py-2">
      <div className="md:flex justify-between ">
        <h2
          className={`text-2xl font-bold mb-3  justify-between ${
            !filter.active ? 'flex' : ''
          } `}
        >
          <span>Todo List</span>
          {filter.active && (
            <Badge
              bg={
                filter.activeFilter === COMPLETED
                  ? 'bg-green-100 '
                  : 'bg-blue-100 '
              }
              value={filter.activeFilter}
            />
          )}

          {!filter.active && (
            <FaFilter
              onClick={() => handleFilter(true, INCOMPLETE)}
              className="cursor-pointer mt-3 md:hidden text-sm"
            />
          )}
        </h2>

        <div>
          {!filter.active ? (
            <FaFilter
              onClick={() => handleFilter(true, INCOMPLETE)}
              className="cursor-pointer mt-2 hidden md:block"
            />
          ) : (
            <div className="flex mt-2">
              <Switch
                value=""
                label={'Incomplete / Completed'}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleToggleFilter(e.target.value)
                }
              />
              <MdCancel
                onClick={() => handleFilter(false, INCOMPLETE)}
                className="ml-2 text-red-500 cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
