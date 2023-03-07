"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2165],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>s,MDXProvider:()=>c,mdx:()=>h,useMDXComponents:()=>d,withMDXComponents:()=>u});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){return function(n){var t=d(n.components);return r.createElement(e,i({},n,{components:t}))}},d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(t),c=a,f=u["".concat(o,".").concat(c)]||u[c]||m[c]||i;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.r(n),t.d(n,{default:()=>o});var r=t(67294),a=t(86010);const i="tabItem_Ymn6";function o(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.default)(i,o),hidden:t},n)}},74866:(e,n,t)=>{t.r(n),t.d(n,{default:()=>k});var r=t(83117),a=t(67294),i=t(86010),o=t(12466),l=t(76775),p=t(91980),s=t(67392),u=t(50012);function d(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function c(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:d(t);return function(e){var n=(0,s.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,i=(0,l.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:r});return[(0,p._X)(o),(0,a.useCallback)((function(e){if(o){var n=new URLSearchParams(i.location.search);n.set(o,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[o,i])]}function h(e){var n,t,r,i,o=e.defaultValue,l=e.queryString,p=void 0!==l&&l,s=e.groupId,d=c(e),h=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:d})})),g=h[0],b=h[1],v=f({queryString:p,groupId:s}),y=v[0],x=v[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),t=(0,u.Nk)(n),r=t[0],i=t[1],[r,(0,a.useCallback)((function(e){n&&i.set(e)}),[n,i])]),k=w[0],N=w[1],C=function(){var e=null!=y?y:k;return m({value:e,tabValues:d})?e:null}();return(0,a.useLayoutEffect)((function(){C&&b(C)}),[C]),{selectedValue:g,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);b(e),x(e),N(e)}),[x,N,d]),tabValues:d}}var g=t(72389);const b="tabList__CuJ",v="tabItem_LNqP";function y(e){var n=e.className,t=e.block,l=e.selectedValue,p=e.selectValue,s=e.tabValues,u=[],d=(0,o.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,t=u.indexOf(n),r=s[t].value;r!==l&&(d(n),p(r))},m=function(e){var n,t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=u.indexOf(e.currentTarget)+1;t=null!=(r=u[a])?r:u[0];break;case"ArrowLeft":var i,o=u.indexOf(e.currentTarget)-1;t=null!=(i=u[o])?i:u[u.length-1]}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.default)("tabs",{"tabs--block":t},n)},s.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:function(e){return u.push(e)},onKeyDown:m,onClick:c},o,{className:(0,i.default)("tabs__item",v,null==o?void 0:o.className,{"tabs__item--active":l===n})}),null!=t?t:n)})))}function x(e){var n=e.lazy,t=e.children,r=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var i=t.find((function(e){return e.props.value===r}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})})))}function w(e){var n=h(e);return a.createElement("div",{className:(0,i.default)("tabs-container",b)},a.createElement(y,(0,r.Z)({},e,n)),a.createElement(x,(0,r.Z)({},e,n)))}function k(e){var n=(0,g.default)();return a.createElement(w,(0,r.Z)({key:String(n)},e))}},26053:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>m,toc:()=>h});var r=t(83117),a=t(80102),i=(t(67294),t(3905)),o=t(44996),l=t(39960),p=t(74866),s=t(85162),u=["components"],d={id:"android-native",title:"Adding Flipper to Android apps with Gradle",sidebar_label:"Android with Gradle"},c=void 0,m={unversionedId:"getting-started/android-native",id:"getting-started/android-native",title:"Adding Flipper to Android apps with Gradle",description:"To set up Flipper for Android, you need to add the necessary dependencies to your app, initialize the Flipper client and enable the plugins you want to use.",source:"@site/../docs/getting-started/android-native.mdx",sourceDirName:"getting-started",slug:"/getting-started/android-native",permalink:"/docs/getting-started/android-native",draft:!1,editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/getting-started/android-native.mdx",tags:[],version:"current",frontMatter:{id:"android-native",title:"Adding Flipper to Android apps with Gradle",sidebar_label:"Android with Gradle"},sidebar:"main",previous:{title:"Desktop App",permalink:"/docs/getting-started/"},next:{title:"Generic iOS Apps",permalink:"/docs/getting-started/ios-native"}},f={},h=[{value:"Dependencies",id:"dependencies",level:2},{value:"Application setup",id:"application-setup",level:2},{value:"Diagnostics",id:"diagnostics",level:2},{value:"Android snapshots",id:"android-snapshots",level:2},{value:"Enabling plugins",id:"enabling-plugins",level:2},{value:"Issues or questions",id:"issues-or-questions",level:2}],g={toc:h};function b(e){var n=e.components,t=(0,a.Z)(e,u);return(0,i.mdx)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"To set up Flipper for Android, you need to add the necessary dependencies to your app, initialize the Flipper client and enable the plugins you want to use.\nOptionally, you can hook up the diagnostics Activity to help you troubleshoot connection issues."),(0,i.mdx)("h2",{id:"dependencies"},"Dependencies"),(0,i.mdx)("p",null,"Flipper is distributed via Maven Central: add the dependencies to your ",(0,i.mdx)("inlineCode",{parentName:"p"},"build.gradle")," file."),(0,i.mdx)("p",null,"You should also explicitly depend on ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebook/soloader"},"SoLoader")," instead of relying on transitive dependency resolution, which is getting deprecated\nwith Gradle 5."),(0,i.mdx)("p",null,"There is a 'no-op' implementation of some oft-used Flipper interfaces, which you can use to make it easier to strip Flipper from your release builds:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-groovy"},"repositories {\n  mavenCentral()\n}\n\ndependencies {\n  debugImplementation 'com.facebook.flipper:flipper:0.183.0'\n  debugImplementation 'com.facebook.soloader:soloader:0.10.5'\n\n  releaseImplementation 'com.facebook.flipper:flipper-noop:0.183.0'\n}\n")),(0,i.mdx)("admonition",{type:"warning"},(0,i.mdx)("p",{parentName:"admonition"},"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"flipper-noop")," package provides a limited subset of the APIs provided by the ",(0,i.mdx)("inlineCode",{parentName:"p"},"flipper")," package and does not provide any plugin stubs.\nIt's recommended that you keep all Flipper instantiation code in a separate build variant to ensure it doesn't accidentally make it into your production builds."),(0,i.mdx)("p",{parentName:"admonition"},"To see how to organise your Flipper initialization into debug and release variants, check this ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/tree/main/android/sample/src"},"sample app"),"."),(0,i.mdx)("p",{parentName:"admonition"},"Alternatively, have a look at the third-party ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/theGlenn/flipper-android-no-op"},"flipper-android-no-op")," repository, which provides empty implementations for several Flipper plugins.")),(0,i.mdx)("h2",{id:"application-setup"},"Application setup"),(0,i.mdx)("p",null,"Now you can initialize Flipper in your Application's ",(0,i.mdx)("inlineCode",{parentName:"p"},"onCreate")," method, which involves initializing SoLoader (for loading the C++ part of Flipper) and starting a ",(0,i.mdx)("inlineCode",{parentName:"p"},"FlipperClient"),"."),(0,i.mdx)(p.default,{mdxType:"Tabs"},(0,i.mdx)(s.default,{value:"kt",label:"Kotlin",mdxType:"TabItem"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin"},"import com.facebook.flipper.android.AndroidFlipperClient\nimport com.facebook.flipper.android.utils.FlipperUtils\nimport com.facebook.flipper.core.FlipperClient\nimport com.facebook.flipper.plugins.inspector.DescriptorMapping\nimport com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin\n\nclass MyApplication : Application {\n  override fun onCreate() {\n    super.onCreate()\n    SoLoader.init(this, false)\n\n    if (BuildConfig.DEBUG && FlipperUtils.shouldEnableFlipper(this)) {\n      val client = AndroidFlipperClient.getInstance(this)\n      client.addPlugin(InspectorFlipperPlugin(this, DescriptorMapping.withDefaults()))\n      client.start()\n    }\n  }\n}\n"))),(0,i.mdx)(s.default,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.android.AndroidFlipperClient;\nimport com.facebook.flipper.android.utils.FlipperUtils;\nimport com.facebook.flipper.core.FlipperClient;\nimport com.facebook.flipper.plugins.inspector.DescriptorMapping;\nimport com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin;\n\n\npublic class MyApplication extends Application {\n\n  @Override\n  public void onCreate() {\n    super.onCreate();\n    SoLoader.init(this, false);\n\n    if (BuildConfig.DEBUG && FlipperUtils.shouldEnableFlipper(this)) {\n      final FlipperClient client = AndroidFlipperClient.getInstance(this);\n      client.addPlugin(new InspectorFlipperPlugin(this, DescriptorMapping.withDefaults()));\n      client.start();\n    }\n  }\n}\n")))),(0,i.mdx)("h2",{id:"diagnostics"},"Diagnostics"),(0,i.mdx)("p",null,"It's recommended that you add the following activity to the manifest, which can help diagnose integration issues and other problems:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<activity android:name="com.facebook.flipper.android.diagnostics.FlipperDiagnosticActivity"\n        android:exported="true"/>\n')),(0,i.mdx)("h2",{id:"android-snapshots"},"Android snapshots"),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"Android snapshot releases are published directly off ",(0,i.mdx)("inlineCode",{parentName:"p"},"main"),".")),(0,i.mdx)("p",null,"You can get the latest version by adding the Maven Snapshot repository to your sources and pointing to the most recent ",(0,i.mdx)("inlineCode",{parentName:"p"},"-SNAPSHOT")," version."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-groovy"},"repositories {\n  maven { url 'https://oss.sonatype.org/content/repositories/snapshots/' }\n}\n\ndependencies {\n  debugImplementation 'com.facebook.flipper:flipper:0.183.1-SNAPSHOT'\n  debugImplementation 'com.facebook.soloader:soloader:0.10.5'\n\n  releaseImplementation 'com.facebook.flipper:flipper-noop:0.183.1-SNAPSHOT'\n}\n")),(0,i.mdx)("h2",{id:"enabling-plugins"},"Enabling plugins"),(0,i.mdx)("p",null,"Finally, you need to add plugins to your Flipper client."),(0,i.mdx)("p",null,"Above, the Layout Inspector plugin has been added to get you started. See the ",(0,i.mdx)(l.default,{to:(0,o.default)("/docs/setup/plugins/network"),mdxType:"Link"},"Network Plugin")," and ",(0,i.mdx)("a",{parentName:"p",href:"https://www.internalfb.com/intern/staticdocs/flipper/docs/features/plugins/inspector/"},"Layout Inspector Plugin")," pages for information on how to add them, and also enable Litho or ComponentKit support."),(0,i.mdx)("p",null,"For examples of integrating other plugins, take a look at the sample apps in the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper"},"GitHub repo"),"."),(0,i.mdx)("h2",{id:"issues-or-questions"},"Issues or questions"),(0,i.mdx)("p",null,"If you encounter any issues or have any questions, refer to the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/getting-started/troubleshooting/"},"Troubleshooting")," section."))}b.isMDXComponent=!0}}]);