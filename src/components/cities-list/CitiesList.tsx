import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { setActiveCity } from '../../store/main/main';
import { Cities } from '../../constants';

function CitiesList() {
  const dispatch: Dispatch<any> = useDispatch();

  const listItems = Object.keys(Cities).map((city) => {
    return (
      <li
        className="locations__item"
        key={uuid()}
        onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
          dispatch(
            setActiveCity(
              Cities[e.currentTarget.innerText as keyof typeof Cities]
            )
          );
        }}
      >
        <a className="locations__item-link tabs__item" href="/#">
          <span>{city}</span>
        </a>
      </li>
    );
  });

  return <ul className="locations__list tabs__list">{listItems}</ul>;
}

export default CitiesList;
