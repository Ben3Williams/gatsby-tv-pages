(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(166),s=a(163);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(s.a,{title:"Home"}),r.a.createElement("h1",null,"I am the home page"))}},160:function(e,t,a){var n;e.exports=(n=a(162))&&n.default||n},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Upgrade your BT TV"}}}}},162:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(56),c=a(2),d=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},163:function(e,t,a){"use strict";var n=a(164),r=a(0),i=a.n(r),s=a(4),o=a.n(s),c=a(167),d=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,o=e.title,c=n.data.site,u=t||c.siteMetadata.description;return i.a.createElement(d.a,{htmlAttributes:{lang:a},script:[{src:"https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.0/jquery.min.js",type:"text/javascript"}],onChangeClientState:function(e,t){return a=t.scriptTags,n=/jquery/,void(a&&a.forEach(function(e){n.test(e.src)&&(e.onload=function(){var e=document.createElement("script"),t=document.createElement("script");e.src="https://img01.bt.co.uk/s/assets/js/dantenewgh.api-1.0.js",e.onload=function(){window.DanteNewGH.init({siteArea:"presales"})},t.src="https://img01.bt.co.uk/s/assets/js/dantegf.api-1.0.js",t.onload=function(){window.DanteGF.init({})},document.body.appendChild(e),document.body.appendChild(t)})}));var a,n},title:o,titleTemplate:""+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:o},{name:"twitter:description",content:u}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Upgrade your BT TV",description:"See our great value Broadband packages, exclusive to new customers to BT"}}}}},166:function(e,t,a){"use strict";var n=a(161),r=a(0),i=a.n(r),s=a(4),o=a.n(s),c=(a(33),a(160),i.a.createContext({})),d=function(e){return i.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func};a(143);var u=function(e){var t=e.children;return i.a.createElement(d,{query:"755544856",render:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("nav",{id:"bt-navbar",className:"bt-navbar"}),t,i.a.createElement("footer",{id:"bt-footer",className:"bt-footer"}),i.a.createElement("script",{src:"https://img01.bt.co.uk/s/assets/js/dantenewgh.api-1.0.js"}),i.a.createElement("script",{src:"https://img01.bt.co.uk/s/assets/js/dantegf.api-1.0.js"}))},data:n})};u.propTypes={children:o.a.node.isRequired};t.a=u}}]);
//# sourceMappingURL=component---src-pages-index-js-d452df1d999870b20f60.js.map