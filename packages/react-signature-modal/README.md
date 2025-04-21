# AnvilSignatureModal

A lightweight modal component that allows embedding [Anvil Etch e-signatures](https://www.useanvil.com/docs/api/e-signatures) via a modal popup in your app. It will give you information via callbacks through the signing process lifecycle. Compatible with mobile viewports with minimal dependencies.

See the [live demo](https://esign-demo.useanvil.com/) and open-source [demo repository](https://github.com/anvilco/anvil-e-signature-api-node-example) for a usage example.

![image](https://user-images.githubusercontent.com/26425671/101393509-0f604680-387c-11eb-8e09-b889b0c21c7f.png)

## What is Anvil?

[Anvil](https://www.useanvil.com/developers) provides easy APIs for all things paperwork.

1. [PDF filling API](https://www.useanvil.com/products/pdf-filling-api/) - fill out a PDF template with a web request and structured JSON data.
2. [PDF generation API](https://www.useanvil.com/products/pdf-generation-api/) - send markdown or HTML and Anvil will render it to a PDF.
3. [Etch E-sign with API](https://www.useanvil.com/products/etch/) - customizable, embeddable, e-signature platform with an API to control the signing process end-to-end.
4. [Anvil Workflows (w/ API)](https://www.useanvil.com/products/workflows/) - Webforms + PDF + E-sign with a powerful no-code builder. Easily collect structured data, generate PDFs, and request signatures.

Learn more on our [Anvil developer page](https://www.useanvil.com/developers).

## Usage

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
  iframeURL={iframeURL}
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  onLoad={() => setLoading(false)}
  onEvent={(eventObject) => {
    console.log(eventObject)

    // See https://www.useanvil.com/docs/api/e-signatures/#iframe-event-details
    // for all event details.
    //
    // Example:
    //
    // {
    //   action: 'signerComplete',
    //   signerStatus: 'completed',
    //   signerEid: 'Jc1ZJisPnpF5lHyfyqBW',
    //   nextSignerEid: 'WBqyfyHl5FpnPsiJZ1cJ',
    //   documentGroupStatus: 'partial',
    //   documentGroupEid: 'nEKq2eGim0ijSqKd98nG',
    //   etchPacketEid: 'XzfmVPfGUEyBc1XyylFo',
    // }
  }}
/>
```

## Upgrading from v1 to v2

As of v2.0, the `AnvilSignatureModal` now uses `AnvilEmbedFrame` under the hood. The props have changed slightly:

* `signURL` -> `iframeURL`
* `onFinishSigning` -> `onEvent`. Check the `eventObject.action === 'signerComplete'` to detect a signer has finished signing
* `onError` -> `onEvent`. Check the `eventObject.error` to determine if there is an error

```js
// v1.x
<AnvilSignatureModal
  // Changed props, see below
  signURL={signURL}
  onFinishSigning={(eventObject) => console.log(eventObject)}
  onError={(eventObject) => console.log(eventObject)}

  // Unchanged!
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  onLoad={() => setLoading(false)}
/>

// v2.x
<AnvilSignatureModal
  // New
  iframeURL={iframeURL}
  onEvent={(eventObject) => {
    console.log(eventObject)
    if (eventObject.action === 'signerComplete') {
      // Signer has finished signing
    } else if (eventObject.error) {
      // There has been an error
    }
  }}

  // Unchanged!
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  onLoad={() => setLoading(false)}
/>
```

## Props

### id
*string* - html id attribute, overriding the `id` will also remove all default styling for the `react-siganture-modal`. If you just want to override specific styling elements use the `anvilFrameProps` below.

### iframeURL

*string (required)* - A URL to the Anvil signature page generated from the [`generateEtchSignURL` GraphQL mutation](https://www.useanvil.com/docs/api/e-signatures#controlling-the-signature-process-with-embedded-signers). The signature frame will be displaying the signing page through this URL.

Example:
```js
iframeURL={`https://app.useanvil.com/etch/8iJDbq8dkEmjrsNw7Dnb/sign?token=dsa...`}
```

### isOpen

*boolean* - The modal is displayed if `isOpen` is true.

### onClose

*function* - This function is called when the X button is clicked on the top right corner.

Example:
```js
onClose={() => setIsOpen(false))}
```

### onEvent

*function* - A callback function with `payload` as a parameter. It is called when a user has successfully finished signing.

Example:

```js
onEvent={(eventObject) => console.log(eventObject)}

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

See [our e-sign docs](https://www.useanvil.com/docs/api/e-signatures/#iframe-event-details) for full details on all iframe events.

`onEvent` is also called when a user experiences an error while attempting to sign. See the docs for details on [how to recover from errors](https://www.useanvil.com/docs/api/e-signatures#handling-signing-errors).

Example error payload:

```js
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
```

### onLoad

*function* - This function is called when the signing page has finished loading.

Example:
```js
onLoad={() => setLoading(false)}
```

### modalAppElement

*string* - Pass in a query selector identifying the root of your app. Used to hide other page content while the modal is open for
screenreaders and other accessibility purposes.

Default: `#root`


### showIconClose

*boolean* -Show the close icon on the top right of the modal if true.


### iframeWarningProps

*object* - Pass in custom props into the paragraph tag displayed if the user's browser does not support iframes.

Example:
```js
iframeWarningProps={{ className: 'warning-text' }}
```


### anvilFrameProps

*object* - Pass in custom props into the iframe tag displayed within the modal.

Example:
```js
anvilFrameProps={{
  style: { background: 'white' },
}}
```


### iconCloseProps

*object* - Pass in custom props into the svg tag for the delete button displayed within the modal.

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

* To enable Iframe embedding: go to your organization's settings in Anvil, and enable "Iframe Embedding" in the API section.
* React >= v16.0 required.


## Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.


## Questions or Feedback

Please email us at [support@useanvil.com](mailto:support@useanvil.com).
