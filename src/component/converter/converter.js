import React, { useEffect, useState } from 'react';
import { Block } from './Block';
import './index.css';

function Converter() {
    const [fromCurrency, setFromCurrency] = useState('RUB');
    const [toCurrency, setToCurrency] = useState('USD');
    const [fromPrice, setFromPrice] = useState(0);
    const [toPrice, setToPrice] = useState(0);
    const [rates, setRates] = useState({
      "RUB": 60.524998,
      "USD": 1,
      "EUR": 0.98161, 
      "GBP": 0.828329,

    });

    const onChangeFromPrice = (value) => {
      const price = value / rates[fromCurrency];
      const result = price * rates[toCurrency]
      
      setToPrice(result);
      setFromPrice(value);
    }

    const onChangeToPrice = (value) => {
      const result = (rates[fromCurrency] / rates[toCurrency]) * value
      
      setFromPrice(result)
      setToPrice(value)
    }


    useEffect(()=>{
      onChangeFromPrice(fromPrice)
    },[fromCurrency])

    useEffect(()=>{
      onChangeToPrice(toPrice)
    },[toCurrency])

  return (
    <div className="converter">
      <Block  value={fromPrice} 
              currency={fromCurrency} 
              onChangeCurrency={setFromCurrency} 
              onChangeValue={onChangeFromPrice} />

      <Block  value={toPrice} 
              currency={toCurrency}
              onChangeCurrency={setToCurrency}
              onChangeValue={onChangeToPrice}  />
    </div>
  );
}

export default Converter;