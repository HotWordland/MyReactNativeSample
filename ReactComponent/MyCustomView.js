var { requireNativeComponent } = require('react-native');

// requireNativeComponent automatically resolves this to "RCTMapManager"
module.exports = requireNativeComponent('MyCustomView', null);