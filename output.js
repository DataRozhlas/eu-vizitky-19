<<<<<<< HEAD
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/data.js":
/*!********************!*\
  !*** ./js/data.js ***!
  \********************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"data\", function() { return data; });\nvar data = {\n  \"1\": {\n    \"jmeno\": \"Jiří Domlátil\",\n    \"povolani\": \"stavební inženýr, předseda KAN\",\n    \"partaj\": \"Klub angažovaných nestraníků\",\n    \"file\": \"1_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"2\": {\n    \"jmeno\": \"František Matějka\",\n    \"povolani\": \"předs. strany, zakl. a řed. o.p.s. bez veř. dotací\",\n    \"partaj\": \"Strana nezávislosti ČR\",\n    \"file\": \"2_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"3\": {\n    \"jmeno\": \"Antonín Baudyš\",\n    \"povolani\": \"konzultant, před. kraj. org. hnutí CESTA\",\n    \"partaj\": \"CESTA ODPOVĚDNÉ SPOLEČNOSTI\",\n    \"file\": \"3_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"4\": {\n    \"jmeno\": \"Ivan Šterzl\",\n    \"povolani\": \"lékař, zakl. imunoendokrinologie v ČR\",\n    \"partaj\": \"Národní socialisté\",\n    \"file\": \"4_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"5\": {\n    \"jmeno\": \"Jan Zahradil\",\n    \"povolani\": \"poslanec Evropského parlamentu\",\n    \"partaj\": \"Občanská demokratická strana\",\n    \"file\": \"5_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"6\": {\n    \"jmeno\": \"Jiří Kyjovský\",\n    \"povolani\": \"generální ředitel TAXI Otnice, zastupitel ze Šimic\",\n    \"partaj\": \"ANO, vytrollíme europarlament\",\n    \"file\": \"6_3\",\n    \"afile\": \"\",\n    \"pozn\": \"předseda hnutí, třetí na kandidátce\"\n  },\n  \"7\": {\n    \"jmeno\": \"Pavel Poc\",\n    \"povolani\": \"poslanec EP, biolog\",\n    \"partaj\": \"Česká str.sociálně demokrat.\",\n    \"file\": \"7_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"8\": {\n    \"jmeno\": \"Štefan Gorol\",\n    \"povolani\": \"romský nezávislý aktivista\",\n    \"partaj\": \"Romská demokratická strana\",\n    \"file\": \"8_2\",\n    \"afile\": \"\",\n    \"pozn\": \"druhý na kandidátce\"\n  },\n  \"9\": {\n    \"jmeno\": \"Kateřina Konečná\",\n    \"povolani\": \"poslankyně Evropského parlamentu\",\n    \"partaj\": \"Komunistická str.Čech a Moravy\",\n    \"file\": \"9_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"10\": {\n    \"jmeno\": \"Tomáš Vandas\",\n    \"povolani\": \"předseda DSSS a podnikatel\",\n    \"partaj\": \"Koalice DSSS a NF\",\n    \"file\": \"10_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"11\": {\n    \"jmeno\": \"Miroslav Sládek\",\n    \"povolani\": \"bojovník proti bezpráví a totalitě\",\n    \"partaj\": \"SPR-Republ.str.Čsl. M.Sládka\",\n    \"file\": \"11_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"12\": {\n    \"jmeno\": \"Adam Benjamin Bartoš\",\n    \"povolani\": \"předseda strany\",\n    \"partaj\": \"Koalice ND, Rozumní\",\n    \"file\": \"12_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"13\": {\n    \"jmeno\": \"Petr Cibulka\",\n    \"povolani\": \"pětinásobný politický vězeň, vydavatel seznamů StB\",\n    \"partaj\": \"Volte Pr.Blok www.cibulka.net\",\n    \"file\": \"13_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"14\": {\n    \"jmeno\": \"Josef Zahradník\",\n    \"povolani\": \"dopravní specialista kolejových vozidel\",\n    \"partaj\": \"NE-VOLIM.CZ\",\n    \"file\": \"14_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"15\": {\n    \"jmeno\": \"Radek Kňava\",\n    \"povolani\": \"personalista v automobilce\",\n    \"partaj\": \"Pro Česko\",\n    \"file\": \"15_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"16\": {\n    \"jmeno\": \"Ivan Holoubek\",\n    \"povolani\": \"profesor chemie životního prostředí PřF MU\",\n    \"partaj\": \"Vědci pro Českou republiku\",\n    \"file\": \"16_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"17\": {\n    \"jmeno\": \"Jiří Vítek\",\n    \"povolani\": \"místostarosta MČ Praha 8, předseda Patriotů ČR\",\n    \"partaj\": \"Koalice ČSNS, Patrioti ČR\",\n    \"file\": \"17_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"18\": {\n    \"jmeno\": \"Petr Kováč\",\n    \"povolani\": \"podnikatel\",\n    \"partaj\": \"JSI PRO?Jist.Solid.In.pro bud.\",\n    \"file\": \"18_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"19\": {\n    \"jmeno\": \"Tomáš Kotora\",\n    \"povolani\": \"ředitel plaveckého bazénu Plzeň, ekonom\",\n    \"partaj\": \"PRO Zdraví a Sport\",\n    \"file\": \"19_3\",\n    \"afile\": \"\",\n    \"pozn\": \"třetí na kandidátce\"\n  },\n  \"20\": {\n    \"jmeno\": \"Vladan Ševčík\",\n    \"povolani\": \"energetik a jednatel vinařství, člen rady MZH\",\n    \"partaj\": \"Moravské zemské hnutí\",\n    \"file\": \"20_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"21\": {\n    \"jmeno\": \"David Rath\",\n    \"povolani\": \"lékař\",\n    \"partaj\": \"Česká Suverenita\",\n    \"file\": \"21_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"22\": {\n    \"jmeno\": \"Daniel Konečný\",\n    \"povolani\": \"dotační poradce\",\n    \"partaj\": \"TVŮJ KANDIDÁT\",\n    \"file\": \"22_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"23\": {\n    \"jmeno\": \"Pavel Telička\",\n    \"povolani\": \"místopředseda Evropského parlamentu\",\n    \"partaj\": \"HLAS\",\n    \"file\": \"23_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"24\": {\n    \"jmeno\": \"Vít Jedlička\",\n    \"povolani\": \"prezident Liberlandu\",\n    \"partaj\": \"Koalice Svobodní, RČ\",\n    \"file\": \"24_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"25\": {\n    \"jmeno\": \"Jiří Pospíšil\",\n    \"povolani\": \"právník, př. spr. rady Museum Kampa, europoslanec\",\n    \"partaj\": \"Koalice STAN, TOP 09\",\n    \"file\": \"25_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"26\": {\n    \"jmeno\": \"Marcel Kolaja\",\n    \"povolani\": \"bojovník za otevřený software, manažer\",\n    \"partaj\": \"Česká pirátská strana\",\n    \"file\": \"26_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"27\": {\n    \"jmeno\": \"Ivan David\",\n    \"povolani\": \"lékař, pedagog\",\n    \"partaj\": \"Svob.a př.dem.-T.Okamura (SPD)\",\n    \"file\": \"27_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"28\": {\n    \"jmeno\": \"Jiří Černohorský\",\n    \"povolani\": \"předseda spolku ČEST, SVOBODA, RESPEKT\",\n    \"partaj\": \"ALIANCE NÁRODNÍCH SIL\",\n    \"file\": \"28_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"29\": {\n    \"jmeno\": \"Dita Charanzová\",\n    \"povolani\": \"poslankyně Evropského parlamentu\",\n    \"partaj\": \"ANO 2011\",\n    \"file\": \"29_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"30\": {\n    \"jmeno\": \"Pavel Šrámek\",\n    \"povolani\": \"farmář a podnikatel\",\n    \"partaj\": \"Agrární demokratická strana\",\n    \"file\": \"30_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"31\": {\n    \"jmeno\": \"Jiří Pernes\",\n    \"povolani\": \"historik\",\n    \"partaj\": \"Moravané\",\n    \"file\": \"31_3\",\n    \"afile\": \"\",\n    \"pozn\": \"třetí na kandidátce\"\n  },\n  \"32\": {\n    \"jmeno\": \"Matouš Bulíř\",\n    \"povolani\": \"grafik\",\n    \"partaj\": \"PRVNÍ REPUBLIKA\",\n    \"file\": \"32_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"33\": {\n    \"jmeno\": \"Andrea Bychlová\",\n    \"povolani\": \"právnička, před. spolku Německý ovčák v nouzi z.s.\",\n    \"partaj\": \"Demokratická strana zelených\",\n    \"file\": \"33_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"34\": {\n    \"jmeno\": \"Jaroslav Bašta\",\n    \"povolani\": \"publicista, diplomat\",\n    \"partaj\": \"BEZPEČNOST,ODPOVĚDNOST,SOLID.\",\n    \"file\": \"34_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"35\": {\n    \"jmeno\": \"Josef Valihrach\",\n    \"povolani\": \"trojnásobný Vinař roku ČR, vítěz Farmy roku 2018\",\n    \"partaj\": \"Koalice NEZ, Soukromníci\",\n    \"file\": \"35_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"36\": {\n    \"jmeno\": \"Jaromír Štětina\",\n    \"povolani\": \"europoslanec, spisovatel, novinář\",\n    \"partaj\": \"Evropa společně\",\n    \"file\": \"36_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"37\": {\n    \"jmeno\": \"Pavel Poláček\",\n    \"povolani\": \"jednatel společnosti\",\n    \"partaj\": \"KONZERVATIVNÍ ALTERNATIVA\",\n    \"file\": \"37_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"38\": {\n    \"jmeno\": \"Pavel Svoboda\",\n    \"povolani\": \"poslanec Evropského parlamentu\",\n    \"partaj\": \"Křesť.demokr.unie-Čs.str.lid.\",\n    \"file\": \"38_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  },\n  \"39\": {\n    \"jmeno\": \"Klára Alžběta Samková\",\n    \"povolani\": \"advokátka\",\n    \"partaj\": \"Alternativa pro Česk. rep.2017\",\n    \"file\": \"39_1\",\n    \"afile\": \"\",\n    \"pozn\": \"lídr kandidátky\"\n  }\n};\n\n//# sourceURL=webpack:///./js/data.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./js/data.js\");\n\nvar host;\n\nif (window.location.href.indexOf(\"irozhlas\") === -1 && window.location.href.indexOf(\"localhost\") === -1) {\n  host = window.location.href.split(\"?\")[0];\n} else {\n  host = \"https://data.irozhlas.cz/eu-vizitky-19/\";\n}\n\nfunction makeSelect() {\n  var id = window.location.href.split(\"?\")[1];\n\n  if (id) {\n    var filtered = _data__WEBPACK_IMPORTED_MODULE_0__[\"data\"][id];\n    if (!filtered) return;\n    document.getElementById(id).scrollIntoView();\n    window.scrollBy(0, -50);\n  }\n}\n\nfunction makeTable() {\n  var _this = this;\n\n  var header = document.createElement(\"h1\");\n  header.appendChild(document.createTextNode(\"Evropský parlament\"));\n  var outList = document.createElement(\"ul\");\n  Object.keys(_data__WEBPACK_IMPORTED_MODULE_0__[\"data\"]).forEach(function (per) {\n    var entry = document.createElement(\"li\");\n    entry.id = per;\n    entry.innerHTML = \"\\n      <div class=\\\"right\\\">\\n        <h2>\\n          <span class=\\\"cislo\\\">\".concat(per.split(\"_\")[0], \"</span>\\n          <span>\").concat(_data__WEBPACK_IMPORTED_MODULE_0__[\"data\"][per].jmeno, \"</span>\\n        </h2>\\n        <span class=\\\"strana\\\">\").concat(_data__WEBPACK_IMPORTED_MODULE_0__[\"data\"][per].partaj, \"</span>\\n        <span class=\\\"supplemental\\\">\").concat(_data__WEBPACK_IMPORTED_MODULE_0__[\"data\"][per].povolani, \"</span>\\n        \").concat(_data__WEBPACK_IMPORTED_MODULE_0__[\"data\"][per].pozn != null ? \"<div><span class=\\\"supplemental\\\">\".concat(_data__WEBPACK_IMPORTED_MODULE_0__[\"data\"][per].pozn, \"</span></div>\") : \"\", \"\\n        <span class=\\\"share\\\">Sd\\xEDlet na <a class=\\\"share-link\\\" href=\\\"#\\\" data-share-link=\", \"https://www.facebook.com/sharer/sharer.php?u=\".concat(window.location.href.split(\"?\")[0], \"?\").concat(per), \">Facebook</a> | <a class=\\\"share-link\\\" href=\\\"#\\\" data-share-link=\", \"https://twitter.com/home?status=\".concat(window.location.href.split(\"?\")[0], \"?\").concat(per), \">Twitter</a></span>\\n        \").concat(_data__WEBPACK_IMPORTED_MODULE_0__[\"data\"][per].afile !== \"x\" ? \"<div><audio class=\\\"player\\\" src=\\\"\".concat(host, \"media/audio/\").concat(_data__WEBPACK_IMPORTED_MODULE_0__[\"data\"][per].file, \".mp3\\\" preload=\\\"none\\\" controls=\\\"yes\\\"></audio></div>\") : \"\", \"\\n      </div>\\n      <div class=\\\"left\\\">\\n        <img width=\\\"120\\\" height=\\\"180\\\" alt=\\\"\").concat(_data__WEBPACK_IMPORTED_MODULE_0__[\"data\"][per].jmeno, \"\\\" src=\\\"\", \"\".concat(host, \"media/foto/\").concat(_data__WEBPACK_IMPORTED_MODULE_0__[\"data\"][per].file, \".jpg\"), \"\\\">\\n      </div>\\n    \"); // <a target=\"_blank\" href=\"https://www.irozhlas.cz/volby/senatni-volby-2018/kandidati-vizitky/embed-vizitky-senatoru#' + data[per].file +'\">Embed</a>\n\n    outList.appendChild(entry);\n  });\n  var bottom = document.getElementById(\"bottom\");\n  bottom.appendChild(header);\n  bottom.appendChild(outList);\n  var shareLinks = document.getElementsByClassName(\"share-link\");\n\n  for (var i = 0; i < shareLinks.length; i++) {\n    shareLinks[i].addEventListener(\"click\", function (e) {\n      e.preventDefault();\n      window.open(e.target.attributes[\"data-share-link\"].textContent, \"Sdílení\", \"width=550,height=450,scrollbars=no\");\n    });\n  }\n\n  var players = document.getElementsByClassName(\"player\");\n\n  for (var _i = 0; _i < players.length; _i++) {\n    players[_i].addEventListener(\"click\", function () {\n      ga(\"gtm1.send\", \"event\", \"ondemand\", \"play\", \"Volby do Evropsk\\xE9ho parlamentu - vizitka l\\xEDdra \".concat(_this.src.split(\"/\").slice(-1)[0].split(\".\")[0]));\n    });\n  }\n}\n\nmakeTable();\nmakeSelect();\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ })

/******/ });
=======
!function(a){var e={};function n(o){if(e[o])return e[o].exports;var t=e[o]={i:o,l:!1,exports:{}};return a[o].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=a,n.c=e,n.d=function(a,e,o){n.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:o})},n.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},n.t=function(a,e){if(1&e&&(a=n(a)),8&e)return a;if(4&e&&"object"==typeof a&&a&&a.__esModule)return a;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var t in a)n.d(o,t,function(e){return a[e]}.bind(null,t));return o},n.n=function(a){var e=a&&a.__esModule?function(){return a.default}:function(){return a};return n.d(e,"a",e),e},n.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},n.p="",n(n.s=0)}([function(a,e,n){"use strict";n.r(e);var o,t={1:{jmeno:"Jiří Domlátil",povolani:"stavební inženýr, předseda KAN",partaj:"Klub angažovaných nestraníků",file:"1_1",afile:"",pozn:"lídr kandidátky"},2:{jmeno:"František Matějka",povolani:"předs. strany, zakl. a řed. o.p.s. bez veř. dotací",partaj:"Strana nezávislosti ČR",file:"2_1",afile:"",pozn:"lídr kandidátky"},3:{jmeno:"Antonín Baudyš",povolani:"konzultant, před. kraj. org. hnutí CESTA",partaj:"CESTA ODPOVĚDNÉ SPOLEČNOSTI",file:"3_1",afile:"",pozn:"lídr kandidátky"},4:{jmeno:"Ivan Šterzl",povolani:"lékař, zakl. imunoendokrinologie v ČR",partaj:"Národní socialisté",file:"4_1",afile:"",pozn:"lídr kandidátky"},5:{jmeno:"Jan Zahradil",povolani:"poslanec Evropského parlamentu",partaj:"Občanská demokratická strana",file:"5_1",afile:"",pozn:"lídr kandidátky"},6:{jmeno:"Jiří Kyjovský",povolani:"generální ředitel TAXI Otnice, zastupitel ze Šimic",partaj:"ANO, vytrollíme europarlament",file:"6_3",afile:"",pozn:"předseda hnutí, třetí na kandidátce"},7:{jmeno:"Pavel Poc",povolani:"poslanec EP, biolog",partaj:"Česká str.sociálně demokrat.",file:"7_1",afile:"",pozn:"lídr kandidátky"},8:{jmeno:"Štefan Gorol",povolani:"romský nezávislý aktivista",partaj:"Romská demokratická strana",file:"8_2",afile:"",pozn:"druhý na kandidátce"},9:{jmeno:"Kateřina Konečná",povolani:"poslankyně Evropského parlamentu",partaj:"Komunistická str.Čech a Moravy",file:"9_1",afile:"",pozn:"lídr kandidátky"},10:{jmeno:"Tomáš Vandas",povolani:"předseda DSSS a podnikatel",partaj:"Koalice DSSS a NF",file:"10_1",afile:"",pozn:"lídr kandidátky"},11:{jmeno:"Miroslav Sládek",povolani:"bojovník proti bezpráví a totalitě",partaj:"SPR-Republ.str.Čsl. M.Sládka",file:"11_1",afile:"",pozn:"lídr kandidátky"},12:{jmeno:"Adam Benjamin Bartoš",povolani:"předseda strany",partaj:"Koalice ND, Rozumní",file:"12_1",afile:"",pozn:"lídr kandidátky"},13:{jmeno:"Petr Cibulka",povolani:"pětinásobný politický vězeň, vydavatel seznamů StB",partaj:"Volte Pr.Blok www.cibulka.net",file:"13_1",afile:"",pozn:"lídr kandidátky"},14:{jmeno:"Josef Zahradník",povolani:"dopravní specialista kolejových vozidel",partaj:"NE-VOLIM.CZ",file:"14_1",afile:"",pozn:"lídr kandidátky"},15:{jmeno:"Radek Kňava",povolani:"personalista v automobilce",partaj:"Pro Česko",file:"15_1",afile:"",pozn:"lídr kandidátky"},16:{jmeno:"Ivan Holoubek",povolani:"profesor chemie životního prostředí PřF MU",partaj:"Vědci pro Českou republiku",file:"16_1",afile:"",pozn:"lídr kandidátky"},17:{jmeno:"Jiří Vítek",povolani:"místostarosta MČ Praha 8, předseda Patriotů ČR",partaj:"Koalice ČSNS, Patrioti ČR",file:"17_1",afile:"",pozn:"lídr kandidátky"},18:{jmeno:"Petr Kováč",povolani:"podnikatel",partaj:"JSI PRO?Jist.Solid.In.pro bud.",file:"18_1",afile:"",pozn:"lídr kandidátky"},19:{jmeno:"Tomáš Kotora",povolani:"ředitel plaveckého bazénu Plzeň, ekonom",partaj:"PRO Zdraví a Sport",file:"19_3",afile:"",pozn:"třetí na kandidátce"},20:{jmeno:"Vladan Ševčík",povolani:"energetik a jednatel vinařství, člen rady MZH",partaj:"Moravské zemské hnutí",file:"20_1",afile:"",pozn:"lídr kandidátky"},21:{jmeno:"David Rath",povolani:"lékař",partaj:"Česká Suverenita",file:"21_1",afile:"",pozn:"lídr kandidátky"},22:{jmeno:"Daniel Konečný",povolani:"dotační poradce",partaj:"TVŮJ KANDIDÁT",file:"22_1",afile:"",pozn:"lídr kandidátky"},23:{jmeno:"Pavel Telička",povolani:"místopředseda Evropského parlamentu",partaj:"HLAS",file:"23_1",afile:"",pozn:"lídr kandidátky"},24:{jmeno:"Vít Jedlička",povolani:"prezident Liberlandu",partaj:"Koalice Svobodní, RČ",file:"24_1",afile:"",pozn:"lídr kandidátky"},25:{jmeno:"Jiří Pospíšil",povolani:"právník, př. spr. rady Museum Kampa, europoslanec",partaj:"Koalice STAN, TOP 09",file:"25_1",afile:"",pozn:"lídr kandidátky"},26:{jmeno:"Marcel Kolaja",povolani:"bojovník za otevřený software, manažer",partaj:"Česká pirátská strana",file:"26_1",afile:"",pozn:"lídr kandidátky"},27:{jmeno:"Ivan David",povolani:"lékař, pedagog",partaj:"Svob.a př.dem.-T.Okamura (SPD)",file:"27_1",afile:"",pozn:"lídr kandidátky"},28:{jmeno:"Jiří Černohorský",povolani:"předseda spolku ČEST, SVOBODA, RESPEKT",partaj:"ALIANCE NÁRODNÍCH SIL",file:"28_1",afile:"",pozn:"lídr kandidátky"},29:{jmeno:"Dita Charanzová",povolani:"poslankyně Evropského parlamentu",partaj:"ANO 2011",file:"29_1",afile:"",pozn:"lídr kandidátky"},30:{jmeno:"Pavel Šrámek",povolani:"farmář a podnikatel",partaj:"Agrární demokratická strana",file:"30_1",afile:"",pozn:"lídr kandidátky"},31:{jmeno:"Jiří Pernes",povolani:"historik",partaj:"Moravané",file:"31_3",afile:"",pozn:"třetí na kandidátce"},32:{jmeno:"Matouš Bulíř",povolani:"grafik",partaj:"PRVNÍ REPUBLIKA",file:"32_1",afile:"",pozn:"lídr kandidátky"},33:{jmeno:"Andrea Bychlová",povolani:"právnička, před. spolku Německý ovčák v nouzi z.s.",partaj:"Demokratická strana zelených",file:"33_1",afile:"",pozn:"lídr kandidátky"},34:{jmeno:"Jaroslav Bašta",povolani:"publicista, diplomat",partaj:"BEZPEČNOST,ODPOVĚDNOST,SOLID.",file:"34_1",afile:"",pozn:"lídr kandidátky"},35:{jmeno:"Josef Valihrach",povolani:"trojnásobný Vinař roku ČR, vítěz Farmy roku 2018",partaj:"Koalice NEZ, Soukromníci",file:"35_1",afile:"",pozn:"lídr kandidátky"},36:{jmeno:"Jaromír Štětina",povolani:"europoslanec, spisovatel, novinář",partaj:"Evropa společně",file:"36_1",afile:"",pozn:"lídr kandidátky"},37:{jmeno:"Pavel Poláček",povolani:"jednatel společnosti",partaj:"KONZERVATIVNÍ ALTERNATIVA",file:"37_1",afile:"",pozn:"lídr kandidátky"},38:{jmeno:"Pavel Svoboda",povolani:"poslanec Evropského parlamentu",partaj:"Křesť.demokr.unie-Čs.str.lid.",file:"38_1",afile:"",pozn:"lídr kandidátky"},39:{jmeno:"Klára Alžběta Samková",povolani:"advokátka",partaj:"Alternativa pro Česk. rep.2017",file:"39_1",afile:"",pozn:"lídr kandidátky"}};o=-1===window.location.href.indexOf("irozhlas")&&-1===window.location.href.indexOf("localhost")?window.location.href.split("?")[0]:"https://data.irozhlas.cz/eu-vizitky-19/",function(){var a=this,e=document.createElement("h1");e.appendChild(document.createTextNode("Evropský parlament"));var n=document.createElement("ul");Object.keys(t).forEach(function(a){var e=document.createElement("li");e.id=a,e.innerHTML='\n      <div class="right">\n        <h2>\n          <span class="cislo">'.concat(a.split("_")[0],"</span>\n          <span>").concat(t[a].jmeno,'</span>\n        </h2>\n        <span class="strana">').concat(t[a].partaj,'</span>\n        <span class="supplemental">').concat(t[a].povolani,"</span>\n        ").concat(null!=t[a].pozn?'<div><span class="supplemental">'.concat(t[a].pozn,"</span></div>"):"",'\n        <span class="share">Sdílet na <a class="share-link" data-share-link=',"https://www.facebook.com/sharer/sharer.php?u=".concat(window.location.href.split("?")[0],"?").concat(a),'>Facebook</a> | <a class="share-link" data-share-link=',"https://twitter.com/home?status=".concat(window.location.href.split("?")[0],"?").concat(a),'>Twitter</a> | <a target="_blank" href="https://data.irozhlas.cz/eu-vizitky-19/iframes.html#').concat(t[a].file,'">Vložit do stránky</a></span>\n        ').concat("x"!==t[a].afile?'<div><audio class="player" src="'.concat(o,"media/audio/").concat(t[a].file,'.mp3" preload="none" controls="yes"></audio></div>'):"",'\n      </div>\n      <div class="left">\n        <img width="120" height="180" alt="').concat(t[a].jmeno,'" src="',"".concat(o,"media/foto/").concat(t[a].file,".jpg"),'">\n      </div>\n    '),n.appendChild(e)});var i=document.getElementById("bottom");i.appendChild(e),i.appendChild(n);for(var l=document.getElementsByClassName("share-link"),r=0;r<l.length;r++)l[r].addEventListener("click",function(a){return window.open(a.target.dataset.shareLink,"Sdílení","width=550,height=450,scrollbars=no")});for(var d=document.getElementsByClassName("player"),p=0;p<d.length;p++)d[p].addEventListener("click",function(){ga("gtm1.send","event","ondemand","play","Volby do Evropského parlamentu - vizitka lídra ".concat(a.src.split("/").slice(-1)[0].split(".")[0]))})}(),function(){var a=window.location.href.split("?")[1];if(a){if(!t[a])return;document.getElementById(a).scrollIntoView(),window.scrollBy(0,-50)}}()}]);
>>>>>>> iframes
