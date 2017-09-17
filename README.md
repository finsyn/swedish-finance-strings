# swedish-finance-strings
Turns finance data into human readable strings in swedish

## Installation
```bash
npm i swedish-finance-strings
```

## Functions

### hrSum
`String -> String`

Makes a large amount human readable. Output style is inspired by how Avanza present large amounts

### fixedStr
`String -> String`

Truncates a string into a fixed length. Output can be set to be right or left-aligned

### hrTimeSince
`ISODateString -> String`

Gives time passed since input date in a reasonable human readable output format

### hrDaysAgo
`ISODateString -> String`

Gives days passed as a complete sentence

### hrActor
`String -> String`

Makes an official swedish company name human readable

### hrPrice
`Float -> String`

Makes a stock share price human readable
