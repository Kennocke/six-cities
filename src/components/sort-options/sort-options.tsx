/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { setActiveSort } from '../../store/main/main';
import { SortOptions as SortOptionsConst } from '../../constants';
import { selectActiveSort } from '../../store/main/selectors';

export default function SortOptions() {
  const dispatch = useDispatch();
  const activeSort = useSelector(selectActiveSort);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickList = () => {
    setIsOpen((listOpenState) => !listOpenState);
  };

  const handleClickItem = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(
      setActiveSort(
        SortOptionsConst[
          e.currentTarget.innerText as keyof typeof SortOptionsConst
        ]
      )
    );
    setIsOpen(false);
  };

  const elemets = Object.keys(SortOptionsConst).map((val) => {
    return (
      <li key={uuid()} onClick={handleClickItem} className="places__option">
        {val}
      </li>
    );
  });

  const classList = `places__options places__options--custom ${
    isOpen ? 'places__options--opened' : ''
  }`;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        role="menu"
        onClick={handleClickList}
        className="places__sorting-type"
      >
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={classList}>{elemets}</ul>
    </form>
  );
}
