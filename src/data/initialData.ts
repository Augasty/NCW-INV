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
  title: 'INVOICE',
  companyName: 'M/S. NETAJI CANDLE WORKS',
  name: '',
  companyAddress: '',
  companyAddress2: '',
  companyCountry: 'India',
  billTo: 'Bill To:',
  clientName: '',
  clientAddress: '',
  clientAddress2: '',
  clientCountry: 'United States',
  invoiceTitleLabel: 'Invoice#',
  invoiceTitle: '',
  invoiceDateLabel: 'Invoice Date',
  invoiceDate: '',
  invoiceDueDateLabel: 'Due Date',
  invoiceDueDate: '',
  productLineDescription: 'Item Description',
  productLineQuantity: 'Qty',
  productLineQuantityRate: 'Rate',
  productLineQuantityAmount: 'Amount',
  productLines: [
    {
      description: 'Brochure Design',
      HSN: '34',
      quantity: '2',
      rate: '100.00',
    },
    { ...initialProductLine },
    { ...initialProductLine },
  ],
  subTotalLabel: 'Sub Total',
  taxLabel: 'CGST(10%)',
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
  termLabel: 'Terms & Conditions',
  term: 'Please make the payment by the due date.',
}
