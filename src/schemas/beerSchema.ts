import * as Yup from 'yup';

export const beerSchema = Yup.object().shape({
  price: Yup.string()
    .required('Preço é obrigatório')
    .matches(/^\d+(\,\d{1,2})?$/, 'O preço deve ser um valor válido em reais'),
  unit: Yup.number()
    .typeError('Unidades são obrigatórias')
    .required('Unidades são obrigatórias'),
  amountInMl: Yup.number()
    .typeError('Quantidade em ML é obrigatória')
    .required('Quantidade em ML é obrigatória'),
  name: Yup.string().optional(),
});
