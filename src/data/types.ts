import { CSSProperties } from 'react'

export interface ProductLine {
  description: string
  HSN: string
  quantity: string
  rate: string
}

export interface taxTypes {
  description: string
  percent: string
}

export interface Invoice {
  logo: string
  logoWidth: number
  title: string
  companyName: string
  name: string
  companyAddress: string
  companyAddress2: string
  companyCountry: string

  billTo: string
  clientName: string
  clientAddress: string
  clientAddress2: string
  clientCountry: string

  invoiceTitleLabel: string
  invoiceTitle: string
  invoiceDateLabel: string
  invoiceDate: string
  invoiceDueDateLabel: string
  invoiceDueDate: string

  productLineDescription: string
  productLineQuantity: string
  productLineQuantityRate: string
  productLineQuantityAmount: string

  productLines: ProductLine[]

  subTotalLabel: string
  transporter: string
  taxTypes: taxTypes[]

  totalLabel: string
  currency: string

  notesLabel: string
  notes: string
  BankLabel: string
  BankDetails: string
}

export interface CSSClasses {
  [key: string]: CSSProperties
}
