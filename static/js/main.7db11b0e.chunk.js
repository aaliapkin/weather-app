(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{30:function(e,t,a){e.exports=a(51)},35:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"selectCity",(function(){return Y})),a.d(n,"setTheme",(function(){return B}));var r=a(0),c=a.n(r),i=a(25),s=a.n(i),o=a(2),l=a(4),m=a(6),u=a(5),h=a(12),d=(a(35),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={cities:[{name:"Moscow",temp:5,weather:"Rain",logo:"logo"},{name:"Saint Petersburg",temp:5,weather:"Rain",logo:"logo"},{name:"Novosibirsk",temp:5,weather:"Rain",logo:"logo"},{name:"Yekaterinburg",temp:5,weather:"Rain",logo:"logo"},{name:"Nizhny Novogorod",temp:5,weather:"Rain",logo:"logo"},{name:"Kazan",temp:5,weather:"Rain",logo:"logo"},{name:"Chelyabinsk",temp:5,weather:"Rain",logo:"logo"},{name:"Omsk",temp:5,weather:"Rain",logo:"logo"},{name:"Samara",temp:5,weather:"Rain",logo:"logo"},{name:"Rostov-on-Don",temp:5,weather:"Rain",logo:"logo"}],loading:!1,error:!1},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({loading:!0})}},{key:"render",value:function(){var e=this,t=this.state.cities.map((function(t){var a=t.name;return c.a.createElement(p,{key:a,name:a,to:"/city/".concat(a),callBack:function(){return e.setCity(a)}})}));return c.a.createElement("div",{className:"cities__container"},c.a.createElement("div",{className:"cities__grid"},c.a.createElement(p,{name:"Local",to:"/"}),t))}}]),a}(r.Component)),p=function(e){var t=e.name;e.callBack;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{className:"cities__name"},c.a.createElement(h.b,{to:"/city/".concat(t)},t)),c.a.createElement("div",{className:"cities__temp"},"15"))},_=d,f=a(27),v=a(8),E=a.n(v),y=a(13),w=a(24);function g(e){return new Promise((function(t){return setTimeout(t,e)}))}var N=function e(){var t=this;Object(o.a)(this,e),this._apiBase="https://api.openweathermap.org/data/2.5/",this._apiKey="ee09c403a1b18f3bc221c981d5a7cf99",this._units="&units=metric",this.getResource=function(){var e=Object(y.a)(E.a.mark((function e(a,n){var r,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=w.get(n)){e.next=12;break}return e.next=4,fetch("".concat(t._apiBase).concat(a,"&appid=").concat(t._apiKey));case 4:if((c=e.sent).ok){e.next=7;break}throw new Error("Could not fetch ".concat(a,", received ").concat(c.status));case 7:return e.next=9,c.json();case 9:r=e.sent,t._incrementApiCallCount(),w.set(n,r,864e5);case 12:return e.next=14,g(500);case 14:return e.abrupt("return",r);case 15:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),this.getCurrentWeather=function(){var e=Object(y.a)(E.a.mark((function e(a){var n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.city,e.next=3,t.getResource("weather?q=".concat(n).concat(t._units),"current_weather_openweathermap_"+n);case 3:return r=e.sent,e.abrupt("return",t._transformCurrentWeather(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getForecastWeather=function(){var e=Object(y.a)(E.a.mark((function e(a){var n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.city,e.next=3,t.getResource("forecast?q=".concat(n).concat(t._units),"forecast_weather_openweathermap"+n);case 3:return r=e.sent,e.abrupt("return",t._transformForecastWeather(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getDetailWeather=function(){var e=Object(y.a)(E.a.mark((function e(a){var n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.city,e.next=3,t.getResource("weather?q=".concat(n).concat(t._units),"detail_weather_openweathermap"+n);case 3:return r=e.sent,e.abrupt("return",t._transformDetailWeather(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformCurrentWeather=function(e){var t=e.dt,a=e.name,n=e.main,r=n.temp,c=n.temp_max,i=n.temp_min,s=n.humidity,o=e.weather,l=e.wind.speed,m=o[0],u=m.main,h=m.icon;return{name:a,date:t,temp:Math.round(r),desc:u,icon:h,high:Math.round(c),low:Math.round(i),wind:l,humidity:s}},this._transformForecastWeather=function(e){var t=e.list,a=[],n={};for(var r in t.forEach((function(e){var t=e.dt,a=e.main.temp,r=e.weather[0],c=r.id,i=r.main,s=r.icon,o=new Date(1e3*t),l=o.getDate(),m=o.getHours(),u={date:t,temp:Math.round(a),weatherType:c,weatherTypeDesc:i,icon:s};if(void 0!==n[l]){var h=new Date(1e3*n[l].date).getHours();Math.abs(m-12)<Math.abs(h-12)&&(n[l]=u)}else n[l]=u})),n)a.push(n[r]);return a},this._transformDetailWeather=function(e){var t=e.dt,a=e.name,n=e.sys,r=n.sunrise,c=n.sunset,i=e.clouds.all,s=e.main,o=s.temp,l=s.temp_min,m=s.temp_max,u=s.pressure,h=s.humidity,d=s.feels_like,p=e.wind,_=p.speed,v=p.deg,E=e.rain,y=e.weather[0],w=y.description,g=y.icon,N=null;return void 0!==E&&(Object(f.a)("rain1h"),N=E["1h"]),{date:t,city:a,sunrise:r,sunset:c,clouds:i,weatherDesc:w,weatherIcon:g,temp:Math.round(o),temp_min:Math.round(l),temp_max:Math.round(m),feels_like:Math.round(d),pressure:u,humidity:h,windSpeed:_,windDeg:v,rain1h:N}},this._incrementApiCallCount=function(){var e=w.get("api-call-count");e=void 0!==e?e:0,e+=1,w.set("api-call-count",e,864e5),console.warn("WARNING: API CALL, YOU ONLY HAVE 1'000 of these. Count ".concat(e,"."))}},b=(a(41),function(e){var t=e.city,a=e.date;return c.a.createElement("div",null,c.a.createElement("div",{className:"header__container"},c.a.createElement("h2",{className:"header__date"},a),c.a.createElement("h2",{className:"header__city"},c.a.createElement(h.b,{to:"/cities"},c.a.createElement("i",{className:"fa fa-map-marker"}),t))))}),k=(a(42),a(43),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"spinner__container"},c.a.createElement("div",{className:"spinner-border spinner",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading...")))}}]),a}(r.Component)),j=(a(44),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1},e}return Object(l.a)(a,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?c.a.createElement(O,null):this.props.children}}]),a}(r.Component)),O=function(){return c.a.createElement("div",{className:"error__container"},c.a.createElement("span",{className:"error__icon"}),c.a.createElement("div",{className:"error__desc"},c.a.createElement("h1",null,"Error!"),"Something went wrong..."))},C=(r.Component,function(e,t){return function(a){Object(m.a)(r,a);var n=Object(u.a)(r);function r(){var e;Object(o.a)(this,r);for(var t=arguments.length,a=new Array(t),c=0;c<t;c++)a[c]=arguments[c];return(e=n.call.apply(n,[this].concat(a))).state={data:null,loading:!0,error:!1},e}return Object(l.a)(r,[{key:"componentDidMount",value:function(){this.update()}},{key:"update",value:function(){var e=this;this.setState({loading:!0,error:!1});var a=this.props.param;t(a).then((function(t){e.setState({data:t,loading:!1})})).catch((function(){e.setState({error:!0,loading:!1})}))}},{key:"render",value:function(){var t=this.state,a=t.data,n=t.loading,r=t.error;return n?c.a.createElement(k,null):r?c.a.createElement(O,null):c.a.createElement(j,null,c.a.createElement(e,Object.assign({},this.props,{data:a})))}}]),r}(r.Component)}),D=C(function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"formatDate",value:function(e){var t=new Date(1e3*e);return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t.getDay()]+", "+("0"+t.getDate()).slice(-2)+"."+("0"+(t.getMonth()+1)).slice(-2)+"."+t.getFullYear()}},{key:"componentDidMount",value:function(){var e=this.props,t=e.data.temp,a=e.setTheme;a(t>15?"hot":t>5?"warm":"cold")}},{key:"render",value:function(){var e=this.props.data,t=e.date,a=e.name,n=e.temp,r=e.desc,i=e.icon,s=e.high,o=e.low,l=e.wind,m=e.humidity;return c.a.createElement("div",{className:"current-weather__container"},c.a.createElement(b,{city:a,date:this.formatDate(t)}),c.a.createElement("div",{className:"current-weather__container-inner"},c.a.createElement("div",{className:"current-weather__type-container"},c.a.createElement("img",{className:"current-weather__type-img",src:"https://openweathermap.org/img/wn/".concat(i,"@2x.png"),alt:""}),c.a.createElement("h3",{className:"current-weather__type-desc"},r)),c.a.createElement("div",{className:"current-weather__temp-container"},c.a.createElement("h1",{className:"current-weather__temp"},n),c.a.createElement("div",{className:"current-weather__hilo-container"},c.a.createElement("div",{className:"current-weather__hilo-element"},c.a.createElement("i",{className:"current-weather__hilo-icon fa fa-chevron-up"}),c.a.createElement("span",{className:"current-weather__hilo-temp"},s)),c.a.createElement("div",{className:"current-weather__hilo-element"},c.a.createElement("i",{className:"current-weather__hilo-icon fa fa-chevron-down"}),c.a.createElement("span",{className:"current-weather__hilo-temp"},o))),c.a.createElement("div",{className:"current-weather__info-container"},c.a.createElement("div",{className:"current-weather__info"},c.a.createElement("div",{className:"current-weather__info-label"},"HUMIDITY"),c.a.createElement("div",{className:"current-weather__info-value"},"".concat(m,"%")),c.a.createElement("div",{className:"current-weather__info-label"},"WIND"),c.a.createElement("div",{className:"current-weather__info-value"},"".concat(l),"m/s")))),c.a.createElement(h.b,{to:"/details",className:"khbtn current-weather__more-button"},"More details")))}}]),a}(r.Component),(new N).getCurrentWeather),W=(a(45),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).componentUpdate=function(){e.weatherService.getForecastWeather("Moscow").then(e.onWeatherLoaded).catch(e.onError)},e.onWeatherLoaded=function(t){e.setState({forecast:t,loading:!1})},e}return Object(l.a)(a,[{key:"formatDate",value:function(e){var t=new Date(1e3*e);return{weekday:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][t.getDay()],day:("0"+t.getDate()).slice(-2)+"."+("0"+(t.getMonth()+1)).slice(-2)}}},{key:"formatTemp",value:function(e){return e>0?"+".concat(e):"".concat(e)}},{key:"render",value:function(){var e=this,t=this.props.data;return c.a.createElement("div",{className:"forecast__container"},c.a.createElement(c.a.Fragment,null,t.map((function(t,a){var n=t.date,r=t.temp,i=t.icon,s=e.formatDate(n),o=s.weekday,l=s.day;return o=0===a?"Today":o,c.a.createElement(x,{key:n,weekday:o,day:l,temp:r,icon:i})}))))}}]),a}(r.Component)),x=function(e){var t=e.day,a=e.weekday,n=e.temp,r=e.icon;return c.a.createElement("div",{className:"forecast-item__container"},c.a.createElement("div",{className:"forecast-item__date"},a),c.a.createElement("div",{className:"forecast-item__date"},t),c.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(r,"@2x.png"),alt:""}),c.a.createElement("div",{className:"forecast-item__temp"},n))},S=C(W,(new N).getForecastWeather),M=(a(46),a(24));function T(e){return new Promise((function(t){return setTimeout(t,e)}))}var R=a(28);var F=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"formatDate",value:function(e){return new Date(1e3*e).getHours()+"h"}},{key:"render",value:function(){var e=this,t=this.props,a=t.theme,n=t.data,r=0,i=0;return n.forEach((function(e){r=e.temp<r?e.temp:r,i=e.temp>i?e.temp:i})),c.a.createElement("div",{className:"hourly__container"},c.a.createElement(c.a.Fragment,null,c.a.createElement(R.a,{className:"hourly__scrollcontainer"},c.a.createElement("div",{className:"hourly__scroll"},n.map((function(t,n){var s,o,l=t.temp,m=t.date,u=t.rainChance,h=(l-(s=r))*(180-(o=100))/(i-s)+o,d=0===n?"Now":e.formatDate(m);return c.a.createElement(A,{key:m,temp:l,time:d,rainChance:u,height:h,theme:a})}))))))}}]),a}(r.Component),A=function(e){var t=e.temp,a=e.time,n=e.height,r=e.rainChance,i=e.theme,s={height:"".concat(n,"px")},o="";return 0!==Number(r)&&(o=c.a.createElement("div",{className:"hourly__rain"},c.a.createElement("img",{src:"https://openweathermap.org/img/wn/10d@2x.png",alt:""}),c.a.createElement("span",{className:"hourly__rain-percent"},"".concat(r,"%")))),c.a.createElement("div",{className:"hourly__element-container"},c.a.createElement("div",{className:"hourly__element ".concat(i),style:s},c.a.createElement("div",{className:"hourly__element-tempgroup"},c.a.createElement("div",{className:"hourly__temp"},t),o),c.a.createElement("div",{className:"hourly__time"},a)))},L=C(F,(new function e(){var t=this;Object(o.a)(this,e),this._apiBase="https://api.weatherapi.com/v1/",this._apiKey="3ad9b2d2abb245dbb8e205619202010",this.getResource=function(){var e=Object(y.a)(E.a.mark((function e(a,n){var r,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=M.get(n)){e.next=12;break}return e.next=4,fetch("".concat(t._apiBase).concat(a));case 4:if((c=e.sent).ok){e.next=7;break}throw new Error("Could not fetch ".concat(a,", received ").concat(c.status));case 7:return e.next=9,c.json();case 9:r=e.sent,t._incrementApiCallCount(),M.set(n,r,864e5);case 12:return e.next=14,T(500);case 14:return e.abrupt("return",r);case 15:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),this.getCurrentWeather=function(){var e=Object(y.a)(E.a.mark((function e(a){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("current.json?key=".concat(t._apiKey,"&q=").concat(a,"&days=5"),"current_weather_weatherapi");case 2:return n=e.sent,e.abrupt("return",t._transformCurrentWeather(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getForecastWeather=function(){var e=Object(y.a)(E.a.mark((function e(a){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("forecast.json?key=".concat(t._apiKey,"&q=").concat(a,"&days=5"),"forecast_weather_weatherapi");case 2:return n=e.sent,e.abrupt("return",t._transformForecastWeather(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getHourlyWeather=function(){var e=Object(y.a)(E.a.mark((function e(a){var n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.city,e.next=3,t.getResource("forecast.json?key=".concat(t._apiKey,"&q=").concat(n,"&days=3"),"hourly_weather_weatherapi_"+n);case 3:return r=e.sent,e.abrupt("return",t._transformHourlytWeather(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformCurrentWeather=function(e){var t=e.location.name,a=e.current,n=a.condition,r=n.code,c=n.icon,i=n.text,s=a.last_updated_epoch,o=a.temp_c;return{name:t,date:s,temp:Math.round(o),weatherType:r,weatherTypeDesc:i,weatherTypeIcon:c,high:Math.round(0),low:Math.round(0)}},this._transformForecastWeather=function(e){return e},this._transformHourlytWeather=function(e){var t=e.forecast.forecastday,a=e.current.last_updated_epoch,n=[];return t.forEach((function(e){e.hour.forEach((function(e){var t=e.time_epoch,r=e.time,c=e.temp_c,i=e.chance_of_rain;n.length>=24||t>a&&n.push({date:t,time:r,temp:Math.round(c),rainChance:i})}))})),n},this._incrementApiCallCount=function(){var e=M.get("api-call-count");e=void 0!==e?e:0,e+=1,M.set("api-call-count",e,864e5),console.warn("WARNING: API CALL, YOU ONLY HAVE 1'000'000 of these. Count ".concat(e,"."))}}).getHourlyWeather),H=(a(47),C(function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"degreesToDirection",value:function(e){var t="N";return["NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"].forEach((function(a,n){e>=11.25+22.5*n&&(t=a)})),t}},{key:"formatDate",value:function(e){var t=new Date(1e3*e);return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t.getDay()]+", "+("0"+t.getDate()).slice(-2)+"."+("0"+(t.getMonth()+1)).slice(-2)+"."+t.getFullYear()}},{key:"formatTime",value:function(e){var t=new Date(1e3*e);return t.getHours()+":"+("0"+t.getMinutes()).slice(-2)}},{key:"capitalizeFirstLetter",value:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},{key:"render",value:function(){var e=this.props.data,t=e.date,a=e.city,n=e.clouds,r=e.humidity,i=e.pressure,s=e.rain1h,o=e.sunrise,l=e.sunset,m=e.temp,u=e.feels_like,d=e.temp_max,p=e.temp_min,_=e.weatherDesc,f=e.weatherIcon,v=e.windDeg,E=e.windSpeed;return c.a.createElement("div",{className:"details__container"},c.a.createElement(h.b,{className:"details__button-back",to:"/"},c.a.createElement("i",{className:"fa fa-arrow-left"})),c.a.createElement("div",{className:"details__column"},c.a.createElement("div",{className:"details__city"},c.a.createElement("div",{className:"details__city-label"},"Last updated"),c.a.createElement("div",{className:"details__city-value"},"".concat(this.formatTime(t)," ").concat(this.formatDate(t))),c.a.createElement("div",{className:"details__city-label"},"Location"),c.a.createElement("div",{className:"details__city-value"},c.a.createElement(h.b,{to:"/cities",className:"details__city-link"},c.a.createElement("i",{className:"fa fa-map-marker"}),a))),c.a.createElement("div",{className:"details__main-container"},c.a.createElement("div",{className:"details__temp-group"},c.a.createElement("div",{className:"details__temp"},m),c.a.createElement("div",{className:"details__temp-details"},c.a.createElement("div",{className:"details__label-temp "},"Feels like"),c.a.createElement("div",{className:"details__value temp"},u),c.a.createElement("div",{className:"details__label-temp"},"Min"),c.a.createElement("div",{className:"details__value temp"},p),c.a.createElement("div",{className:"details__label-temp"},"Max"),c.a.createElement("div",{className:"details__value temp"},d))),c.a.createElement("div",{className:"details__weather-group"},c.a.createElement("img",{className:"details__weather-img",src:"https://openweathermap.org/img/wn/".concat(f,"@2x.png"),alt:""}),c.a.createElement("div",{className:"details__weather-label"},"".concat(this.capitalizeFirstLetter(_))))),c.a.createElement("div",{className:"bottom__columns"},c.a.createElement("div",{className:"bottom__left"},c.a.createElement("div",{className:"bottom__col"},c.a.createElement("div",{className:"details__label"},"Cloudness"),c.a.createElement("div",{className:"details__value"},"".concat(n," %")),c.a.createElement("div",{className:"details__label"},"Humidity"),c.a.createElement("div",{className:"details__value"},"".concat(r," %")),c.a.createElement("div",{className:"details__label"},"Pressure"),c.a.createElement("div",{className:"details__value"},"".concat(i," hPa")),null!==s?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"details__label"},"Amount of rain for the last hour"),c.a.createElement("div",{className:"details__value"},"".concat(s," mm"))):null,c.a.createElement("div",{className:"details__label"},"Wind Direction"),c.a.createElement("div",{className:"details__value"},"".concat(this.degreesToDirection(v))),c.a.createElement("div",{className:"details__label"},"Wind speed"),c.a.createElement("div",{className:"details__value"},"".concat(E," m/s")))),c.a.createElement("div",{className:"bottom__right"},c.a.createElement("div",{className:"bottom__col"},c.a.createElement("div",{className:"details__label"},"Sunrise time"),c.a.createElement("div",{className:"details__value"},this.formatTime(o)),c.a.createElement("div",{className:"details__label"},"Sunset time"),c.a.createElement("div",{className:"details__value"},this.formatTime(l)))))))}}]),a}(r.Component),(new N).getDetailWeather)),I=a(3),Y=function(e){return{type:"SELECT_CITY",city:e}},B=function(e){return{type:"SET_THEME",theme:e}},K=a(15),P=a(16),q=Object(P.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{city:"Moscow",theme:"warm"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_CITY":return e=Object(K.a)(Object(K.a)({},e),{},{city:t.city});case"SET_THEME":return e=Object(K.a)(Object(K.a)({},e),{},{theme:t.theme});default:return e}})),U=(a(49),q.dispatch),z=Object(P.a)(n,U).setTheme,G=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).update=function(){e.render()},e.shouldComponentUpdate=function(){console.log("or wont")},e.componentDidMount=function(){q.subscribe(e.update)},e}return Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement(j,null,c.a.createElement(h.a,{basename:"/weather-app"},c.a.createElement(I.a,{path:"/",exact:!0,render:function(){return c.a.createElement(J,null)}}),c.a.createElement(I.a,{path:"/city/:id",render:function(e){var t=e.match.params.id;return q.dispatch(Y(t)),c.a.createElement(J,null)}}),c.a.createElement(I.a,{path:"/cities",render:function(){return c.a.createElement(V,null)}}),c.a.createElement(I.a,{path:"/details",render:function(){return c.a.createElement(Q,null)}})))}}]),a}(r.Component),J=function(){var e=q.getState(),t=e.city,a=e.theme;return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"app__top-container ".concat(a)},c.a.createElement(D,{param:{city:t},setTheme:z}),c.a.createElement(L,{param:{city:t},theme:a})),c.a.createElement("div",{className:"app__bottom-container"},c.a.createElement(S,{param:{city:t}})))},V=function(){var e=q.getState(),t=(e.city,e.theme);return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"app__full-container ".concat(t)},c.a.createElement(_,null)))},Q=function(){var e=q.getState(),t=e.city,a=e.theme;return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"app__full-container--grad ".concat(a)},c.a.createElement(H,{param:{city:t}})))},X=G;a(50);s.a.render(c.a.createElement(X,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.7db11b0e.chunk.js.map