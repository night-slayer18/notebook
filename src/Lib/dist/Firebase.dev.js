"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.firestore = exports.googleAuthProvider = exports.auth = void 0;

var _app = _interopRequireDefault(require("firebase/compat/app"));

require("firebase/compat/auth");

require("firebase/compat/firestore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseConfig = {
  apiKey: "AIzaSyCFtZr9ZLe4DcOzh7UV1ubtOy8t_RLv6Tw",
  authDomain: "notebook-2f744.firebaseapp.com",
  projectId: "notebook-2f744",
  storageBucket: "notebook-2f744.appspot.com",
  messagingSenderId: "760689779531",
  appId: "1:760689779531:web:d0c911c6a359636dc13ece",
  measurementId: "G-X8DJKRD54J"
};

if (!_app["default"].apps.length) {
  _app["default"].initializeApp(firebaseConfig);
}

var auth = _app["default"].auth();

exports.auth = auth;
var googleAuthProvider = new _app["default"].auth.GoogleAuthProvider();
exports.googleAuthProvider = googleAuthProvider;

var firestore = _app["default"].firestore();

exports.firestore = firestore;