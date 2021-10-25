# AnvilSignatureModal

A lightweight modal component that allows embedding [Anvil Etch](https://www.useanvil.com/docs/api/e-signatures) e-signatures via a modal popup in your app. It will give you information via callbacks through the signing process lifecycle. Compatible with mobile viewports with minimal dependencies.

See the [live demo](https://esign-demo.useanvil.com/) and open-source [repository](https://github.com/anvilco/anvil-e-signature-api-node-example) for a usage example.

![image](https://user-images.githubusercontent.com/26425671/101393509-0f604680-387c-11eb-8e09-b889b0c21c7f.png)

## Usage

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

## Props

### signURL

**string (required)** - A URL to the Anvil signature page generated from the `generateEtchSignURL` GraphQL mutation. The signature frame will be displaying the signing page through this URL.

Example:
```js
signURL={`https://app.useanvil.com/etch/8iJDbq8dkEmjrsNw7Dnb/sign?token=dsa...`}
```

### isOpen

**boolean** - The modal is displayed if `isOpen` is true.

### onClose

**function** - This function is called when the X button is clicked on the top right corner.

Example:
```js
onClose={() => setIsOpen(false))}
```

### onLoad

**function** - This function is called when the signing page has finished loading.

Example:
```js
onLoad={() => setLoading(false)}
```

### onFinishSigning

**function** - A callback function with `payload` as a parameter. It is called when a user has successfully finished signing.

Example:
```js
onFinishSigning={(payload) => console.log(payload)}

/*
{
  action: "signerComplete",
  signerEid: "kJzR6mcIWKoZs6KOxV4w",
  signerStatus: "completed",
  nextSignerEid: "HRLhx4khticpfxsUFSpj",
  documentGroupEid: "9fQnvfy51p7oKrEYajMh",
  documentGroupStatus: "partial",
  etchPacketEid: "J1phQTO6WQH6gZcMJAG5", // If from an EtchPacket
  weldDataEid: "J1phQTO6WQH6gZcMJAG5", // If from a workflow
}
*/
```

### onError

**function** - A callback function with an error-specific `payload` as a parameter. It is called when a user experienced an error while attempting to sign. See the docs for details on [how to recover from errors](https://www.useanvil.com/docs/api/e-signatures#handling-signing-errors).

Example:
```js
onError={(payload) => console.log(payload)}

/*
{
  action: "signerError",
  errorType: "tokenExpired", tokenExpired || tokenInvalid || notFound
  error: "Token Expired",
  message: "Error specific message",
  signerEid: "kJzR6mcIWKoZs6KOxV4w",

  // depending on the errorType, you may or may not receive the following
  signerStatus: "sent",
  nextSignerEid: "HRLhx4khticpfxsUFSpj",
  documentGroupEid: "9fQnvfy51p7oKrEYajMh",
  documentGroupStatus: "sent",
  etchPacketEid: "J1phQTO6WQH6gZcMJAG5", // If from an EtchPacket
  weldDataEid: "J1phQTO6WQH6gZcMJAG5", // If from a workflow
}
*/
```

### onFinish (deprecated)


**function** - This function will have `redirectURL` as a parameter; called when a user has finished signing or experienced and error. Please use `onFinishSigning` and `onError` above.

Example:
```js
onFinish={(redirectURL) => console.log(redirectURL)}
```


### modalAppElement

**string** - Pass in a query selector identifying the root of your app. Used to hide other page content while the modal is open for
screenreaders and other accessibility purposes.

Default: `#root`


### showIconClose

**boolean** -Show the close icon on the top right of the modal if true.


### iframeWarningProps

**object** - Pass in custom props into the paragraph tag displayed if the user's browser does not support iframes.

Example:
```js
iframeWarningProps={{ className: 'warning-text' }}
```


### anvilFrameProps

**object** - Pass in custom props into the iframe tag displayed within the modal.

Example:
```js
anvilFrameProps={{
  id: 'my-modal',
  style: { background: 'white' },
}}
```


### iconCloseProps

**object** - Pass in custom props into the svg tag for the delete button displayed within the modal.

Example:
```js
iconCloseProps={{ className: 'red-delete-button' }}
```


## Styling

Customize the component by importing your own CSS stylesheet. Override IDs or classNames by passing them in as props.


## Anvil Etch E-Sign Docs

[Read the Docs](https://www.useanvil.com/docs/api/e-signatures)


## Links 🔗

* [@anvilco/react-signature-modal](https://www.npmjs.com/package/@anvilco/react-signature-modal)
* [Getting started with Anvil API](https://www.useanvil.com/docs/api/getting-started)


## Notes

* Please contact us at [support@useanvil.com](mailto:support@useanvil.com) to enable iframe embedded signing for production signature packets.
* React >= v16.0 required.


## Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.


## Questions or Feedback

Please email us at [support@useanvil.com](mailto:support@useanvil.com).
