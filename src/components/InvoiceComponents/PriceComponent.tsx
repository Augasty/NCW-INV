import EditableInput from "../EditableInput";

import Text from "../Text";
import View from "../View";

import numberToWords from "number-to-words";
const PriceComponent = ({
  invoice,
  handleChange,
  handleAddTaxType,
  subTotal,
  saleTax,
  handleRemove,
  pdfMode,
  handleTaxTypeChange,
}) => {
  const totalInWords = numberToWords.toWords(
    typeof subTotal !== "undefined" && typeof saleTax !== "undefined"
      ? subTotal + saleTax
      : 0
  );

  const totalInWordsSplitted = totalInWords.split(" ");

  const totalInWordsUppercase = totalInWordsSplitted
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
  return (
    <>
      {" "}
      <View className="flex" pdfMode={pdfMode}>
        <View className="w-50 mt-10" pdfMode={pdfMode}>
          <View pdfMode={pdfMode}>
            <Text className="left dark" pdfMode={pdfMode}>Duplicate for Transporter:
            </Text>
          </View>
          <EditableInput 
            placeholder="give vehicle number here..."
            value={invoice.transporter}
            onChange={(value) => handleChange("transporter", value)}
            pdfMode={pdfMode}
          />
        </View>
        <View className="w-50 mt-20" pdfMode={pdfMode}>
          <View className="flex" pdfMode={pdfMode}>
            <View className="w-50 p-5" pdfMode={pdfMode}>
              <EditableInput
                value={invoice.subTotalLabel}
                onChange={(value) => handleChange("subTotalLabel", value)}
                pdfMode={pdfMode}
              />
            </View>
            <View className="w-50 p-5" pdfMode={pdfMode}>
              <Text className="right bold dark" pdfMode={pdfMode}>
                {subTotal?.toFixed(2)}
              </Text>
            </View>
          </View>

          {invoice.taxTypes.map((taxType, i) => {
            return pdfMode && taxType.description === "" ? (
              <Text key={i}></Text>
            ) : (
              <View key={i} className="row flex" pdfMode={pdfMode}>
                {!pdfMode ? (
                  // website only
                  <>
                    <View className="w-33 p-5" pdfMode={pdfMode}>
                      <EditableInput
                        placeholder="Give Charge Type"
                        value={taxType.description}
                        onChange={(value) =>
                          handleTaxTypeChange(i, "description", value)
                        }
                        pdfMode={pdfMode}
                      />
                    </View>
                    <View className="w-33 p-5" pdfMode={pdfMode}>
                      <EditableInput
                        value={taxType.percent}
                        onChange={(value) =>
                          handleTaxTypeChange(i, "percent", value)
                        }
                        pdfMode={pdfMode}
                      />
                    </View>
                    <View className="w-33 p-5" pdfMode={pdfMode}>
                      <Text className="right bold dark" pdfMode={pdfMode}>
                        {((subTotal * taxType.percent) / 100).toFixed(2)}
                      </Text>
                    </View>

                    <button
                      key={i}
                      className="link row__remove"
                      aria-label="Remove Row"
                      title="Remove Row"
                      onClick={() => handleRemove(i, "taxTypes")}
                    >
                      <span className="icon icon-remove bg-red"></span>
                    </button>
                  </>
                ) : (
                  // print only
                  <>
                    <View className="w-50 p-5" pdfMode={pdfMode}>
                      <EditableInput
                        value={`${taxType.description} ( ${taxType.percent}%)`}
                        onChange={(value) =>
                          handleTaxTypeChange(i, "description", value)
                        }
                        pdfMode={pdfMode}
                      />
                    </View>

                    <View className="w-50 p-5" pdfMode={pdfMode}>
                      <Text className="right bold dark" pdfMode={pdfMode}>
                        {((subTotal * taxType.percent) / 100).toFixed(2)}
                      </Text>
                    </View>
                  </>
                )}
              </View>
            );
          })}
          <View className="w-50 mt-10 mb-5" pdfMode={pdfMode}>
            {!pdfMode && (
              <button className="link" onClick={handleAddTaxType}>
                <span className="icon icon-add bg-green mr-10"></span>
                Add Charge Type
              </button>
            )}
          </View>

          <View className="flex bg-gray p-5" pdfMode={pdfMode}>
            <View className="w-50 p-5" pdfMode={pdfMode}>
              <EditableInput
                className="bold"
                value={invoice.totalLabel}
                onChange={(value) => handleChange("totalLabel", value)}
                pdfMode={pdfMode}
              />
            </View>
            <View className="w-50 p-5 flex" pdfMode={pdfMode}>
              <EditableInput
                className="dark bold right ml-30"
                value={invoice.currency}
                onChange={(value) => handleChange("currency", value)}
                pdfMode={pdfMode}
              />
              <Text className="right bold dark w-auto" pdfMode={pdfMode}>
                {(typeof subTotal !== "undefined" &&
                typeof saleTax !== "undefined"
                  ? subTotal + saleTax
                  : 0
                ).toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className="w-100 mt-10" pdfMode={pdfMode}>
        <Text className="left bold dark" pdfMode={pdfMode}>
          Total: {totalInWordsUppercase} Rupees.
        </Text>
      </View>
    </>
  );
};

export default PriceComponent;
