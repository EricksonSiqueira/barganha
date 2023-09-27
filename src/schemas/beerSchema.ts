import * as Yup from 'yup';

export const beerSchema = Yup.object().shape({
  price: Yup.string()
    .required('Preço é obrigatório')
    .matches(/^\d+(\,\d{1,2})?$/, 'O preço deve ser um valor válido em reais'),
  unit: Yup.number()
    .typeError('Quantidade é obrigatório')
    .required('Quantidade é obrigatório'),
  amountInMl: Yup.number()
    .typeError('Quantidade em ML é obrigatório')
    .required('Quantidade em ML é obrigatório'),
  name: Yup.string().optional(),
});
