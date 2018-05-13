import API_MOCKS from './api-mocks'

const stockQuotes = 'https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=MSFT,AAPL,AMZN&apikey=7XE4YMUUY7OMYMLY'

export default {
    quotes: {
        stocks: stockQuotes,
        stocksMock: API_MOCKS
    }
}