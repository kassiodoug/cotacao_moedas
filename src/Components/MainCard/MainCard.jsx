import React from 'react'
import { CardMoedaPrincipal } from './style';

const MainCard = ({ setCurrencyApp, setSecCurrencyApp }) => {

  const validConversions = {
    "AED": [
      "BRL",
      "EUR",
      "USD"
    ],
    "AFN": [
      "USD"
    ],
    "ARS": [
      "BRL",
      "EUR",
      "USD"
    ],
    "AUD": [
      "BRL",
      "EUR",
      "USD"
    ],
    "BHD": [
      "EUR"
    ],
    "BOB": [
      "BRL",
      "USD"
    ],
    "BRL": [
      "AED",
      "ARS",
      "AUD",
      "BBD",
      "BHD",
      "BOB",
      "CAD",
      "CHF",
      "CLP",
      "CNY",
      "COP",
      "CZK",
      "DKK",
      "EGP",
      "EUR",
      "GBP",
      "HKD",
      "HUF",
      "IDR",
      "ILS",
      "INR",
      "ISK",
      "JMD",
      "JOD",
      "JPY",
      "KES",
      "KRW",
      "LBP",
      "LKR",
      "MAD",
      "MXN",
      "MYR",
      "NAD",
      "NOK",
      "NPR",
      "NZD",
      "OMR",
      "PAB",
      "PEN",
      "PHP",
      "PKR",
      "PLN",
      "PYG",
      "QAR",
      "RON",
      "RUB",
      "SAR",
      "SEK",
      "SGD",
      "THB",
      "TRY",
      "TWD",
      "USD",
      "UYU",
      "VEF",
      "XAF",
      "XCD",
      "XOF",
      "ZAR"
    ],
    "BTC": [
      "BRL",
      "EUR",
      "USD"
    ],
    "BYN": [
      "EUR",
      "USD"
    ],
    "CAD": [
      "BRL",
      "EUR",
      "USD"
    ],
    "CHF": [
      "BRL",
      "EUR",
      "USD"
    ],
    "CLP": [
      "BRL",
      "USD"
    ],
    "CNY": [
      "BRL",
      "EUR",
      "USD"
    ],
    "COP": [
      "BRL",
      "USD"
    ],
    "DKK": [
      "BRL",
      "EUR",
      "USD"
    ],
    "DOGE": [
      "BRL",
      "EUR",
      "USD"
    ],
    "EGP": [
      "EUR",
      "USD"
    ],
    "ETH": [
      "BRL",
      "EUR",
      "USD"
    ],
    "EUR": [
      "AED",
      "AFN",
      "ALL",
      "AMD",
      "ANG",
      "AOA",
      "ARS",
      "AUD",
      "AZN",
      "BAM",
      "BBD",
      "BDT",
      "BGN",
      "BHD",
      "BIF",
      "BND",
      "BOB",
      "BRL",
      "BSD",
      "BWP",
      "BYN",
      "BZD",
      "CAD",
      "CHF",
      "CLP",
      "CNY",
      "COP",
      "CRC",
      "CUP",
      "CVE",
      "CZK",
      "DJF",
      "DKK",
      "DOP",
      "DZD",
      "EGP",
      "ETB",
      "FJD",
      "GBP",
      "GEL",
      "GHS",
      "GMD",
      "GNF",
      "GTQ",
      "HKD",
      "HNL",
      "HRK",
      "HTG",
      "HUF",
      "IDR",
      "ILS",
      "INR",
      "IQD",
      "IRR",
      "ISK",
      "JMD",
      "JOD",
      "JPY",
      "KES",
      "KHR",
      "KRW",
      "KWD",
      "KYD",
      "KZT",
      "LAK",
      "LBP",
      "LKR",
      "LSL",
      "LYD",
      "MAD",
      "MDL",
      "MGA",
      "MKD",
      "MMK",
      "MOP",
      "MRO",
      "MUR",
      "MWK",
      "MXN",
      "MYR",
      "MZN",
      "NAD",
      "NGN",
      "NIO",
      "NOK",
      "NPR",
      "NZD",
      "OMR",
      "PAB",
      "PEN",
      "PGK",
      "PHP",
      "PKR",
      "PLN",
      "PYG",
      "QAR",
      "RON",
      "RSD",
      "RUB",
      "RWF",
      "SAR",
      "SCR",
      "SDG",
      "SDR",
      "SEK",
      "SGD",
      "SOS",
      "STD",
      "SVC",
      "SYP",
      "SZL",
      "THB",
      "TJS",
      "TND",
      "TRY",
      "TTD",
      "TWD",
      "TZS",
      "UAH",
      "UGX",
      "USD",
      "UYU",
      "UZS",
      "VEF",
      "VND",
      "XAF",
      "XCD",
      "XOF",
      "XPF",
      "ZAR",
      "ZMK"
    ],
    "FJD": [
      "USD"
    ],
    "GBP": [
      "BRL",
      "EUR",
      "USD"
    ],
    "GEL": [
      "EUR"
    ],
    "GHS": [
      "EUR",
      "USD"
    ],
    "HKD": [
      "BRL",
      "EUR",
      "USD"
    ],
    "HUF": [
      "EUR",
      "USD"
    ],
    "IDR": [
      "EUR",
      "USD"
    ],
    "ILS": [
      "BRL",
      "EUR",
      "USD"
    ],
    "INR": [
      "BRL",
      "EUR",
      "USD"
    ],
    "IQD": [
      "USD"
    ],
    "IRR": [
      "USD"
    ],
    "JOD": [
      "EUR",
      "USD"
    ],
    "JPY": [
      "BRL",
      "EUR",
      "USD"
    ],
    "KRW": [
      "EUR",
      "USD"
    ],
    "KWD": [
      "EUR",
      "USD"
    ],
    "KYD": [
      "USD"
    ],
    "LTC": [
      "BRL",
      "EUR",
      "USD"
    ],
    "MAD": [
      "EUR"
    ],
    "MXN": [
      "BRL",
      "EUR",
      "USD"
    ],
    "MYR": [
      "USD"
    ],
    "NIO": [
      "USD"
    ],
    "NOK": [
      "BRL",
      "EUR",
      "USD"
    ],
    "NZD": [
      "BRL",
      "EUR",
      "USD"
    ],
    "PEN": [
      "BRL",
      "EUR",
      "USD"
    ],
    "PHP": [
      "USD"
    ],
    "PLN": [
      "BRL",
      "EUR",
      "USD"
    ],
    "PYG": [
      "BRL",
      "USD"
    ],
    "RUB": [
      "BRL",
      "EUR",
      "USD"
    ],
    "SAR": [
      "BRL",
      "EUR",
      "USD"
    ],
    "SEK": [
      "BRL",
      "EUR",
      "USD"
    ],
    "SGD": [
      "BRL",
      "EUR",
      "USD"
    ],
    "SYP": [
      "USD"
    ],
    "THB": [
      "BRL",
      "USD"
    ],
    "TRY": [
      "BRL",
      "EUR",
      "USD"
    ],
    "TWD": [
      "BRL",
      "EUR",
      "USD"
    ],
    "UAH": [
      "USD"
    ],
    "USD": [
      "AED",
      "AFN",
      "ALL",
      "AMD",
      "ANG",
      "AOA",
      "ARS",
      "AUD",
      "AZN",
      "BBD",
      "BDT",
      "BGN",
      "BHD",
      "BIF",
      "BND",
      "BOB",
      "BRL",
      "BRLT",
      "BSD",
      "BWP",
      "BYN",
      "BZD",
      "CAD",
      "CHF",
      "CLP",
      "CNH",
      "CNY",
      "COP",
      "CRC",
      "CUP",
      "CZK",
      "DKK",
      "DOP",
      "DZD",
      "EGP",
      "ETB",
      "EUR",
      "FJD",
      "GBP",
      "GEL",
      "GHS",
      "GMD",
      "GNF",
      "GTQ",
      "HKD",
      "HNL",
      "HRK",
      "HTG",
      "HUF",
      "IDR",
      "ILS",
      "INR",
      "IQD",
      "IRR",
      "ISK",
      "JMD",
      "JOD",
      "JPY",
      "KES",
      "KGS",
      "KHR",
      "KMF",
      "KRW",
      "KWD",
      "KZT",
      "LAK",
      "LBP",
      "LKR",
      "LSL",
      "LYD",
      "MAD",
      "MDL",
      "MGA",
      "MKD",
      "MMK",
      "MNT",
      "MOP",
      "MUR",
      "MVR",
      "MWK",
      "MXN",
      "MYR",
      "MZN",
      "NAD",
      "NGN",
      "NGNI",
      "NIO",
      "NOK",
      "NPR",
      "NZD",
      "OMR",
      "PAB",
      "PEN",
      "PGK",
      "PHP",
      "PKR",
      "PLN",
      "PYG",
      "QAR",
      "RON",
      "RSD",
      "RUB",
      "RWF",
      "SAR",
      "SCR",
      "SDG",
      "SEK",
      "SGD",
      "SOS",
      "SVC",
      "SYP",
      "SZL",
      "THB",
      "TJS",
      "TMT",
      "TND",
      "TRY",
      "TTD",
      "TWD",
      "TZS",
      "UAH",
      "UGX",
      "UYU",
      "UZS",
      "VEF",
      "VND",
      "VUV",
      "XAF",
      "XCD",
      "XOF",
      "XPF",
      "YER",
      "ZAR",
      "ZMK",
      "ZWL"
    ],
    "UYU": [
      "BRL",
      "USD"
    ],
    "VND": [
      "USD"
    ],
    "XAGG": [
      "EUR",
      "USD"
    ],
    "XBR": [
      "USD"
    ],
    "XRP": [
      "BRL",
      "EUR",
      "USD"
    ],
    "ZAR": [
      "BRL",
      "EUR",
      "USD"
    ]
  }

  const handleCurrency = (e) => {
    let mainCurrency = e.target.value
    setCurrencyApp({ mainCurrency: mainCurrency, secCurrency: validConversions[mainCurrency] })
    setSecCurrencyApp([])
  }

  return (
    <section>
      <CardMoedaPrincipal>
        <h3>Moeda Principal</h3>
        <select name="" id="" onChange={(e) => handleCurrency(e)}>
          {Object.keys(validConversions).map((item, index) => <option key={index}  >{item}</option>)}
        </select>
      </CardMoedaPrincipal>
    </section>
  )
}

export default MainCard;