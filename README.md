# Anvil React UI Components

Need to streamline signature gathering in your application? Use [Anvil Etch E-sign](https://www.useanvil.com/docs/api/e-signatures) and integrate these React components to embed our e-signature UI into your app or website. Pick and choose the component that best suits your use case, integrate it into your code, and the components will take care of the rest.

The following components will embed the Anvil signing process in an `iframe` within your app or website. To enable, go to your organization's settings in Anvil, and enable "Iframe Embedding" in the API section. `EtchPackets` [created with `isTest: true`](https://www.useanvil.com/docs/api/e-signatures#testing-your-packet-configuration) are embeddable without contacting us.

* [AnvilSignatureFrame](#AnvilSignatureFrame) - an `iframe` component with lifecycle callbacks for embedding Anvil e-signatures.
* [AnvilSignatureModal](#AnvilSignatureModal) - a modal popup window component with lifecycle callbacks for embedding Anvil e-signatures.

See the [live demo](https://esign-demo.useanvil.com/) and open-source [demo repository](https://github.com/anvilco/anvil-e-signature-api-node-example) for a usage example of both components.

## AnvilSignatureFrame

A very minimal component that allows you to embed Anvil e-signatures in your app with an `iframe`. It will give you information via callbacks through the signing process lifecycle.

![image](https://user-images.githubusercontent.com/26425671/101393358-d7590380-387b-11eb-827c-5041709a612a.png)

### Usage

See the [AnvilSignatureFrame README](./packages/react-signature-frame/README.md) for full details.

```sh
yarn add @anvilco/react-signature-frame
```

```sh
npm install @anvilco/react-signature-frame
```

```js
import AnvilSignatureFrame from '@anvilco/react-signature-frame'

<AnvilSignatureFrame
  signURL={signURL}
  scroll="smooth"
  onLoad={() => setLoading(true)}
  onFinishSigning={(payload) => console.log(payload)}
  onError={(errorPayload) => console.log(errorPayload)}
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
import AnvilSignatureFrame from '@anvilco/react-signature-modal'
import '@anvilco/react-signature-modal/dist/styles.css'

<AnvilSignatureModal
  signURL={signURL}
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  onLoad={() => setLoading(false)}
  onFinishSigning={(payload) => console.log(payload)}
  onError={(errorPayload) => console.log(errorPayload)}
/>
```

## Links 🔗

* [@anvilco/react-signature-frame](https://www.npmjs.com/package/@anvilco/react-signature-frame)
* [@anvilco/react-signature-modal](https://www.npmjs.com/package/@anvilco/react-signature-modal)
* [Getting started with Anvil API](https://www.useanvil.com/docs/api/getting-started)
* [Anvil e-signature API docs](https://www.useanvil.com/docs/api/e-signatures)


## Notes

* Please contact us at [support@useanvil.com](mailto:support@useanvil.com) to enable iframe embedded signing for production signature packets.
* React >= v16.0 required.

## Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

## Questions or Feedback

Please email us at [support@useanvil.com](mailto:support@useanvil.com).

## License

MIT
