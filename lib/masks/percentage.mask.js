import BaseMask from "./_base.mask";

const PERCENTAGE_MASK_SETTINGS = {
  precision: 2,
};

export default class OnlyNumbersMask extends BaseMask {
  static getType() {
    return "percentage";
  }

  getValue(value, settings) {
    var val = this._removeNotFloat(String(value))
    if (!val) {
      val = "0"
    }
    let mergedSettings = super.mergeSettings(PERCENTAGE_MASK_SETTINGS, settings)
    let sanitized = this._sanitize(val, mergedSettings)
    console.log(`val ${val} sanitized ${sanitized}`)

    return sanitized + "%";
  }

  getRawValue(maskedValue, settings) {
    let mergedSettings = super.mergeSettings(
      PERCENTAGE_MASK_SETTINGS,
      settings
    );
    let normalized = this._removeNotFloat(maskedValue)


    return Number(normalized);
  }

  validate(value, settings) {
    return true;
  }

  getMask(value, settings) {
    return "";
  }

  _sanitize(value, settings) {
    if (typeof value === "number") {
      return value.toFixed(settings.precision)
    }
    return parseFloat(value).toFixed(settings.precision)
  }
  _removeNotFloat(text) {
    return text.replace(/[^0-9.,]+/g, "")
  }
}
