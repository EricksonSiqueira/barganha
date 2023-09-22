import * as Yup from 'yup';

export const beerSchema = Yup.object().shape({
  price: Yup.string()
    .required('a')
    .matches(/^\d+(\,\d{1,2})?$/, 'O preço deve ser um valor válido em reais'),
  unit: Yup.number().required('a'),
  amountInMl: Yup.number().required('a'),
  name: Yup.string().optional(),
});
