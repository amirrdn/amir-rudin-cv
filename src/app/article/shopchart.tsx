"use client";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { translateText } from "@/lib/translateService";

const Shopchart: React.FC = () => {
    const [copied, setCopied] = useState('');
    const { locale } = useTheme();
    const [text1, setText1] = useState('Creating a shopping cart in a React.js application using TypeScript involves managing state, handling user interactions, and updating the cart dynamically. Below is an example of how you can implement a simple shopping cart:');
    const [text2, setText2] = useState('Step 1: Define Types');
    const [text3, setText3] = useState('Start by defining the types for your products and cart items.');
    const [text4, setText4] = useState('Step 2: Create the Shopping Cart Component');
    const [text5, setText5] = useState('Create a ShoppingCart component that manages the state of the cart.');
    const [text6, setText6] = useState('Step 3: Use the Shopping Cart Component');
    const [text7, setText7] = useState('Now, use the ShoppingCart component in your main application file and pass in some sample products.');
    const [text8, setText8] = useState('Step 4: Styling (Optional)');
    const [text9, setText9] = useState('You can add some basic styling using CSS or Tailwind CSS. Here\'s an example using plain CSS:');
    const [text10, setText10] = useState('Step 5: Integrate the Styling');
    const [text11, setText11] = useState('Import the CSS file into your project:');
    const [text12, setText12] = useState('Step 6: Running the Project');
    const [text13, setText13] = useState('Ensure that your Next.js project is set up correctly with TypeScript:');
    const [text14, setText14] = useState('Then, run your project:');

    const textTranslate = useMemo(() => async() => {
        await translateText(text1, locale).then((res) => {
            setText1(res);
        })
        await translateText(text2, locale).then((res) => {
            setText2(res);
        })
        await translateText(text3, locale).then((res) => {
            setText3(res);
        })
        await translateText(text4, locale).then((res) => {
            setText4(res);
        })
        await translateText(text5, locale).then((res) => {
            setText5(res);
        })
        await translateText(text6, locale).then((res) => {
            setText6(res);
        })
        await translateText(text7, locale).then((res) => {
            setText7(res);
        })
        await translateText(text8, locale).then((res) => {
            setText8(res);
        })
        await translateText(text9, locale).then((res) => {
            setText9(res);
        })
        await translateText(text10, locale).then((res) => {
            setText10(res);
        })
        await translateText(text11, locale).then((res) => {
            setText11(res);
        })
        await translateText(text12, locale).then((res) => {
            setText12(res);
        })
        await translateText(text13, locale).then((res) => {
            setText13(res);
        })
        await translateText(text14, locale).then((res) => {
            setText14(res);
        })
    }, [locale, text1, text10, text11, text12, text13, text14, text2, text3, text4, text5, text6, text7, text8, text9]);

    useEffect(() => {
        textTranslate();
    }, [textTranslate])

    const handleCopy = async (text: string, textcopied: string) => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(textcopied);
          setTimeout(() => setCopied(''), 2000); // Reset after 2 seconds
        } catch (err) {
          console.error('Failed to copy text:', err);
        }
    };
    const codeTypes = `// types.ts
<span class="text-blue-600">export interface</span> <span class="text-red-600">Product</span> {
  <span class="text-red-600">id</span>: <span class="text-orange-600">number</span>;
  <span class="text-red-600">name</span>: <span class="text-orange-600">string</span>;
  <span class="text-red-600">price</span>: <span class="text-orange-600">number</span>;
}
<span class="text-blue-600">export interface</span> <span class="text-red-600">CartItem</span> <span class="text-blue-600">extends</span> <span class="text-red-600">Product</span> {
  <span class="text-red-600">quantity</span>: <span class="text-orange-600">number</span>;
}`;
// 
    const componentShoppingcart = `<code class="!whitespace-pre hljs language-typescript"><span class="hljs-comment">// components/ShoppingCart.tsx</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span>, { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Product</span>, <span class="hljs-title class_">CartItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">'../types'</span>;

<span class="hljs-keyword">interface</span> <span class="hljs-title class_">ShoppingCartProps</span> {
  <span class="hljs-attr">products</span>: <span class="hljs-title class_">Product</span>[];
}

<span class="hljs-keyword">const</span> <span class="hljs-title class_">ShoppingCart</span>: <span class="hljs-title class_">React</span>.<span class="hljs-property">FC</span>&lt;<span class="hljs-title class_">ShoppingCartProps</span>&gt; = <span class="hljs-function">(<span class="hljs-params">{ products }</span>) =&gt;</span> {
  <span class="hljs-keyword">const</span> [cartItems, setCartItems] = useState&lt;<span class="hljs-title class_">CartItem</span>[]&gt;([]);

  <span class="hljs-keyword">const</span> <span class="hljs-title function_">addToCart</span> = (<span class="hljs-params">product: Product</span>) =&gt; {
    <span class="hljs-title function_">setCartItems</span>(<span class="hljs-function"><span class="hljs-params">prevItems</span> =&gt;</span> {
      <span class="hljs-keyword">const</span> itemExists = prevItems.<span class="hljs-title function_">find</span>(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> item.<span class="hljs-property">id</span> === product.<span class="hljs-property">id</span>);
      <span class="hljs-keyword">if</span> (itemExists) {
        <span class="hljs-keyword">return</span> prevItems.<span class="hljs-title function_">map</span>(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span>
          item.<span class="hljs-property">id</span> === product.<span class="hljs-property">id</span> ? { ...item, <span class="hljs-attr">quantity</span>: item.<span class="hljs-property">quantity</span> + <span class="hljs-number">1</span> } : item
        );
      }
      <span class="hljs-keyword">return</span> [...prevItems, { ...product, <span class="hljs-attr">quantity</span>: <span class="hljs-number">1</span> }];
    });
  };

  <span class="hljs-keyword">const</span> <span class="hljs-title function_">removeFromCart</span> = (<span class="hljs-params">productId: <span class="hljs-built_in">number</span></span>) =&gt; {
    <span class="hljs-title function_">setCartItems</span>(<span class="hljs-function"><span class="hljs-params">prevItems</span> =&gt;</span>
      prevItems
        .<span class="hljs-title function_">map</span>(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> (item.<span class="hljs-property">id</span> === productId ? { ...item, <span class="hljs-attr">quantity</span>: item.<span class="hljs-property">quantity</span> - <span class="hljs-number">1</span> } : item))
        .<span class="hljs-title function_">filter</span>(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> item.<span class="hljs-property">quantity</span> &gt; <span class="hljs-number">0</span>)
    );
  };

  <span class="hljs-keyword">const</span> <span class="hljs-title function_">getTotalPrice</span> = (<span class="hljs-params"></span>) =&gt; {
    <span class="hljs-keyword">return</span> cartItems.<span class="hljs-title function_">reduce</span>(<span class="hljs-function">(<span class="hljs-params">total, item</span>) =&gt;</span> total + item.<span class="hljs-property">price</span> * item.<span class="hljs-property">quantity</span>, <span class="hljs-number">0</span>);
  };

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Products<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>
        {products.map(product =&gt; (
          <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{product.id}</span>&gt;</span>
            {product.name} - \${product.price.toFixed(2)}
            <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> addToCart(product)}&gt;Add to Cart<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
        ))}
      <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>

      <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Shopping Cart<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
      {cartItems.length === 0 ? (
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Your cart is empty<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      ) : (
        <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>
          {cartItems.map(item =&gt; (
            <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{item.id}</span>&gt;</span>
              {item.name} - \${item.price.toFixed(2)} x {item.quantity}
              <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> removeFromCart(item.id)}&gt;Remove<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
          ))}
        <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
      )}

      <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Total: \${getTotalPrice().toFixed(2)}<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">ShoppingCart</span>;
</code>`;
    const pageIndex = `<code class="!whitespace-pre hljs language-typescript"><span class="hljs-comment">// pages/index.tsx</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span> <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">ShoppingCart</span> <span class="hljs-keyword">from</span> <span class="hljs-string">'../components/ShoppingCart'</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Product</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">'../types'</span>;

<span class="hljs-keyword">const</span> <span class="hljs-attr">products</span>: <span class="hljs-title class_">Product</span>[] = [
  { <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">'Apple'</span>, <span class="hljs-attr">price</span>: <span class="hljs-number">0.99</span> },
  { <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">'Banana'</span>, <span class="hljs-attr">price</span>: <span class="hljs-number">0.79</span> },
  { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">'Orange'</span>, <span class="hljs-attr">price</span>: <span class="hljs-number">0.89</span> },
];

<span class="hljs-keyword">const</span> <span class="hljs-title class_">Home</span>: <span class="hljs-title class_">React</span>.<span class="hljs-property">FC</span> = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Shopping Cart Example<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ShoppingCart</span> <span class="hljs-attr">products</span>=<span class="hljs-string">{products}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Home</span>;
</code>`;
  const styleCode = `<code class="!whitespace-pre hljs language-css"><span class="hljs-comment">/* styles.css */</span>
<span class="hljs-selector-tag">ul</span> {
  <span class="hljs-attribute">list-style-type</span>: none;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span>;
}

<span class="hljs-selector-tag">li</span> {
  <span class="hljs-attribute">margin</span>: <span class="hljs-number">10px</span> <span class="hljs-number">0</span>;
}

<span class="hljs-selector-tag">button</span> {
  <span class="hljs-attribute">margin-left</span>: <span class="hljs-number">10px</span>;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">5px</span> <span class="hljs-number">10px</span>;
  <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#007bff</span>;
  <span class="hljs-attribute">color</span>: white;
  <span class="hljs-attribute">border</span>: none;
  <span class="hljs-attribute">cursor</span>: pointer;
}

<span class="hljs-selector-tag">button</span><span class="hljs-selector-pseudo">:hover</span> {
  <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#0056b3</span>;
}
</code>`;
    const appTsxcode = `<code class="!whitespace-pre hljs language-typescript"><span class="hljs-comment">// pages/_app.tsx</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">'../styles.css'</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">AppProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">'next/app'</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">MyApp</span>(<span class="hljs-params">{ Component, pageProps }: AppProps</span>) {
  <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Component</span> {<span class="hljs-attr">...pageProps</span>} /&gt;</span></span>;
}
</code>`;
    const runCode = `<code class="!whitespace-pre hljs language-bash">npx create-next-app@latest my-shopping-cart --typescript
<span class="hljs-built_in">cd</span> my-shopping-cart
</code>`;
    const npmCode = `<code class="!whitespace-pre hljs language-bash">npm run dev
</code>`;

    return(<>
        <div className="relative flex w-full min-w-0 flex-col">
            <div className="flex max-w-full flex-col gap-3">
                <div className="flex flex-grow flex-col">
                    <div className="flex min-h-[20px] w-full flex-col items-start gap-4 overflow-x-auto">
                        <div className="flex w-full flex-col gap-2">
                            <div className="prose w-full break-words">
                                <p className="text-justify">{text1}</p>
                                <h3 className="mb-2 mt-4 text-xl font-bold">{text2}</h3>
                                <p className="mb-4">{text3}</p>
                                <div className="dark:bg-gray-950 rounded-md border border-gray-700">
                                    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-xs font-sans text-gray-400 rounded-t-md border-b border-gray-700">
                                        <span>typescript</span>
                                        <div className="flex items-center">
                                            <button className="flex items-center gap-1" onClick={() => handleCopy(codeTypes, 'one')}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-sm">
                                                    <path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path>
                                                </svg>
                                                {copied === 'one' ? "Copied!" : "Salin kode"}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="overflow-x-auto whitespace-pre p-4 text-gray-100">
                                        <code dangerouslySetInnerHTML={{ __html: codeTypes }}></code>
                                    </div>
                                </div>
                            </div>
                            <div className="prose w-full break-words">
                                <h3 className="mb-2 mt-4 text-xl font-bold">{text4}</h3>
                                <p className="mb-4">{text5}</p>
                                <div className="dark:bg-gray-950 rounded-md border border-gray-700">
                                    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-xs font-sans text-gray-400 rounded-t-md border-b border-gray-700">
                                        <span>typescript</span>
                                        <div className="flex items-center">
                                            <button className="flex items-center gap-1" onClick={() => handleCopy(componentShoppingcart, 'two')}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-sm">
                                                    <path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path>
                                                </svg>
                                                {copied === 'two' ? "Copied!" : "Salin kode"}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="overflow-x-auto whitespace-pre p-4 text-gray-100">
                                        <code dangerouslySetInnerHTML={{ __html: componentShoppingcart }}></code>
                                    </div>
                                </div>
                            </div>
                            <div className="prose w-full break-words">
                                <h3 className="mb-2 mt-4 text-xl font-bold">{text6}</h3>
                                <p className="mb-4">{text7}</p>
                                <div className="dark:bg-gray-950 rounded-md border border-gray-700">
                                    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-xs font-sans text-gray-400 rounded-t-md border-b border-gray-700">
                                        <span>typescript</span>
                                        <div className="flex items-center">
                                            <button className="flex items-center gap-1" onClick={() => handleCopy(pageIndex, '3')}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-sm">
                                                    <path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path>
                                                </svg>
                                                {copied === '3' ? "Copied!" : "Salin kode"}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="overflow-x-auto whitespace-pre p-4 text-gray-100">
                                        <code dangerouslySetInnerHTML={{ __html: pageIndex }}></code>
                                    </div>
                                </div>
                            </div>
                            <div className="prose w-full break-words">
                                <h3 className="mb-2 mt-4 text-xl font-bold">{text8}</h3>
                                <p className="mb-4">{text9}</p>
                                <div className="dark:bg-gray-950 rounded-md border border-gray-700">
                                    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-xs font-sans text-gray-400 rounded-t-md border-b border-gray-700">
                                        <span>typescript</span>
                                        <div className="flex items-center">
                                            <button className="flex items-center gap-1" onClick={() => handleCopy(styleCode, '4')}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-sm">
                                                    <path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path>
                                                </svg>
                                                {copied === '4' ? "Copied!" : "Salin kode"}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="overflow-x-auto whitespace-pre p-4 text-gray-100">
                                        <code dangerouslySetInnerHTML={{ __html: styleCode }}></code>
                                    </div>
                                </div>
                            </div>
                            <div className="prose w-full break-words">
                                <h3 className="mb-2 mt-4 text-xl font-bold">{text10}</h3>
                                <p className="mb-4">{text11}</p>
                                <div className="dark:bg-gray-950 rounded-md border border-gray-700">
                                    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-xs font-sans text-gray-400 rounded-t-md border-b border-gray-700">
                                        <span>typescript</span>
                                        <div className="flex items-center">
                                            <button className="flex items-center gap-1" onClick={() => handleCopy(appTsxcode, '5')}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-sm">
                                                    <path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path>
                                                </svg>
                                                {copied === '5' ? "Copied!" : "Salin kode"}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="overflow-x-auto whitespace-pre p-4 text-gray-100">
                                        <code dangerouslySetInnerHTML={{ __html: appTsxcode }}></code>
                                    </div>
                                </div>
                            </div>
                            <div className="prose w-full break-words">
                                <h3 className="mb-2 mt-4 text-xl font-bold">{text12}</h3>
                                <p className="mb-4">{text13}</p>
                                <div className="dark:bg-gray-950 rounded-md border border-gray-700">
                                    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-xs font-sans text-gray-400 rounded-t-md border-b border-gray-700">
                                        <span>typescript</span>
                                        <div className="flex items-center">
                                            <button className="flex items-center gap-1" onClick={() => handleCopy(runCode, '6')}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-sm">
                                                    <path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path>
                                                </svg>
                                                {copied === '6' ? "Copied!" : "Salin kode"}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="overflow-x-auto whitespace-pre p-4 text-gray-100">
                                        <code dangerouslySetInnerHTML={{ __html: runCode }}></code>
                                    </div>
                                </div>
                            </div>
                            <div className="prose w-full break-words">
                                <p className="mb-4">{text14}</p>
                                <div className="dark:bg-gray-950 rounded-md border border-gray-700">
                                    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-xs font-sans text-gray-400 rounded-t-md border-b border-gray-700">
                                        <span>bash</span>
                                        <div className="flex items-center">
                                            <button className="flex items-center gap-1" onClick={() => handleCopy(npmCode, '7')}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-sm">
                                                    <path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path>
                                                </svg>
                                                {copied === '7' ? "Copied!" : "Salin kode"}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="overflow-x-auto whitespace-pre p-4 text-gray-100">
                                        <code dangerouslySetInnerHTML={{ __html: npmCode }}></code>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Shopchart;