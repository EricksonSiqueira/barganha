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
import { BiSolidLabel } from 'react-icons/bi';
import { createBeerObject } from '@/helpers/createBeerObject';
import BeerList from '../BeerList';

export default function BeerForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(beerSchema),
    mode: 'onBlur',
    resetOptions: {
      keepTouched: false,
    },
  });

  const [beers, setBeers] = useState<Beer[]>([]);
  const [cheapestBeer, setCheapestBeer] = useState<Beer>();

  const removeBeer = (beerId: string) => {
    const newBeers = beers.filter((beer) => beer.id !== beerId);
    setBeers(newBeers);

    if (newBeers.length > 0) {
      setCheapestBeer(calculateCheapestBear(newBeers));
    }
  };

  const submit = (beer: BeerFromForm) => {
    const newBeer = createBeerObject(beer);

    const newBeers = [newBeer, ...beers];

    setBeers(newBeers);
    setCheapestBeer(calculateCheapestBear(newBeers));
    reset();
  };

  return (
    <div className={styles.beersWrapper}>
      <form className={styles.beerForm} onSubmit={handleSubmit(submit)}>
        <div className={styles.beerFormInputsWrapper}>
          <DefaultInput
            Icon={<FaMoneyBill size="20" />}
            error={errors.price?.message}
            name="price"
            labelText="Preço*"
            placeholder="40,99"
            register={register('price')}
          />
          <DefaultInput
            Icon={<GiBeerStein size="20" />}
            error={errors.unit?.message}
            type="number"
            labelText="Unidades*"
            placeholder="12"
            name="unit"
            register={register('unit')}
          />
          <DefaultInput
            Icon={<GiDroplets size="20" />}
            error={errors.amountInMl?.message}
            type="number"
            labelText="Ml*"
            placeholder="473"
            name="amountInMl"
            register={register('amountInMl')}
          />
        </div>
        <DefaultInput
          Icon={<BiSolidLabel size="20" />}
          type="text"
          labelText="Nome"
          placeholder="Skol pilsen"
          name="name"
          register={register('name')}
        />
        <button type="submit" className={styles.beersFormBtn}>
          Adicionar
        </button>
      </form>
      <BeerList
        beers={beers}
        cheapestBeer={cheapestBeer}
        removeBeer={removeBeer}
      />
    </div>
  );
}
