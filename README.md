# Anvil React UI Components

Need to streamline signature gathering in your application? Use [Anvil Etch E-sign](https://www.useanvil.com/etch-free-e-signatures) and integrate these React lifecycle components when building your custom solution. Pick and choose the component that best suits your use case, integrate it into your code, and the components will take care of the rest.

## AnvilSignatureFrame
A very minimal component that handles the signing process lifecycle.

![image](https://user-images.githubusercontent.com/26425671/101393358-d7590380-387b-11eb-827c-5041709a612a.png)


### Usage
```
yarn add @anvilco/react-signature-frame
```
```
npm install @anvilco/react-signature-frame
```

```js
import AnvilSignatureFrame from '@anvilco/react-signature-frame'

<AnvilSignatureFrame
  signURL={signURL}
  scroll="smooth"
  onLoad={() => setLoading(true)}
  onFinishSigning={(payload) => console.log(payload)}
/>
```

### Props

#### signURL
##### string (required)
A URL to the Anvil signature page generated from the `generateEtchSignURL` GraphQL mutation. The signature frame will be displaying the signing page through this URL.

Example:
```js
signURL={`https://app.useanvil.com/etch/8iJDbq8dkEmjrsNw7Dnb/sign?token=dsa...`}
```

#### scroll
##### string | null
* `auto` - scrolls the window to the signing frame when mounted
* `smooth` - smoothly scrolls the window to the signing frame when mounted
* `null` - disables scrolling

#### onLoad
##### function
This function is called when the signing page has finished loading.

Example:
```js
onLoad={() => setLoading(false)}
```

#### onFinishSigning
##### function
This function takes the `payload` as a parameter; called when a user has finished signing.

Example:
This is called by default if not defined otherwise.
```js
onFinishSigning={(payload) => console.log(payload)}

/*
{
  action: "signerComplete"
  documentGroupEid: "9fQnvfy51p7oKrEYajMh"
  documentGroupStatus: "partial"
  etchPacketEid: "J1phQTO6WQH6gZcMJAG5"
  nextSignerEid: "HRLhx4khticpfxsUFSpj"
  signerEid: "kJzR6mcIWKoZs6KOxV4w"
  signerStatus: "completed"
  weldDataEid: undefined
}
*/
```


#### enableDefaultStyles
##### boolean (default: true)
Set to false to disable the default inline styles of the component.


#### iframeWarningProps
##### object
Pass in custom props into the paragraph tag displayed if the user's browser does not support iframes.

Example:
```js
iframeWarningProps={{ className: 'warning-text' }}
```


#### Styling

Customize the component by disabling `enableDefaultStyles` and importing CSS or passing in inline styles. Override IDs or classNames by passing them in as props.


## AnvilSignatureModal
A modal component that handles the signing process lifecycle. Compatible with mobile viewports with minimal dependencies.

![image](https://user-images.githubusercontent.com/26425671/101393509-0f604680-387c-11eb-8e09-b889b0c21c7f.png)


### Usage
```
yarn add @anvilco/react-signature-modal
```
```
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
/>
```

### Props

#### signURL
##### string (required)
A URL to the Anvil signature page generated from the `generateEtchSignURL` GraphQL mutation. The signature frame will be displaying the signing page through this URL.

Example:
```js
signURL={`https://app.useanvil.com/etch/8iJDbq8dkEmjrsNw7Dnb/sign?token=dsa...`}
```

#### isOpen
##### boolean
The modal is displayed if `isOpen` is true.

#### onClose
##### function
This function is called when the X button is clicked on the top right corner.

Example:
```js
onClose={() => setIsOpen(false))}
```

#### onLoad
##### function
This function is called when the signing page has finished loading.

Example:
```js
onLoad={() => setLoading(false)}
```

#### onFinishSigning
##### function
This function takes the `payload` as a parameter; called when a user has finished signing.

Example:
This is called by default if not defined otherwise.
```js
onFinishSigning={(payload) => console.log(payload)}

/*
{
  action: "signerComplete"
  documentGroupEid: "9fQnvfy51p7oKrEYajMh"
  documentGroupStatus: "partial"
  etchPacketEid: "J1phQTO6WQH6gZcMJAG5"
  nextSignerEid: "HRLhx4khticpfxsUFSpj"
  signerEid: "kJzR6mcIWKoZs6KOxV4w"
  signerStatus: "completed"
  weldDataEid: undefined
}
*/
```


#### modalAppElement
#### string
Pass in a query selector identifying the root of your app. Used to hide other page content while the modal is open for
screenreaders and other accessibility purposes.

Default: `#root`


#### showIconClose
#### boolean
Show the close icon on the top right of the modal if true.


#### iframeWarningProps
##### object
Pass in custom props into the paragraph tag displayed if the user's browser does not support iframes.

Example:
```js
iframeWarningProps={{ className: 'warning-text' }}
```


#### anvilFrameProps
##### object
Pass in custom props into the iframe tag displayed within the modal.

Example:
```js
anvilFrameProps={{
  id: 'my-modal',
  style: { background: 'white' },
}}
```


#### iconCloseProps
##### object
Pass in custom props into the svg tag for the delete button displayed within the modal.

Example:
```js
iconCloseProps={{ className: 'red-delete-button' }}
```


#### Styling

Customize the component by importing your own CSS stylesheet. Override IDs or classNames by passing them in as props.


## Anvil Etch E-Sign Docs

[Read the Docs](https://www.useanvil.com/docs/api/e-signatures)


## Links 🔗
* [@anvilco/react-signature-frame](https://www.npmjs.com/package/@anvilco/react-signature-frame)
* [@anvilco/react-signature-modal](https://www.npmjs.com/package/@anvilco/react-signature-modal)
* [Get started with Anvil](https://www.useanvil.com/)


## Notes

* Please contact us at [support@useanvil.com](mailto:support@useanvil.com) to enable iframe embedded signing for production signature packets.
* React >= v16.0 required.


## Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.


## Questions or Feedback

Please email us at [hello@useanvil.com](mailto:hello@useanvil.com).
