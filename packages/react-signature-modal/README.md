# AnvilSignatureModal
A lightweight modal component that handles the [Anvil Etch](https://www.useanvil.com/etch-free-e-signatures) signing lifecycle. Compatible with mobile viewports with minimal dependencies.

![image](https://user-images.githubusercontent.com/26425671/99321463-b83df780-2822-11eb-8967-1ccf459b4c53.png)

## Usage
```
yarn add @anvilco/react-signature-modal
```
```
npm install @anvilco/react-signature-modal
```

```js
import AnvilSignatureFrame from '@anvilco/react-signature-modal'

<AnvilSignatureModal
  signURL={signURL}
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  onLoad={() => setLoading(false)}
  onFinish={(redirectURL) => window.location.assign(redirectURL)}
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

#### onFinish
##### function
This function takes the `redirectURL` as a parameter; called when a user has finished signing.

Example:
This is called by default if not defined otherwise.
```js
onFinish={(redirectURL) => window.location.assign(redirectURL)}
```


#### modalAppElement
#### string
Pass in a query selector identifying the root of your app. Used to hide other page content while the modal is open for
screenreaders and other accessibility purposes.

Default: `#root`


#### showDeleteIcon
#### boolean
Show the close icon on the top right of the modal if true.


#### docsProps
##### object
Pass in custom props into the paragraph tag displayed if the user's browser does not support iframes.

Example:
```js
docsProps={{ className: 'warning-text' }}
```


#### AnvilFrameProps
##### object
Pass in custom props into the iframe tag displayed within the modal.

Example:
```js
AnvilFrameProps={{
  id: 'my-modal',
  style: { background: 'white' },
}}
```


#### deleteIconProps
##### object
Pass in custom props into the svg tag for the delete button displayed within the modal.

Example:
```js
AnvilFrameProps={{ className: 'custom-delete-class' }}
```


## Styling

Customize the component by overriding the default styles. Pass in props to override IDs and classNames.


## Anvil Etch E-Sign Docs

[Read the Docs](https://www.useanvil.com/docs/api/e-signatures)


## Links 🔗
* [@anvilco/react-signature-modal](https://www.npmjs.com/package/@anvilco/react-signature-modal)
* [Get started with Anvil](https://www.useanvil.com/)


## Notes

* The `allowFormEmbed` config must be set to `true` under your [Anvil organization](https://useanvil.com) for embedded signing. Please reach us at [support@useanvil.com](mailto:hello@useanvil.com).
* React ^v16.8.0 is required.


## Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.


## Questions or Feedback

Please email us at [hello@useanvil.com](mailto:hello@useanvil.com).
