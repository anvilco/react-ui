![Horizontal Lockupblack](https://user-images.githubusercontent.com/293079/169453889-ae211c6c-7634-4ccd-8ca9-8970c2621b6f.png#gh-light-mode-only)
![Horizontal Lockup copywhite](https://user-images.githubusercontent.com/293079/169453892-895f637b-4633-4a14-b997-960c9e17579b.png#gh-dark-mode-only)

# Anvil React UI Components

This repo contains multiple React components used to embed [Anvil E-signatures](https://www.useanvil.com/docs/api/e-signatures), [Workflows](https://www.useanvil.com/docs/api/workflows#embedding-workflows-in-your-app), and editors into your app or website. Pick and choose the component that best suits your use case, integrate it into your code, and the components will take care of the rest.

The following components will embed the Anvil product in an `iframe` within your app or website. To enable, go to your organization's settings in Anvil, and enable "Iframe Embedding" in the API section. Test `EtchPackets` [created with `isTest: true`](https://www.useanvil.com/docs/api/e-signatures#testing-your-packet-configuration)and `Workflow submissions` are embeddable without contacting us.

* [AnvilEmbedFrame](#AnvilEmbedFrame) - an `iframe` component with a simple `onEvent` callback for embedding Etch e-sign, Workflows, or editors.
* [AnvilSignatureModal](#AnvilSignatureModal) - a modal popup window component with lifecycle callbacks for embedding Anvil e-signatures.

See the [live demo](https://esign-demo.useanvil.com/) and open-source [demo repository](https://github.com/anvilco/anvil-e-signature-api-node-example) for a usage example of `AnvilEmbedFrame` and `AnvilSignatureModal`.

## What is Anvil?

[Anvil](https://www.useanvil.com/developers) provides easy APIs for all things paperwork.

1. [PDF filling API](https://www.useanvil.com/products/pdf-filling-api/) - fill out a PDF template with a web request and structured JSON data.
2. [PDF generation API](https://www.useanvil.com/products/pdf-generation-api/) - send markdown or HTML and Anvil will render it to a PDF.
3. [Etch E-sign with API](https://www.useanvil.com/products/etch/) - customizable, embeddable, e-signature platform with an API to control the signing process end-to-end.
4. [Anvil Workflows (w/ API)](https://www.useanvil.com/products/workflows/) - Webforms + PDF + E-sign with a powerful no-code builder. Easily collect structured data, generate PDFs, and request signatures.

Learn more on our [Anvil developer page](https://www.useanvil.com/developers).

## AnvilEmbedFrame

A very minimal component that allows you to embed Anvil into your app with an `iframe`. It will give you information via the `onEvent` callback.

### Usage

See the [AnvilEmbedFrame README](./packages/anvil-embed-frame/README.md) for full details.

```sh
yarn add @anvilco/anvil-embed-frame
```

```sh
npm install @anvilco/anvil-embed-frame
```

```js
import AnvilEmbedFrame from '@anvilco/anvil-embed-frame'

<AnvilEmbedFrame
  iframeURL={etchSignURL || workflowURL || editorURL}
  onEvent={(event) => console.log('Event object:', event)}
  className="anvil-embed-frame"
/>
```


## AnvilSignatureModal

A minimal modal component that allows you to embed Anvil e-signatures via a modal popup in your app. It will give you information via callbacks through the signing process lifecycle. Compatible with mobile viewports with minimal dependencies.

![image](https://user-images.githubusercontent.com/26425671/101393509-0f604680-387c-11eb-8e09-b889b0c21c7f.png)

### Usage

See the [AnvilSignatureModal README](./packages/react-signature-modal/README.md) for full details.

```sh
yarn add @anvilco/react-signature-modal
```
```sh
npm install @anvilco/react-signature-modal
```

```js
import AnvilSignatureModal from '@anvilco/react-signature-modal'
import '@anvilco/react-signature-modal/dist/styles.css'

<AnvilSignatureModal
  signURL={signURL}
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  onLoad={() => setLoading(false)}
  onEvent={(eventObject) => console.log(eventObject)}
/>
```

## Links 🔗

* [@anvilco/anvil-embed-frame](https://www.npmjs.com/package/@anvilco/anvil-embed-frame)
* [@anvilco/react-signature-modal](https://www.npmjs.com/package/@anvilco/react-signature-modal)
* [Getting started with Anvil API](https://www.useanvil.com/docs/api/getting-started)
* [Anvil e-signature API docs](https://www.useanvil.com/docs/api/e-signatures)


## Notes

* Please contact us at [support@useanvil.com](mailto:support@useanvil.com) to enable iframe embedding for editors.
* React >= v16.0 required.

## Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

## Questions or Feedback

Please email us at [support@useanvil.com](mailto:support@useanvil.com).

## License

MIT
