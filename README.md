# Anvil React UI Components

Need to streamline signature gathering in your application? Use [Anvil Etch E-sign](https://www.useanvil.com/etch-free-e-signatures) and integrate these React lifecycle components when building your custom solution. Pick and choose the component that best suits your use case, integrate it into your code, and the components will take care of the rest.

## AnvilSignatureFrame
A very minimal component that handles the signing process lifecycle.

![image](https://user-images.githubusercontent.com/26425671/99320552-c2f78d00-2820-11eb-84c4-4b27029e06c8.png)


### Usage
```
yarn add @anvilco/react-signature-frame
```
```
npm install @anvilco/react-signature-frame
```

```js
import AnvilSignatureFrame from '@anvilco/react-signature-frame'
import '@anvilco/react-signature-frame/dist/styles.css'

<AnvilSignatureFrame
  signURL={signURL}
  scroll="smooth"
  onLoad={() => setLoading(true)}
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

#### scroll
##### string
* `auto` - scrolls the window to the signing frame when rendered
* `smooth` - smoothly scrolls the window to the signing frame when rendered

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


## AnvilSignatureModal
A modal component that handles the signing process lifecycle. Compatible with mobile viewports with minimal dependencies.

![image](https://user-images.githubusercontent.com/26425671/99320656-f76b4900-2820-11eb-85fe-b53eeaebc798.png)


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


## Styling

Styles are not embedded into the React component to support customization. The default styles are provided within the modules under `dist/styles.css`.

## Anvil Etch E-Sign Docs

[Read the Docs](https://www.useanvil.com/docs/api/e-signatures)


## Notes

* The `allowFormEmbed` config must be set to `true` under your [Anvil organization](https://useanvil.com) for embedded signing. Please reach us at [support@useanvil.com](mailto:hello@useanvil.com).
* React ^v16.8.0 is required.


## Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.


## Questions or Feedback

Please email us at [hello@useanvil.com](mailto:hello@useanvil.com).
