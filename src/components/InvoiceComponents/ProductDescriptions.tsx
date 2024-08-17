import EditableInput from '../EditableInput'; 
import EditableTextarea from '../EditableTextarea';

import Text from '../Text'
import View from '../View'
const ProductDescriptions = ({ 
  invoice, 
  handleChange, 
  handleProductLineChange, 
  
  handleAddProduct,
  handleRemove, 
  calculateAmount, 
  pdfMode 
}) => {
  return (
    <>
      {/* Product description starts here */}
      <View className="mt-10 bg-dark flex" pdfMode={pdfMode}>
        <View className="w-60 p-5" pdfMode={pdfMode}>
          <EditableInput
            className="white bold"
            value={invoice.productLineDescription}
            onChange={(value) => handleChange('productLineDescription', value)}
            pdfMode={pdfMode}
          />
        </View>
        <View className="w-18 p-5" pdfMode={pdfMode}>
        <EditableInput
            className="white bold right"
            value= "HSN"
            onChange={(value) => handleChange('productLineQuantity', value)}
            pdfMode={pdfMode}
          />
        </View>
        <View className="w-18 p-5" pdfMode={pdfMode}>
          <EditableInput
            className="white bold right"
            value={invoice.productLineQuantity}
            onChange={(value) => handleChange('productLineQuantity', value)}
            pdfMode={pdfMode}
          />
        </View>
        <View className="w-18 p-5" pdfMode={pdfMode}>
          <EditableTextarea
            className="white bold right"
            value={invoice.productLineQuantityRate}
            onChange={(value) => handleChange('productLineQuantityRate', value)}
            pdfMode={pdfMode}
            resizable="vertical"
          />
        </View>
        <View className="w-18 p-5" pdfMode={pdfMode}>
          <EditableInput
            className="white bold right"
            value={invoice.productLineQuantityAmount}
            onChange={(value) => handleChange('productLineQuantityAmount', value)}
            pdfMode={pdfMode}
          />
        </View>
      </View>

      {invoice.productLines.map((productLine, i) => {
        return pdfMode && productLine.description === '' ? (
          <Text key={i}></Text>
        ) : (
          <View key={i} className="row flex" pdfMode={pdfMode}>
            <View className="w-60 p-5 pb-10" pdfMode={pdfMode}>
              <EditableTextarea
                className="dark"
                rows={2}
                placeholder="Enter item name/description"
                value={productLine.description}
                onChange={(value) => handleProductLineChange(i, 'description', value)}
                pdfMode={pdfMode}
              />
            </View>
            <View className="w-18 p-5 pb-10"   pdfMode={pdfMode}>
              <EditableInput
                className="dark right"
                value={productLine.HSN}
                onChange={(value) => handleProductLineChange(i, 'HSN', value)}
                pdfMode={pdfMode}
              />
            </View>
            <View className="w-18 p-5 pb-10" pdfMode={pdfMode}>
              <EditableInput
                className="dark right"
                value={productLine.quantity}
                onChange={(value) => handleProductLineChange(i, 'quantity', value)}
                pdfMode={pdfMode}
              />
            </View>
            <View className="w-18 p-5 pb-10" pdfMode={pdfMode}>
              <EditableInput
                className="dark right"
                value={productLine.rate}
                onChange={(value) => handleProductLineChange(i, 'rate', value)}
                pdfMode={pdfMode}
              />
            </View>
            <View className="w-18 p-5 pb-10" pdfMode={pdfMode}>
              <Text className="dark right" pdfMode={pdfMode}>
                {calculateAmount(productLine.quantity, productLine.rate)}
              </Text>
            </View>
            {!pdfMode && (
              <button
                className="link row__remove"
                aria-label="Remove Row"
                title="Remove Row"
                onClick={() => handleRemove(i,'productLines')}
              >
                <span className="icon icon-remove bg-red"></span>
              </button>
            )}
          </View>
        );
      })}

      <View className="w-50 mt-10" pdfMode={pdfMode}>
        {!pdfMode && (
          <button className="link" onClick={handleAddProduct}>
            <span className="icon icon-add bg-green mr-10"></span>
            Add Line Item
          </button>
        )}
      </View>
    </>
  );
};

export default ProductDescriptions;
