# AnvilSignatureModal
A lightweight modal component that handles the [Anvil Etch](https://www.useanvil.com/etch-free-e-signatures) signing lifecycle. Compatible with mobile viewports with minimal dependencies.

![image](https://user-images.githubusercontent.com/26425671/101393509-0f604680-387c-11eb-8e09-b889b0c21c7f.png)

## Usage
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
This function takes the `redirectURL` as a parameter; called when a user has finished signing.

Example:
This is called by default if not defined otherwise.
```js
onFinishSigning={(payload) => console.log(payload)}
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
* [@anvilco/react-signature-modal](https://www.npmjs.com/package/@anvilco/react-signature-modal)
* [Get started with Anvil](https://www.useanvil.com/)


## Notes

* Please contact us at [support@useanvil.com](mailto:support@useanvil.com) to enable iframe embedded signing for production signature packets.
* React >= v16.0 required.


## Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.


## Questions or Feedback

Please email us at [hello@useanvil.com](mailto:hello@useanvil.com).
