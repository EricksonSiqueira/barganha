import { GiSodaCan, GiBarrel, GiBeerBottle } from 'react-icons/gi';
import { TbBeerFilled } from 'react-icons/tb';

export const iconByLiquidAmount = (amountInMl: number) => {
  if (amountInMl < 350) {
    return TbBeerFilled;
  }

  if (amountInMl < 600) {
    return GiSodaCan;
  }

  if (amountInMl < 2000) {
    return GiBeerBottle;
  }

  return GiBarrel;
};
