# Anvil React UI Components

Integrate these React lifecycle components into your Etch e-signature workflow. Pick and choose the component that best suits your use case, integrate it into your codebase, and the components will take care of the rest.

## AnvilSignatureFrame

```js
<AnvilSignatureFrame
  signURL={signURL}
  scroll="smooth"
  onLoad={() => setLoading(true)}
  onFinish={(redirectURL) => window.location.assign(redirectURL)}
  width={800}
  height={1000}
/>
```

## AnvilSignatureModal

```js
<AnvilSignatureModal
  signURL={signURL}
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  onLoad={() => setLoading(false)}
  onFinish={(redirectURL) => window.location.assign(redirectURL)}
  width={800}
  height={1000}
/>
```