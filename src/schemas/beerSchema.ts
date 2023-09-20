import * as Yup from 'yup';

export const beerSchema = Yup.object().shape({
  price: Yup.string()
    .required('O preço é obrigatório')
    .matches(/^\d+(\,\d{1,2})?$/, 'O preço deve ser um valor válido em reais'),
  beerType: Yup.string().oneOf(['350ml', '473ml', '1l']).required(),
});
