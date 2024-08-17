import { ProductLine, Invoice, taxTypes } from './types'
import candle from "../assets/burning-candle-sketch-free-vector.jpg"
export const initialProductLine: ProductLine = {
  description: '',
  HSN: '34',
  quantity: '1',
  rate: '0.00',
}

export const initialTaxType: taxTypes = {
  description: '',
  percent: '0.00'
}
export const initialInvoice: Invoice = {
  logo: candle,
  logoWidth: 100,
  title: 'TAX INVOICE',
  companyName: 'M/S. NETAJI CANDLE WORKS',
  name: '',
  companyAddress: 'Nimta, Belgharia. West Bengal',
  companyAddress2: `GSTIN: 19AKOPD9248H1Z0
PAN: AKOPD9248H`,
  companyCountry: 'India',
  billTo: 'Bill To:',
  clientName: '',
  clientAddress: '',
  clientAddress2: '',
  clientCountry: 'India',
  invoiceTitleLabel: 'Invoice No:',
  invoiceTitle: '',
  invoiceDateLabel: 'Invoice Date',
  invoiceDate: '',
  invoiceDueDateLabel: 'Due Date',
  invoiceDueDate: '',
  productLineDescription: 'Item Description',
  productLineQuantity: 'Qty (pkt)',
  productLineQuantityRate: 'Rate (per pkt)',
  productLineQuantityAmount: 'Amount',
  productLines: [
    {
      description: '',
      HSN: '3406',
      quantity: '',
      rate: '0.00',
    },
    { ...initialProductLine },
    { ...initialProductLine },
  ],
  subTotalLabel: 'Sub Total',
  transporter:'',
  taxTypes:[
    {
      description: 'CGST',
      percent:'0.00'
    },
    {
      description: 'SGST',
      percent:'0.00'
    },
    {
      description: 'IGST',
      percent:'0.00'
    }

  ],
  totalLabel: 'TOTAL',
  currency: '₹',
  notesLabel: 'Notes',
  notes: 'It was great doing business with you.',
  BankLabel: 'Bank Details:',
  BankDetails :`Bank Name: STATE BANK OF INDIA.
A/c No: 36157880784         Branch: BIRATI
IFS Code: SBIN0004604.`
}
