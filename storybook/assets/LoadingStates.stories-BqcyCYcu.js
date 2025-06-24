import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as K}from"./iframe-D9VFSULi.js";import{c as h,a as i,C as J,b as Q,d as U,H as X,e as Y,P as Z,f as ee,B as S,g as se,L as t,h as f,i as ae}from"./button-loading-CX9SEGOQ.js";/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],oe=h("refresh-cw",re);/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],ne=h("server",te);/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],b=h("triangle-alert",ie);/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],le=h("wifi",de),ce={network:{icon:le,title:"Sem conexão com a internet",description:"Verifique sua conexão e tente novamente.",iconColor:"text-orange-500"},server:{icon:ne,title:"Erro no servidor",description:"Nossos servidores estão temporariamente indisponíveis.",iconColor:"text-red-500"},notFound:{icon:b,title:"Página não encontrada",description:"A página que você procura não existe ou foi movida.",iconColor:"text-yellow-500"},generic:{icon:b,title:"Algo deu errado",description:"Ocorreu um erro inesperado. Tente novamente.",iconColor:"text-red-500"}};function n({type:s="generic",title:r,description:o,showRetry:x=!0,showHome:G=!0,onRetry:W,onHome:$,className:O}){const d=ce[s],D=d.icon;return e.jsx("div",{className:i("flex items-center justify-center p-4",O),children:e.jsxs(J,{className:"w-full max-w-md text-center",children:[e.jsxs(Q,{children:[e.jsx("div",{className:"mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted",children:e.jsx(D,{className:i("h-8 w-8",d.iconColor)})}),e.jsx(U,{children:e.jsx(X,{children:r||d.title})}),e.jsx(Y,{children:e.jsx(Z,{className:"text-muted-foreground",children:o||d.description})})]}),e.jsx(ee,{className:"space-y-3",children:e.jsxs("div",{className:"flex flex-col sm:flex-row gap-2",children:[x&&e.jsxs(S,{onClick:W,variant:"outline",className:"flex-1 gap-2",children:[e.jsx(oe,{className:"h-4 w-4"}),"Tentar novamente"]}),G&&e.jsxs(S,{onClick:$,className:"flex-1 gap-2",children:[e.jsx(se,{className:"h-4 w-4"}),"Página inicial"]})]})})]})})}function y({onRetry:s,onHome:r}){return e.jsx(n,{type:"network",onRetry:s,onHome:r})}function N({onRetry:s,onHome:r}){return e.jsx(n,{type:"server",onRetry:s,onHome:r})}function _({onHome:s}){return e.jsx(n,{type:"notFound",showRetry:!1,onHome:s})}try{n.displayName="ErrorState",n.__docgenInfo={description:"",displayName:"ErrorState",props:{type:{defaultValue:{value:"generic"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"network"'},{value:'"server"'},{value:'"notFound"'},{value:'"generic"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},showRetry:{defaultValue:{value:"true"},description:"",name:"showRetry",required:!1,type:{name:"boolean"}},showHome:{defaultValue:{value:"true"},description:"",name:"showHome",required:!1,type:{name:"boolean"}},onRetry:{defaultValue:null,description:"",name:"onRetry",required:!1,type:{name:"() => void"}},onHome:{defaultValue:null,description:"",name:"onHome",required:!1,type:{name:"() => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{y.displayName="NetworkError",y.__docgenInfo={description:"",displayName:"NetworkError",props:{onRetry:{defaultValue:null,description:"",name:"onRetry",required:!1,type:{name:"() => void"}},onHome:{defaultValue:null,description:"",name:"onHome",required:!1,type:{name:"() => void"}}}}}catch{}try{N.displayName="ServerError",N.__docgenInfo={description:"",displayName:"ServerError",props:{onRetry:{defaultValue:null,description:"",name:"onRetry",required:!1,type:{name:"() => void"}},onHome:{defaultValue:null,description:"",name:"onHome",required:!1,type:{name:"() => void"}}}}}catch{}try{_.displayName="NotFoundError",_.__docgenInfo={description:"",displayName:"NotFoundError",props:{onHome:{defaultValue:null,description:"",name:"onHome",required:!1,type:{name:"() => void"}}}}}catch{}function a({className:s,...r}){return e.jsx("div",{className:i("animate-pulse rounded-md bg-primary/10",s),...r})}try{a.displayName="Skeleton",a.__docgenInfo={description:"",displayName:"Skeleton",props:{}}}catch{}function A(){return e.jsxs("div",{className:"border rounded-lg p-6 space-y-4",children:[e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx(a,{className:"h-4 w-20"})," ",e.jsx(a,{className:"h-6 w-full"})," ",e.jsx(a,{className:"h-6 w-3/4"})," ",e.jsx(a,{className:"h-4 w-full"})," ",e.jsx(a,{className:"h-4 w-2/3"})," "]}),e.jsx(a,{className:"h-24 w-24 rounded-md"})," "]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{className:"h-4 w-16"})," ",e.jsx(a,{className:"h-4 w-12"})," ",e.jsx(a,{className:"h-4 w-16"})," "]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{className:"h-8 w-8 rounded"})," ",e.jsx(a,{className:"h-8 w-8 rounded"})," "]})]})]})}function v({count:s=3}){return e.jsx("div",{className:"space-y-6",children:Array.from({length:s}).map((r,o)=>e.jsx(A,{},o))})}function l(){return e.jsx("div",{className:"border rounded-lg p-6",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{className:"h-4 w-20"})," ",e.jsx(a,{className:"h-8 w-12"})," ",e.jsx(a,{className:"h-3 w-16"})," "]}),e.jsx(a,{className:"h-8 w-8 rounded-lg"})," "]})})}function me(){return e.jsxs("div",{className:"space-y-4 w-full max-w-md",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{className:"h-4 w-16"})," ",e.jsx(a,{className:"h-10 w-full"})," "]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{className:"h-4 w-20"})," ",e.jsx(a,{className:"h-10 w-full"})," "]}),e.jsx(a,{className:"h-10 w-full"})," "]})}function j({text:s="Carregando...",className:r}){return e.jsxs("div",{className:i("flex flex-col items-center justify-center py-12 gap-4",r),children:[e.jsx(t,{size:"lg"}),e.jsx("p",{className:"text-muted-foreground",children:s})]})}function w({title:s="Nenhum item encontrado",description:r="Não há itens para exibir no momento.",className:o}){return e.jsxs("div",{className:i("flex flex-col items-center justify-center py-12 text-center",o),children:[e.jsx("div",{className:"w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4",children:e.jsx("div",{className:"w-8 h-8 bg-muted-foreground/20 rounded-full"})}),e.jsx("h3",{className:"text-lg font-semibold text-foreground mb-2",children:s}),e.jsx("p",{className:"text-muted-foreground max-w-sm",children:r})]})}try{v.displayName="NewsListSkeleton",v.__docgenInfo={description:"",displayName:"NewsListSkeleton",props:{count:{defaultValue:{value:"3"},description:"",name:"count",required:!1,type:{name:"number"}}}}}catch{}try{j.displayName="LoadingState",j.__docgenInfo={description:"",displayName:"LoadingState",props:{text:{defaultValue:{value:"Carregando..."},description:"",name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{w.displayName="EmptyState",w.__docgenInfo={description:"",displayName:"EmptyState",props:{title:{defaultValue:{value:"Nenhum item encontrado"},description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:{value:"Não há itens para exibir no momento."},description:"",name:"description",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const he={title:"Loading & Error States",parameters:{layout:"centered",docs:{description:{component:"Comprehensive loading states and error handling components for the Kwanza Agent"}}},tags:["autodocs"]},c={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-8",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"font-semibold",children:"Spinner Sizes"}),e.jsx(t,{size:"sm",text:"Small"}),e.jsx(t,{size:"md",text:"Medium"}),e.jsx(t,{size:"lg",text:"Large"}),e.jsx(t,{size:"xl"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"font-semibold",children:"With Text"}),e.jsx(t,{size:"md",text:"Carregando dados..."}),e.jsx(t,{size:"lg",text:"Processando..."})]})]}),parameters:{docs:{description:{story:"Loading spinners in different sizes with optional text."}}}},m={render:()=>e.jsxs("div",{className:"space-y-8 max-w-4xl",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold mb-4",children:"News Card Skeleton"}),e.jsx(A,{})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold mb-4",children:"Stats Cards"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[e.jsx(l,{}),e.jsx(l,{}),e.jsx(l,{}),e.jsx(l,{})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold mb-4",children:"Form Skeleton"}),e.jsx(me,{})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold mb-4",children:"News List"}),e.jsx(v,{count:2})]})]}),parameters:{docs:{description:{story:"Skeleton loaders for different content types while data is loading."}}}},p={render:()=>e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold mb-4",children:"Network Error"}),e.jsx(y,{onRetry:()=>console.log("Retry network"),onHome:()=>console.log("Go home")})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold mb-4",children:"Server Error"}),e.jsx(N,{onRetry:()=>console.log("Retry server"),onHome:()=>console.log("Go home")})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold mb-4",children:"Custom Error"}),e.jsx(n,{type:"generic",title:"Erro personalizado",description:"Esta é uma mensagem de erro customizada.",onRetry:()=>console.log("Custom retry"),onHome:()=>console.log("Go home")})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold mb-4",children:"Empty State"}),e.jsx(w,{title:"Nenhuma notícia encontrada",description:"Não há notícias disponíveis no momento."})]})]}),parameters:{docs:{description:{story:"Various error states and empty states for different scenarios."}}}},u={render:()=>{const[s,r]=K.useState(!1),o=async()=>{r(!0),await new Promise(x=>setTimeout(x,2e3)),r(!1)};return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"font-semibold",children:"Button with Loading State"}),e.jsx(f,{loading:s,loadingText:"Processando...",onClick:o,children:"Clique para testar"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-8",children:[e.jsx(f,{loading:!0,loadingText:"Carregando...",children:"Always Loading"}),e.jsx(f,{loading:!1,children:"Normal Button"})]})]})},parameters:{docs:{description:{story:"Button component with integrated loading state and spinner."}}}},g={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold mb-4",children:"Loading Screen"}),e.jsx("div",{className:"border rounded-lg p-4 bg-background",children:e.jsx(ae,{text:"Carregando aplicação..."})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold mb-4",children:"Loading State"}),e.jsx("div",{className:"border rounded-lg p-4 bg-background",children:e.jsx(j,{text:"Buscando dados..."})})]})]}),parameters:{docs:{description:{story:"Full-page loading states for initial loading or major operations."}}}};var k,L,C;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-8">
      <div className="space-y-4">
        <h3 className="font-semibold">Spinner Sizes</h3>
        <LoadingSpinner size="sm" text="Small" />
        <LoadingSpinner size="md" text="Medium" />
        <LoadingSpinner size="lg" text="Large" />
        <LoadingSpinner size="xl" />
      </div>
      <div className="space-y-4">
        <h3 className="font-semibold">With Text</h3>
        <LoadingSpinner size="md" text="Carregando dados..." />
        <LoadingSpinner size="lg" text="Processando..." />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Loading spinners in different sizes with optional text.'
      }
    }
  }
}`,...(C=(L=c.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var E,q,z;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="space-y-8 max-w-4xl">
      <div>
        <h3 className="font-semibold mb-4">News Card Skeleton</h3>
        <NewsCardSkeleton />
      </div>
      
      <div>
        <h3 className="font-semibold mb-4">Stats Cards</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatsCardSkeleton />
          <StatsCardSkeleton />
          <StatsCardSkeleton />
          <StatsCardSkeleton />
        </div>
      </div>
      
      <div>
        <h3 className="font-semibold mb-4">Form Skeleton</h3>
        <FormSkeleton />
      </div>
      
      <div>
        <h3 className="font-semibold mb-4">News List</h3>
        <NewsListSkeleton count={2} />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Skeleton loaders for different content types while data is loading.'
      }
    }
  }
}`,...(z=(q=m.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var V,H,R;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl">
      <div>
        <h3 className="font-semibold mb-4">Network Error</h3>
        <NetworkError onRetry={() => console.log('Retry network')} onHome={() => console.log('Go home')} />
      </div>
      
      <div>
        <h3 className="font-semibold mb-4">Server Error</h3>
        <ServerError onRetry={() => console.log('Retry server')} onHome={() => console.log('Go home')} />
      </div>
      
      <div>
        <h3 className="font-semibold mb-4">Custom Error</h3>
        <ErrorState type="generic" title="Erro personalizado" description="Esta é uma mensagem de erro customizada." onRetry={() => console.log('Custom retry')} onHome={() => console.log('Go home')} />
      </div>
      
      <div>
        <h3 className="font-semibold mb-4">Empty State</h3>
        <EmptyState title="Nenhuma notícia encontrada" description="Não há notícias disponíveis no momento." />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Various error states and empty states for different scenarios.'
      }
    }
  }
}`,...(R=(H=p.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var B,F,I;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [loading, setLoading] = useState(false);
    const handleClick = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };
    return <div className="space-y-4">
        <h3 className="font-semibold">Button with Loading State</h3>
        <ButtonLoading loading={loading} loadingText="Processando..." onClick={handleClick}>
          Clique para testar
        </ButtonLoading>
        
        <div className="grid grid-cols-2 gap-4 mt-8">
          <ButtonLoading loading={true} loadingText="Carregando...">
            Always Loading
          </ButtonLoading>
          <ButtonLoading loading={false}>
            Normal Button
          </ButtonLoading>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Button component with integrated loading state and spinner.'
      }
    }
  }
}`,...(I=(F=u.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var M,T,P;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h3 className="font-semibold mb-4">Loading Screen</h3>
        <div className="border rounded-lg p-4 bg-background">
          <LoadingScreen text="Carregando aplicação..." />
        </div>
      </div>
      
      <div>
        <h3 className="font-semibold mb-4">Loading State</h3>
        <div className="border rounded-lg p-4 bg-background">
          <LoadingState text="Buscando dados..." />
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Full-page loading states for initial loading or major operations.'
      }
    }
  }
}`,...(P=(T=g.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};const xe=["LoadingSpinners","SkeletonLoaders","ErrorStates","InteractiveButton","FullPageStates"];export{p as ErrorStates,g as FullPageStates,u as InteractiveButton,c as LoadingSpinners,m as SkeletonLoaders,xe as __namedExportsOrder,he as default};
