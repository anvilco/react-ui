export default AnvilSignatureFrame;
declare class AnvilSignatureFrame extends React.Component<any, any, any> {
    constructor(props: any);
    iframeRef: React.RefObject<any>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleSignFinish: ({ origin, data }: {
        origin: any;
        data: any;
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