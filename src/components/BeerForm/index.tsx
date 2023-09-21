'use client';

import { calculateCheapestBear } from '@/helpers/calculateCheapestBear';
import { beerSchema } from '@/schemas/beerSchema';
import { Beer, BeerFromForm } from '@/types/beer';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './styles.module.css';
import DefaultInput from '../DefaultInput';
import { FaMoneyBill } from 'react-icons/fa';
import { createBeerObject } from '@/helpers/createBeerObject';

export default function BeerForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(beerSchema),
    mode: 'onSubmit',
  });

  const [beers, setBeers] = useState<Beer[]>([]);
  const [cheapestBeer, setCheapestBeer] = useState<Beer>();

  const submit = (beer: BeerFromForm) => {
    const newBeer = createBeerObject(beer);

    setBeers([...beers, newBeer]);
    setCheapestBeer(calculateCheapestBear([...beers, newBeer]));
    reset();
  };

  return (
    <div className={styles.beersWrapper}>
      {beers?.length ? (
        <ul className={styles.beersList}>
          {beers.map((beer, index) => (
            <li
              key={index++}
              className={`${styles.beerLi} ${
                cheapestBeer?.id === beer.id ? styles.cheapestBeer : ''
              }`}
            >
              <span>R$ {beer.price}</span> - <span>{beer.amountInMl}ml</span> -{' '}
              <span>{beer.unit}</span> -{' '}
              <span>
                {(beer.pricePerMl * 1000).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
              {/* {cheapestBeer?.id === beer.id ? <span>Mais barata!</span> : null} */}
            </li>
          ))}
        </ul>
      ) : null}
      <form className={styles.beerForm} onSubmit={handleSubmit(submit)}>
        <div className={styles.beerFormInputsWrapper}>
          <DefaultInput
            Icon={<FaMoneyBill size="20" />}
            error={''}
            name="price"
            labelText="Preço:"
            placeholder="40,99"
            register={register('price')}
          />
          <DefaultInput
            Icon={<FaMoneyBill size="20" />}
            error={''}
            type="number"
            labelText="Unidades:"
            placeholder="12"
            name="unit"
            register={register('unit')}
          />
          <DefaultInput
            Icon={<FaMoneyBill size="20" />}
            error={''}
            type="number"
            labelText="Ml:"
            placeholder="473"
            name="amountInMl"
            register={register('amountInMl')}
          />
        </div>
        <button type="submit" className={styles.beersFormBtn}>
          Adicionar
        </button>
      </form>
    </div>
  );
}
