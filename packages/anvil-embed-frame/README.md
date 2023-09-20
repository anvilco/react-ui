# AnvilEmbedFrame

`AnvilEmbedFrame` is a very minimal React component that allows you to embed Anvil [Etch e-signatures](https://www.useanvil.com/docs/api/e-signatures#embedding-the-signing-ui-in-an-iframe), [Workflows](https://www.useanvil.com/docs/api/workflows#embedding-workflows-in-your-app), and [embedded builders](https://www.useanvil.com/blog/engineering/embedded-edit-pdf-experience/) into your app with an `iframe`. It will give you information via callback `onEvent`.

See the Etch e-sign [live demo](https://esign-demo.useanvil.com/) and open-source [demo repository](https://github.com/anvilco/anvil-e-signature-api-node-example) for an embedded Etch e-sign usage example using this component.

## What is Anvil?

[Anvil](https://www.useanvil.com/developers) provides easy APIs for all things paperwork.

1. [PDF filling API](https://www.useanvil.com/products/pdf-filling-api/) - fill out a PDF template with a web request and structured JSON data.
2. [PDF generation API](https://www.useanvil.com/products/pdf-generation-api/) - send markdown or HTML and Anvil will render it to a PDF.
3. [Etch E-sign with API](https://www.useanvil.com/products/etch/) - customizable, embeddable, e-signature platform with an API to control the signing process end-to-end.
4. [Anvil Workflows (w/ API)](https://www.useanvil.com/products/workflows/) - Webforms + PDF + E-sign with a powerful no-code builder. Easily collect structured data, generate PDFs, and request signatures.

Learn more on our [Anvil developer page](https://www.useanvil.com/developers).

## Usage

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
  onEvent={(eventObject) => console.log('Event object:', eventObject)}
  className="anvil-embed-frame"
  style={{ border: 'none' }}
/>
```

## Upgrading from v1 to v2

Beginning in v2.0, the `enableDefaultStyles` prop has been removed. There are now _no_ default styles embedded in the `AnvilEmbedFrame`, the frame will use default browser `iframe` styling. You can style the iframe with CSS and add `className` and `style` props to the component

## Props

### iframeURL

*String (required)* - A URL to the Anvil page you'd like to embed.
For Etch e-sign, [refer to these docs](https://www.useanvil.com/docs/api/e-signatures#embedding-the-signing-ui-in-an-iframe) for instructions on generating the signing URL.
For Workflows, [refer to these docs](https://www.useanvil.com/docs/api/workflows#embedding-workflows-in-your-app) for instructions on retrieving the Workflow URL.

Example
```js
// Etch e-signatures
<AnvilEmbedFrame
  iframeURL="https://app.useanvil.com/api/etch/verify/QL3RjmpXWBD4W6YCHSLr?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWduZXJJZCI6MTg3LCJjbGllbnRVc2VySWQiOiJzaWduZXIxIiwiY3JlYXRlZEF0IjoxNjY0NTY4NTkyNTk0LCJleHRyYSI6IkNVQlIiLCJpYXQiOjE2NjQ1Njg1OTIsImV4cCI6MTY2NDY1NDk5Mn0.RMpoBXdAU5k6ozX3y2xoI8ykqx2BXycIKNX7Kq0EFFs"
/>

// For Workflows
<AnvilEmbedFrame
  iframeURL="https://app.useanvil.com/weld/my-org/my-workflow"
/>
```

### onEvent

*Function* - This function is called when an event is triggered.
Possible event types for [Etch e-sign include](https://www.useanvil.com/docs/api/e-signatures/#iframe-event-details): `signerComplete`, `signerError`.
Possible event types for [Workflows include](https://www.useanvil.com/docs/api/workflows/#iframe-event-details): `forgeSubmitPage`, `forgeComplete`, `weldComplete`.

Defaults to `(eventObject) => {}`

### scroll

*String* - Set scroll to the iframe

* `auto` - scrolls the window to the iframe when mounted
* `smooth` smoothly scrolls the window to the iframe when mounted
* `null` - disables scrolling

## Anvil Documentation

* [Get started with Anvil API](https://www.useanvil.com/docs/api/getting-started)
* [Etch E-sign API](https://www.useanvil.com/docs/api/e-signatures)
* [Workflows API](https://www.useanvil.com/docs/api/workflows)

## Notes

* To enable iframe embedding, go to your organization's settings in Anvil, and enable "Iframe Embedding" in the API section.
* Please contact us at [support@useanvil.com](mailto:support@useanvil.com) to enable iframe embedding for our [embedded builders UIs](https://www.useanvil.com/blog/engineering/embedded-edit-pdf-experience/): the PDF template builder, e-sign packet builder, or Workflow builder.
* React >= v16.0 required.

## Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

## Questions or Feedback

Please email us at [support@useanvil.com](mailto:support@useanvil.com).

## License

MIT
