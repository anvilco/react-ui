# AnvilSignatureFrame
A minimal component that handles the [Anvil Etch](https://www.useanvil.com/etch-free-e-signatures) signing lifecycle.

![image](https://user-images.githubusercontent.com/26425671/99321187-1d451d80-2822-11eb-821f-da21dddc136e.png)

## Usage
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


#### docsProps
##### object
Pass in custom props into the paragraph tag displayed if the user's browser does not support iframes.

Example:
```js
docsProps={{ className: 'warning-text' }}
```


## Styling

Customize the component by overriding the default styles. Pass in props to override IDs and classNames.


## Anvil Etch E-Sign Docs

[Read the Docs](https://www.useanvil.com/docs/api/e-signatures)


## Links 🔗
* [@anvilco/react-signature-frame](https://www.npmjs.com/package/@anvilco/react-signature-frame)
* [Get started with Anvil](https://www.useanvil.com/)


## Notes

* The `allowFormEmbed` config must be set to `true` under your [Anvil organization](https://useanvil.com) for embedded signing. Please reach us at [support@useanvil.com](mailto:hello@useanvil.com).


## Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.


## Questions or Feedback

Please email us at [hello@useanvil.com](mailto:hello@useanvil.com).
