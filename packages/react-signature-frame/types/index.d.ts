export default AnvilSignatureFrame;
export type Props = {
    signURL: string;
    scroll: string;
    anvilURL: string;
    enableDefaultStyles: boolean;
    iframeWarningProps: any;
    onLoad: React.ReactEventHandler;
    onError: Function;
    onFinishSigning: Function;
    /**
     * - Deprecated: Use onFinishSigning or onError instead.
     */
    onFinish: Function;
};
/**
 * @typedef Props
 * @prop {String} signURL
 * @prop {String} scroll
 * @prop {String} anvilURL
 * @prop {boolean} enableDefaultStyles
 * @prop {Object} iframeWarningProps
 * @prop {React.ReactEventHandler} onLoad
 * @prop {Function} onError
 * @prop {Function} onFinishSigning
 * @prop {Function} onFinish - Deprecated: Use onFinishSigning or onError instead.
 */
/**
 * @extends React.Component<Props>
 */
declare class AnvilSignatureFrame extends React.Component<Props, any, any> {
    constructor(props: any);
    iframeRef: React.RefObject<any>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    /**
     * @param {Object} options
     * @param {String} options.origin
     * @param {String} options.data
     */
    handleSignFinish: ({ origin, data }: {
        origin: string;
        data: string;
    }) => void;
    render(): JSX.Element;
}
declare namespace AnvilSignatureFrame {
    namespace defaultProps {
        function onFinish(): void;
        function onFinishSigning(): void;
        function onError(): void;
        const anvilURL: string;
        const enableDefaultStyles: boolean;
    }
    namespace propTypes {
        export const signURL: PropTypes.Requireable<string>;
        export const scroll: PropTypes.Requireable<string>;
        export const onLoad: PropTypes.Requireable<(...args: any[]) => any>;
        const onError_1: PropTypes.Validator<(...args: any[]) => any>;
        export { onError_1 as onError };
        const onFinishSigning_1: PropTypes.Validator<(...args: any[]) => any>;
        export { onFinishSigning_1 as onFinishSigning };
        const anvilURL_1: PropTypes.Requireable<string>;
        export { anvilURL_1 as anvilURL };
        const enableDefaultStyles_1: PropTypes.Requireable<boolean>;
        export { enableDefaultStyles_1 as enableDefaultStyles };
        const onFinish_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onFinish_1 as onFinish };
    }
}
import React from "react";
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map