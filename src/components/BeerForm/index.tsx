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
import { GiBeerStein, GiDroplets } from 'react-icons/gi';
import { createBeerObject } from '@/helpers/createBeerObject';
import { toLocaleCurrency } from '@/helpers/toLocaleCurrency';

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

  const [beers, setBeers] = useState<Beer[]>([
    {
      amountInMl: 473,
      unit: 12,
      price: '35,50',
      id: '8868ec69-1745-4170-8eb5-ece39a74c98d',
      pricePerMl: 0.006254404510218464,
    },
    {
      amountInMl: 1000,
      unit: 1,
      price: '7,20',
      id: 'fadc9bf0-68e3-4ce6-afc0-a2d9e3a85773',
      pricePerMl: 0.0072,
    },
    {
      amountInMl: 350,
      unit: 6,
      price: '32,30',
      id: '7d86fa3e-5357-49b2-bc20-6e9d8c0e2b59',
      pricePerMl: 0.015380952380952379,
    },
  ]);
  const [cheapestBeer, setCheapestBeer] = useState<Beer>(beers[0]);

  const submit = (beer: BeerFromForm) => {
    const newBeer = createBeerObject(beer);

    setBeers([...beers, newBeer]);
    setCheapestBeer(calculateCheapestBear([...beers, newBeer]));
    reset();
  };

  return (
    <div className={styles.beersWrapper}>
      {beers?.length ? (
        <table className={styles.beersTable}>
          <thead>
            <tr className={styles.beersTableRow}>
              <td>Preço</td>
              <td>Uni</td>
              <td>Ml</td>
              <td>preço/L</td>
            </tr>
          </thead>
          <tbody>
            {beers.map((beer) => (
              <tr
                className={`${styles.beersTableRow} ${
                  beer.id === cheapestBeer?.id ? styles.cheapestBeer : ''
                }`}
                key={beer.id}
              >
                <td>{beer.price}</td>
                <td>{beer.unit}</td>
                <td>{beer.amountInMl}</td>
                <td>{toLocaleCurrency(beer.pricePerMl * 1000)}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
            Icon={<GiBeerStein size="20" />}
            error={''}
            type="number"
            labelText="Unidades:"
            placeholder="12"
            name="unit"
            register={register('unit')}
          />
          <DefaultInput
            Icon={<GiDroplets size="20" />}
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
