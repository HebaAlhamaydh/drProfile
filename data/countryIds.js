const countryIds = [
  { value: "1", label: "Saudi Arabia" },
  { value: "2", label: "United States" },
  { value: "3", label: "Afghanistan" },
  { value: "4", label: "Antigua and Barbuda" },
  { value: "5", label: "Anguilla" },
  { value: "6", label: "Albania" },
  { value: "7", label: "Armenia" },
  { value: "8", label: "Angola" },
  { value: "9", label: "Antarctica" },
  { value: "10", label: "Argentina" },
  { value: "11", label: "American Samoa" },
  { value: "12", label: "Austria" },
  { value: "13", label: "Aruba" },
  { value: "14", label: "Åland Islands" },
  { value: "15", label: "Azerbaijan" },
  { value: "16", label: "Bahrain" },
  { value: "17", label: "Saudi Arabia" },
  { value: "18", label: "Brazil" },
  { value: "19", label: "Saudi Arabia" },
  { value: "20", label: "Barbados" },
];
// const countryIds = {
//   1: {
//     en: "Saudi Arabia",
//     ar: "السعودية",
//     code: "SA",
//   },
//   2: {
//     en: "United States",
//     ar: "الولايات المتحدة",
//     code: "US",
//   },
//   3: {
//     en: "Afghanistan",
//     ar: "أفغانستان",
//     code: "AF",
//   },
//   4: {
//     en: "Antigua and Barbuda",
//     ar: "أنتيغوا وباربودا",
//     code: "AG",
//   },
//   5: {
//     en: "Anguilla",
//     ar: "أنجويلا",
//     code: "AI",
//   },
//   6: {
//     en: "Albania",
//     ar: "ألبانيا",
//     code: "AL",
//   },
//   7: {
//     en: "Armenia",
//     ar: "أرمينيا",
//     code: "AM",
//   },
//   8: {
//     en: "Angola",
//     ar: "أنجولا",
//     code: "AO",
//   },
//   9: {
//     en: "Antarctica",
//     ar: "القارة القطبية الجنوبية",
//     code: "AQ",
//   },
//   10: {
//     en: "Argentina",
//     ar: "الأرجنتين",
//     code: "AR",
//   },
//   11: {
//     en: "American Samoa",
//     ar: "ساموا الأمريكية",
//     code: "AS",
//   },
//   12: {
//     en: "Austria",
//     ar: "النمسا",
//     code: "AT",
//   },
//   13: {
//     en: "Australia",
//     ar: "أستراليا",
//     code: "AU",
//   },
//   14: {
//     en: "Aruba",
//     ar: "آروبا",
//     code: "AW",
//   },
//   15: {
//     en: "Åland Islands",
//     ar: "جزر أولان",
//     code: "AX",
//   },
//   16: {
//     en: "Azerbaijan",
//     ar: "أذربيجان",
//     code: "AZ",
//   },
//   17: {
//     en: "Bosnia and Herzegovina",
//     ar: "البوسنة والهرسك",
//     code: "BA",
//   },
//   18: {
//     en: "Barbados",
//     ar: "بربادوس",
//     code: "BB",
//   },
//   19: {
//     en: "Bangladesh",
//     ar: "بنجلاديش",
//     code: "BD",
//   },
//   20: {
//     en: "Belgium",
//     ar: "بلجيكا",
//     code: "BE",
//   },
//   21: {
//     en: "Burkina Faso",
//     ar: "بوركينا فاسو",
//     code: "BF",
//   },
//   22: {
//     en: "Bulgaria",
//     ar: "بلغاريا",
//     code: "BG",
//   },
//   23: {
//     en: "Bahrain",
//     ar: "البحرين",
//     code: "BH",
//   },
//   24: {
//     en: "Burundi",
//     ar: "بوروندي",
//     code: "BI",
//   },
//   25: {
//     en: "Benin",
//     ar: "بنين",
//     code: "BJ",
//   },
//   26: {
//     en: "Saint Barthelemy",
//     ar: "سان بارتيلمي",
//     code: "BL",
//   },
//   27: {
//     en: "Bermuda",
//     ar: "برمودا",
//     code: "BM",
//   },
//   28: {
//     en: "Brunei Darussalam",
//     ar: "بروناي",
//     code: "BN",
//   },
//   29: {
//     en: "Bolivia, Plurinational State of",
//     ar: "بوليفيا",
//     code: "BO",
//   },
//   30: {
//     en: "Bonaire, Sint Eustatius and Saba",
//     ar: "الجزر الكاريبية الهولندية",
//     code: "BQ",
//   },
//   31: {
//     en: "Brazil",
//     ar: "البرازيل",
//     code: "BR",
//   },
//   32: {
//     en: "Bahamas",
//     ar: "الباهاما",
//     code: "BS",
//   },
//   33: {
//     en: "Bhutan",
//     ar: "بوتان",
//     code: "BT",
//   },
//   34: {
//     en: "Bouvet Island",
//     ar: "جزيرة بوفيه",
//     code: "BV",
//   },
//   35: {
//     en: "Botswana",
//     ar: "بتسوانا",
//     code: "BW",
//   },
//   36: {
//     en: "Belarus",
//     ar: "روسيا البيضاء",
//     code: "BY",
//   },
//   37: {
//     en: "Belize",
//     ar: "بليز",
//     code: "BZ",
//   },
//   38: {
//     en: "Canada",
//     ar: "كندا",
//     code: "CA",
//   },
//   39: {
//     en: "Cocos (Keeling) Islands",
//     ar: "جزر كوكوس",
//     code: "CC",
//   },
//   40: {
//     en: "Democratic Republic of Congo",
//     ar: "جمهورية الكونغو الديمقراطية",
//     code: "CD",
//   },
//   41: {
//     en: "Central African Republic",
//     ar: "جمهورية أفريقيا الوسطى",
//     code: "CF",
//   },
//   42: {
//     en: "Congo",
//     ar: "جمهورية الكونغو",
//     code: "CG",
//   },
//   43: {
//     en: "Switzerland",
//     ar: "سويسرا",
//     code: "CH",
//   },
//   44: {
//     en: "Cote d'Ivoire",
//     ar: "ساحل العاج",
//     code: "CI",
//   },
//   45: {
//     en: "Cook Islands",
//     ar: "جزر كوك",
//     code: "CK",
//   },
//   46: {
//     en: "Chile",
//     ar: "شيلي",
//     code: "CL",
//   },
//   47: {
//     en: "Cameroon",
//     ar: "الكاميرون",
//     code: "CM",
//   },
//   48: {
//     en: "China",
//     ar: "الصين",
//     code: "CN",
//   },
//   49: {
//     en: "Colombia",
//     ar: "كولومبيا",
//     code: "CO",
//   },
//   50: {
//     en: "Costa Rica",
//     ar: "كوستاريكا",
//     code: "CR",
//   },
//   51: {
//     en: "Cuba",
//     ar: "كوبا",
//     code: "CU",
//   },
//   52: {
//     en: "Cape Verde",
//     ar: "الرأس الأخضر",
//     code: "CV",
//   },
//   53: {
//     en: "Curaçao",
//     ar: "كوراساو",
//     code: "CW",
//   },
//   54: {
//     en: "Christmas Island",
//     ar: "جزيرة عيد الميلاد",
//     code: "CX",
//   },
//   55: {
//     en: "Cyprus",
//     ar: "قبرص",
//     code: "CY",
//   },
//   56: {
//     en: "Czech Republic",
//     ar: "جمهورية التشيك",
//     code: "CZ",
//   },
//   57: {
//     en: "Germany",
//     ar: "ألمانيا",
//     code: "DE",
//   },
//   58: {
//     en: "Djibouti",
//     ar: "جيبوتي",
//     code: "DJ",
//   },
//   59: {
//     en: "Denmark",
//     ar: "الدانمرك",
//     code: "DK",
//   },
//   60: {
//     en: "Dominica",
//     ar: "دومينيكا",
//     code: "DM",
//   },
//   61: {
//     en: "Dominican Republic",
//     ar: "جمهورية الدومينيكان",
//     code: "DO",
//   },
//   62: {
//     en: "Algeria",
//     ar: "الجزائر",
//     code: "DZ",
//   },
//   63: {
//     en: "Ecuador",
//     ar: "الاكوادور",
//     code: "EC",
//   },
//   64: {
//     en: "Estonia",
//     ar: "استونيا",
//     code: "EE",
//   },
//   65: {
//     en: "Egypt",
//     ar: "مصر",
//     code: "EG",
//   },
//   66: {
//     en: "Western Sahara",
//     ar: "الصحراء الغربية",
//     code: "EH",
//   },
//   67: {
//     en: "Eritrea",
//     ar: "اريتريا",
//     code: "ER",
//   },
//   68: {
//     en: "Spain",
//     ar: "أسبانيا",
//     code: "ES",
//   },
//   69: {
//     en: "Ethiopia",
//     ar: "اثيوبيا",
//     code: "ET",
//   },
//   70: {
//     en: "Finland",
//     ar: "فنلندا",
//     code: "FI",
//   },
//   71: {
//     en: "Fiji",
//     ar: "فيجي",
//     code: "FJ",
//   },
//   72: {
//     en: "Falkland Islands (Malvinas)",
//     ar: "جزر فوكلاند",
//     code: "FK",
//   },
//   73: {
//     en: "Micronesia, Federated States of",
//     ar: "ميكرونيزيا",
//     code: "FM",
//   },
//   74: {
//     en: "Faroe Islands",
//     ar: "جزر فارو",
//     code: "FO",
//   },
//   75: {
//     en: "France",
//     ar: "فرنسا",
//     code: "FR",
//   },
//   76: {
//     en: "Gabon",
//     ar: "الجابون",
//     code: "GA",
//   },
//   77: {
//     en: "United Kingdom",
//     ar: "المملكة المتحدة",
//     code: "GB",
//   },
//   78: {
//     en: "Grenada",
//     ar: "جرينادا",
//     code: "GD",
//   },
//   79: {
//     en: "Georgia",
//     ar: "جورجيا",
//     code: "GE",
//   },
//   80: {
//     en: "French Guiana",
//     ar: "غويانا",
//     code: "GF",
//   },
//   81: {
//     en: "Guernsey",
//     ar: "جيرنزي",
//     code: "GG",
//   },
//   82: {
//     en: "Ghana",
//     ar: "غانا",
//     code: "GH",
//   },
//   83: {
//     en: "Gibraltar",
//     ar: "جبل طارق",
//     code: "GI",
//   },
//   84: {
//     en: "Greenland",
//     ar: "جرينلاند",
//     code: "GL",
//   },
//   85: {
//     en: "Gambia",
//     ar: "غامبيا",
//     code: "GM",
//   },
//   86: {
//     en: "Guinea",
//     ar: "غينيا",
//     code: "GN",
//   },
//   87: {
//     en: "Guadeloupe",
//     ar: "جوادلوب",
//     code: "GP",
//   },
//   88: {
//     en: "Equatorial Guinea",
//     ar: "غينيا الاستوائية",
//     code: "GQ",
//   },
//   89: {
//     en: "Greece",
//     ar: "اليونان",
//     code: "GR",
//   },
//   90: {
//     en: "South Georgia and the South Sandwich Islands",
//     ar: "جورجيا الجنوبية وجزر ساندويتش الجنوبية",
//     code: "GS",
//   },
//   91: {
//     en: "Guatemala",
//     ar: "جواتيمالا",
//     code: "GT",
//   },
//   92: {
//     en: "Guam",
//     ar: "جوام",
//     code: "GU",
//   },
//   93: {
//     en: "Guinea-Bissau",
//     ar: "غينيا بيساو",
//     code: "GW",
//   },
//   94: {
//     en: "Guyana",
//     ar: "غيانا",
//     code: "GY",
//   },
//   95: {
//     en: "Hong Kong",
//     ar: "هونغ كونغ",
//     code: "HK",
//   },
//   96: {
//     en: "Heard Island and McDonald Islands",
//     ar: "جزيرة هيرد وجزر ماكدونالد",
//     code: "HM",
//   },
//   97: {
//     en: "Honduras",
//     ar: "هندوراس",
//     code: "HN",
//   },
//   98: {
//     en: "Croatia",
//     ar: "كرواتيا",
//     code: "HR",
//   },
//   99: {
//     en: "Haiti",
//     ar: "هايتي",
//     code: "HT",
//   },
//   100: {
//     en: "Hungary",
//     ar: "المجر",
//     code: "HU",
//   },
//   101: {
//     en: "Indonesia",
//     ar: "اندونيسيا",
//     code: "ID",
//   },
//   102: {
//     en: "Ireland",
//     ar: "أيرلندا",
//     code: "IE",
//   },
//   103: {
//     en: "Occupied Palestine",
//     ar: "فلسطين المحتلة",
//     code: "PS",
//   },
//   104: {
//     en: "Isle of Man",
//     ar: "جزيرة مان",
//     code: "IM",
//   },
//   105: {
//     en: "India",
//     ar: "الهند",
//     code: "IN",
//   },
//   106: {
//     en: "British Indian Ocean Territory",
//     ar: "إقليم المحيط الهندي البريطاني",
//     code: "IO",
//   },
//   107: {
//     en: "Iraq",
//     ar: "العراق",
//     code: "IQ",
//   },
//   108: {
//     en: "Iran, Islamic Republic of",
//     ar: "ايران",
//     code: "IR",
//   },
//   109: {
//     en: "Iceland",
//     ar: "أيسلندا",
//     code: "IS",
//   },
//   110: {
//     en: "Italy",
//     ar: "ايطاليا",
//     code: "IT",
//   },
//   111: {
//     en: "Jersey",
//     ar: "جيرسي",
//     code: "JE",
//   },
//   112: {
//     en: "Jamaica",
//     ar: "جامايكا",
//     code: "JM",
//   },
//   113: {
//     en: "Jordan",
//     ar: "الأردن",
//     code: "JO",
//   },
//   114: {
//     en: "Japan",
//     ar: "اليابان",
//     code: "JP",
//   },
//   115: {
//     en: "Kenya",
//     ar: "كينيا",
//     code: "KE",
//   },
//   116: {
//     en: "Kyrgyzstan",
//     ar: "قرغيزستان",
//     code: "KG",
//   },
//   117: {
//     en: "Cambodia",
//     ar: "كمبوديا",
//     code: "KH",
//   },
//   118: {
//     en: "Kiribati",
//     ar: "كيريباتي",
//     code: "KI",
//   },
//   119: {
//     en: "Comoros",
//     ar: "جزر القمر",
//     code: "KM",
//   },
//   120: {
//     en: "Saint Kitts and Nevis",
//     ar: "سانت كيتس ونيفيس",
//     code: "KN",
//   },
//   121: {
//     en: "Korea, Democratic People's Republic of",
//     ar: "كوريا الشمالية",
//     code: "KP",
//   },
//   122: {
//     en: "Korea, Republic of",
//     ar: "كوريا الجنوبية",
//     code: "KR",
//   },
//   123: {
//     en: "Kuwait",
//     ar: "الكويت",
//     code: "KW",
//   },
//   124: {
//     en: "Cayman Islands",
//     ar: "جزر كايمان",
//     code: "KY",
//   },
//   125: {
//     en: "Kazakhstan",
//     ar: "كازاخستان",
//     code: "KZ",
//   },
//   126: {
//     en: "Lao People's Democratic Republic",
//     ar: "لاوس",
//     code: "LA",
//   },
//   127: {
//     en: "Lebanon",
//     ar: "لبنان",
//     code: "LB",
//   },
//   128: {
//     en: "Saint Lucia",
//     ar: "سانت لوسيا",
//     code: "LC",
//   },
//   129: {
//     en: "Liechtenstein",
//     ar: "ليختنشتاين",
//     code: "LI",
//   },
//   130: {
//     en: "Sri Lanka",
//     ar: "سريلانكا",
//     code: "LK",
//   },
//   131: {
//     en: "Liberia",
//     ar: "ليبيريا",
//     code: "LR",
//   },
//   132: {
//     en: "Lesotho",
//     ar: "ليسوتو",
//     code: "LS",
//   },
//   133: {
//     en: "Lithuania",
//     ar: "ليتوانيا",
//     code: "LT",
//   },
//   134: {
//     en: "Luxembourg",
//     ar: "لوكسمبورج",
//     code: "LU",
//   },
//   135: {
//     en: "Latvia",
//     ar: "لاتفيا",
//     code: "LV",
//   },
//   136: {
//     en: "Libya",
//     ar: "ليبيا",
//     code: "LY",
//   },
//   137: {
//     en: "Morocco",
//     ar: "المغرب",
//     code: "MA",
//   },
//   138: {
//     en: "Monaco",
//     ar: "موناكو",
//     code: "MC",
//   },
//   139: {
//     en: "Moldova, Republic of",
//     ar: "مولدافيا",
//     code: "MD",
//   },
//   140: {
//     en: "Montenegro",
//     ar: "الجبل الأسود",
//     code: "ME",
//   },
//   141: {
//     en: "Saint Martin (French Part)",
//     ar: "تجمع سان مارتين",
//     code: "MF",
//   },
//   142: {
//     en: "Madagascar",
//     ar: "مدغشقر",
//     code: "MG",
//   },
//   143: {
//     en: "Marshall Islands",
//     ar: "جزر مارشال",
//     code: "MH",
//   },
//   144: {
//     en: "Macedonia, the Former Yugoslav Republic of",
//     ar: "مقدونيا",
//     code: "MK",
//   },
//   145: {
//     en: "Mali",
//     ar: "مالي",
//     code: "ML",
//   },
//   146: {
//     en: "Myanmar",
//     ar: "ميانمار",
//     code: "MM",
//   },
//   147: {
//     en: "Mongolia",
//     ar: "منغوليا",
//     code: "MN",
//   },
//   148: {
//     en: "Macao",
//     ar: "ماكاو",
//     code: "MO",
//   },
//   149: {
//     en: "Northern Mariana Islands",
//     ar: "جزر ماريانا الشمالية",
//     code: "MP",
//   },
//   150: {
//     en: "Martinique",
//     ar: "مارتينيك",
//     code: "MQ",
//   },
//   151: {
//     en: "Mauritania",
//     ar: "موريتانيا",
//     code: "MR",
//   },
//   152: {
//     en: "Montserrat",
//     ar: "مونتسرات",
//     code: "MS",
//   },
//   153: {
//     en: "Malta",
//     ar: "مالطا",
//     code: "MT",
//   },
//   154: {
//     en: "Mauritius",
//     ar: "موريشيوس",
//     code: "MU",
//   },
//   155: {
//     en: "Maldives",
//     ar: "جزر المالديف",
//     code: "MV",
//   },
//   156: {
//     en: "Malawi",
//     ar: "ملاوي",
//     code: "MW",
//   },
//   157: {
//     en: "Mexico",
//     ar: "المكسيك",
//     code: "MX",
//   },
//   158: {
//     en: "Malaysia",
//     ar: "ماليزيا",
//     code: "MY",
//   },
//   159: {
//     en: "Mozambique",
//     ar: "موزمبيق",
//     code: "MZ",
//   },
//   160: {
//     en: "Namibia",
//     ar: "ناميبيا",
//     code: "NA",
//   },
//   161: {
//     en: "New Caledonia",
//     ar: "كاليدونيا الجديدة",
//     code: "NC",
//   },
//   162: {
//     en: "Niger",
//     ar: "النيجر",
//     code: "NE",
//   },
//   163: {
//     en: "Norfolk Island",
//     ar: "جزيرة نورفولك",
//     code: "NF",
//   },
//   164: {
//     en: "Nigeria",
//     ar: "نيجيريا",
//     code: "NG",
//   },
//   165: {
//     en: "Nicaragua",
//     ar: "نيكاراجوا",
//     code: "NI",
//   },
//   166: {
//     en: "Netherlands",
//     ar: "هولندا",
//     code: "NL",
//   },
//   167: {
//     en: "Norway",
//     ar: "النرويج",
//     code: "NO",
//   },
//   168: {
//     en: "Nepal",
//     ar: "نيبال",
//     code: "NP",
//   },
//   169: {
//     en: "Nauru",
//     ar: "نورو",
//     code: "NR",
//   },
//   170: {
//     en: "Niue",
//     ar: "نيوي",
//     code: "NU",
//   },
//   171: {
//     en: "New Zealand",
//     ar: "نيوزيلاندا",
//     code: "NZ",
//   },
//   172: {
//     en: "Oman",
//     ar: "عمان",
//     code: "OM",
//   },
//   173: {
//     en: "Panama",
//     ar: "بنما",
//     code: "PA",
//   },
//   174: {
//     en: "Peru",
//     ar: "بيرو",
//     code: "PE",
//   },
//   175: {
//     en: "French Polynesia",
//     ar: "بولينزيا الفرنسية",
//     code: "PF",
//   },
//   176: {
//     en: "Papua New Guinea",
//     ar: "بابوا غينيا الجديدة",
//     code: "PG",
//   },
//   177: {
//     en: "Philippines",
//     ar: "الفيلبين",
//     code: "PH",
//   },
//   178: {
//     en: "Pakistan",
//     ar: "باكستان",
//     code: "PK",
//   },
//   179: {
//     en: "Poland",
//     ar: "بولندا",
//     code: "PL",
//   },
//   180: {
//     en: "Saint Pierre and Miquelon",
//     ar: "سان بيير وميكلون",
//     code: "PM",
//   },
//   181: {
//     en: "Pitcairn",
//     ar: "بتكايرن",
//     code: "PN",
//   },
//   182: {
//     en: "Puerto Rico",
//     ar: "بورتوريكو",
//     code: "PR",
//   },
//   183: {
//     en: "State of Palestine",
//     ar: "فلسطين",
//     code: "PS",
//   },
//   184: {
//     en: "Portugal",
//     ar: "البرتغال",
//     code: "PT",
//   },
//   185: {
//     en: "Palau",
//     ar: "بالاو",
//     code: "PW",
//   },
//   186: {
//     en: "Paraguay",
//     ar: "باراجواي",
//     code: "PY",
//   },
//   187: {
//     en: "Qatar",
//     ar: "قطر",
//     code: "QA",
//   },
//   188: {
//     en: "Réunion",
//     ar: "روينيون",
//     code: "RE",
//   },
//   189: {
//     en: "Romania",
//     ar: "رومانيا",
//     code: "RO",
//   },
//   190: {
//     en: "Serbia",
//     ar: "صربيا",
//     code: "RS",
//   },
//   191: {
//     en: "Russian Federation",
//     ar: "روسيا",
//     code: "RU",
//   },
//   192: {
//     en: "Rwanda",
//     ar: "رواندا",
//     code: "RW",
//   },
//   193: {
//     en: "Andorra",
//     ar: "أندورا",
//     code: "AD",
//   },
//   194: {
//     en: "Solomon Islands",
//     ar: "جزر سليمان",
//     code: "SB",
//   },
//   195: {
//     en: "Seychelles",
//     ar: "سيشل",
//     code: "SC",
//   },
//   196: {
//     en: "Sudan",
//     ar: "السودان",
//     code: "SD",
//   },
//   197: {
//     en: "Sweden",
//     ar: "السويد",
//     code: "SE",
//   },
//   198: {
//     en: "Singapore",
//     ar: "سنغافورة",
//     code: "SG",
//   },
//   199: {
//     en: "Saint Helena, Ascension and Tristan da Cunha",
//     ar: "سانت هيلينا وأسينشين وتريستان دا كونا",
//     code: "SH",
//   },
//   200: {
//     en: "Slovenia",
//     ar: "سلوفينيا",
//     code: "SI",
//   },
//   201: {
//     en: "Svalbard and Jan Mayen",
//     ar: "سفالبارد ويان ماين",
//     code: "SJ",
//   },
//   202: {
//     en: "Slovakia",
//     ar: "سلوفاكيا",
//     code: "SK",
//   },
//   203: {
//     en: "Sierra Leone",
//     ar: "سيراليون",
//     code: "SL",
//   },
//   204: {
//     en: "San Marino",
//     ar: "سان مارينو",
//     code: "SM",
//   },
//   205: {
//     en: "Senegal",
//     ar: "السنغال",
//     code: "SN",
//   },
//   206: {
//     en: "Somalia",
//     ar: "الصومال",
//     code: "SO",
//   },
//   207: {
//     en: "Suriname",
//     ar: "سورينام",
//     code: "SR",
//   },
//   208: {
//     en: "South Sudan",
//     ar: "جنوب السودان",
//     code: "SS",
//   },
//   209: {
//     en: "Sao Tome and Principe",
//     ar: "ساو تومي وبرينسيب",
//     code: "ST",
//   },
//   210: {
//     en: "El Salvador",
//     ar: "السلفادور",
//     code: "SV",
//   },
//   211: {
//     en: "Sint Maarten (Dutch Part)",
//     ar: "سينت مارتن",
//     code: "SX",
//   },
//   212: {
//     en: "Syrian Arab Republic",
//     ar: "سوريا",
//     code: "SY",
//   },
//   213: {
//     en: "Swaziland",
//     ar: "سوازيلاند",
//     code: "SZ",
//   },
//   214: {
//     en: "Turks and Caicos Islands",
//     ar: "جزر توركس وكايكوس",
//     code: "TC",
//   },
//   215: {
//     en: "Chad",
//     ar: "تشاد",
//     code: "TD",
//   },
//   216: {
//     en: "French Southern Territories",
//     ar: "أراض فرنسية جنوبية وأنتارتيكية",
//     code: "TF",
//   },
//   217: {
//     en: "Togo",
//     ar: "توجو",
//     code: "TG",
//   },
//   218: {
//     en: "Thailand",
//     ar: "تايلند",
//     code: "TH",
//   },
//   219: {
//     en: "Tajikistan",
//     ar: "طاجكستان",
//     code: "TJ",
//   },
//   220: {
//     en: "Tokelau",
//     ar: "توكيلو",
//     code: "TK",
//   },
//   221: {
//     en: "Timor-Leste",
//     ar: "تيمور الشرقية",
//     code: "TL",
//   },
//   222: {
//     en: "Turkmenistan",
//     ar: "تركمانستان",
//     code: "TM",
//   },
//   223: {
//     en: "Tunisia",
//     ar: "تونس",
//     code: "TN",
//   },
//   224: {
//     en: "Tonga",
//     ar: "تونجا",
//     code: "TO",
//   },
//   225: {
//     en: "Turkey",
//     ar: "تركيا",
//     code: "TR",
//   },
//   226: {
//     en: "Trinidad and Tobago",
//     ar: "ترينيداد وتوباغو",
//     code: "TT",
//   },
//   227: {
//     en: "Tuvalu",
//     ar: "توفالو",
//     code: "TV",
//   },
//   228: {
//     en: "Taiwan, Province of China",
//     ar: "تايوان",
//     code: "TW",
//   },
//   229: {
//     en: "Tanzania, United Republic of",
//     ar: "تانزانيا",
//     code: "TZ",
//   },
//   230: {
//     en: "Ukraine",
//     ar: "أوكرانيا",
//     code: "UA",
//   },
//   231: {
//     en: "Uganda",
//     ar: "أوغندا",
//     code: "UG",
//   },
//   232: {
//     en: "United States Minor Outlying Islands",
//     ar: "جزر الولايات المتحدة الصغيرة النائية",
//     code: "UM",
//   },
//   233: {
//     en: "United Arab Emirates",
//     ar: "الامارات العربية المتحدة",
//     code: "AE",
//   },
//   234: {
//     en: "Uruguay",
//     ar: "أورجواي",
//     code: "UY",
//   },
//   235: {
//     en: "Uzbekistan",
//     ar: "أوزبكستان",
//     code: "UZ",
//   },
//   236: {
//     en: "Holy See (Vatican City State)",
//     ar: "الفاتيكان",
//     code: "VA",
//   },
//   237: {
//     en: "Saint Vincent and the Grenadines",
//     ar: "سانت فينسنت والغرينادين",
//     code: "VC",
//   },
//   238: {
//     en: "Venezuela, Bolivarian Republic of",
//     ar: "فنزويلا",
//     code: "VE",
//   },
//   239: {
//     en: "Virgin Islands, British",
//     ar: "جزر العذراء البريطانية",
//     code: "VG",
//   },
//   240: {
//     en: "Virgin Islands, U.S.",
//     ar: "جزر العذراء الأمريكية",
//     code: "VI",
//   },
//   241: {
//     en: "Viet Nam",
//     ar: "فيتنام",
//     code: "VN",
//   },
//   242: {
//     en: "Vanuatu",
//     ar: "فانواتو",
//     code: "VU",
//   },
//   243: {
//     en: "Wallis and Futuna",
//     ar: "والس وفوتونا",
//     code: "WF",
//   },
//   244: {
//     en: "Samoa",
//     ar: "ساموا",
//     code: "WS",
//   },
//   245: {
//     en: "Yemen",
//     ar: "اليمن",
//     code: "YE",
//   },
//   246: {
//     en: "Mayotte",
//     ar: "مايوت",
//     code: "YT",
//   },
//   247: {
//     en: "South Africa",
//     ar: "جنوب أفريقيا",
//     code: "ZA",
//   },
//   248: {
//     en: "Zambia",
//     ar: "زامبيا",
//     code: "ZM",
//   },
//   249: {
//     en: "Zimbabwe",
//     ar: "زيمبابوي",
//     code: "ZW",
//   },
// };

export default countryIds;
