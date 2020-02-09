Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _get=function get(object,property,receiver){if(object===null)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined;}else{return get(parent,property,receiver);}}else if("value"in desc){return desc.value;}else{var getter=desc.get;if(getter===undefined){return undefined;}return getter.call(receiver);}};var _base=require("./_base.mask");var _base2=_interopRequireDefault(_base);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var PERCENTAGE_MASK_SETTINGS={precision:2};var OnlyNumbersMask=function(_BaseMask){_inherits(OnlyNumbersMask,_BaseMask);function OnlyNumbersMask(){_classCallCheck(this,OnlyNumbersMask);return _possibleConstructorReturn(this,(OnlyNumbersMask.__proto__||Object.getPrototypeOf(OnlyNumbersMask)).apply(this,arguments));}_createClass(OnlyNumbersMask,[{key:"getValue",value:function getValue(value,settings){var val=this._removeNotFloat(String(value));if(!val){val="0";}var mergedSettings=_get(OnlyNumbersMask.prototype.__proto__||Object.getPrototypeOf(OnlyNumbersMask.prototype),"mergeSettings",this).call(this,PERCENTAGE_MASK_SETTINGS,settings);var sanitized=this._sanitize(val,mergedSettings);return sanitized+"%";}},{key:"getRawValue",value:function getRawValue(maskedValue,settings){var mergedSettings=_get(OnlyNumbersMask.prototype.__proto__||Object.getPrototypeOf(OnlyNumbersMask.prototype),"mergeSettings",this).call(this,PERCENTAGE_MASK_SETTINGS,settings);var normalized=this._removeNotFloat(maskedValue);return Number(normalized);}},{key:"validate",value:function validate(value,settings){return true;}},{key:"getMask",value:function getMask(value,settings){return"";}},{key:"_sanitize",value:function _sanitize(value,settings){if(typeof value==="number"){return value.toFixed(settings.precision);}return parseFloat(value).toFixed(settings.precision);}},{key:"_removeNotFloat",value:function _removeNotFloat(text){return text.replace(/[^0-9.,]+/g,"");}}],[{key:"getType",value:function getType(){return"percentage";}}]);return OnlyNumbersMask;}(_base2.default);exports.default=OnlyNumbersMask;