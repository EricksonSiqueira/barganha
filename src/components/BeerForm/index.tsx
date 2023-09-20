'use client';

import { calculateCheapestBear } from '@/helpers/calculateCheapestBear';
import { beerSchema } from '@/schemas/beerSchema';
import { Beer } from '@/types/beer';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { set, useForm } from 'react-hook-form';
import styles from './styles.module.css';

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

  const submit = (beer: Beer) => {
    setBeers([...beers, beer]);
    setCheapestBeer(calculateCheapestBear([...beers, beer]));
    reset();
  };

  return (
    <div className={styles.beersWrapper}>
      {beers?.length ? (
        <ul className={styles.beersList}>
          {beers.map((beer, index) => (
            <li key={index++} className={`${styles.beerLi}`}>
              <span>R$ {beer.price}</span> - <span>{beer.beerType}</span>
              {cheapestBeer?.beerType === beer.beerType &&
              cheapestBeer?.price === beer.price ? (
                <span>Mais barata!</span>
              ) : null}
            </li>
          ))}
        </ul>
      ) : null}
      <form
        className="flex flex-col w-full gap-4"
        onSubmit={handleSubmit(submit)}
      >
        <div className={styles.beerFormInputsWrapper}>
          <label htmlFor="price" className="flex flex-col">
            <input
              {...register('price')}
              type="text"
              className={styles.beersFormInput}
              placeholder="4,99"
            />
            {errors.price?.message ? (
              <p className="text-red-700">{errors.price?.message}</p>
            ) : null}
          </label>
          <label htmlFor="beerType" className="flex">
            <select
              id="beerType"
              {...register('beerType')}
              className={styles.beersFormInput}
            >
              <option value="350ml">Lata 350ml</option>
              <option value="473ml">Latão 473ml</option>
              <option value="1l">Litrão 1L</option>
            </select>
          </label>
        </div>
        <button type="submit" className={styles.beersFormBtn}>
          Adicionar
        </button>
        <button
          type="button"
          className={styles.beersFormBtn}
          onClick={() => setCheapestBeer(calculateCheapestBear(beers))}
        >
          Calcular
        </button>
      </form>
    </div>
  );
}
