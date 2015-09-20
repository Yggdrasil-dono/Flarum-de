app.translator.plural = function(count) {
  if (count >= 0 && count < 2) {
    return 'one';
    }
  else {
    return 'other';
  }
};

moment.locale('de', {
  months : 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
  monthsShort : 'Jan._Febr._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.'.split('_'),
  weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
  weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
  weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
  longDateFormat : {
    LT : 'HH:mm',
    LTS : 'HH:mm:ss',
    L : 'DD/MM/YYYY',
    LL : 'D MMMM YYYY',
    LLL : 'D MMMM YYYY HH:mm',
    LLLL : 'dddd D MMMM YYYY HH:mm'
  },
  calendar : {
    sameDay: '[Heute] LT',
    nextDay: '[Morgen] LT',
    nextWeek: 'dddd [bis] LT',
    lastDay: '[Gestern] LT',
    lastWeek: 'dddd [bis] LT',
    sameElse: 'L'
  },
  relativeTime : {
    future : 'in %s',
    past : 'vor %s',
    s : 'wenigen Sekunden',
    m : 'einer Minute',
    mm : '%d Minuten',
    h : 'einer Stunde',
    hh : '%d Stunden',
    d : 'einem Tag',
    dd : '%d Tagen',
    M : 'einem Monat',
    MM : '%d Monaten',
    y : 'einem Jahr',
    yy : '%d Jahren'
  },
  ordinalParse: /\d{1,2}(er|)/,
  ordinal : function (number) {
    return number + (number === 1 ? 'er' : '');
  },
  week : {
    dow : 1,
    doy : 4
  }
});
