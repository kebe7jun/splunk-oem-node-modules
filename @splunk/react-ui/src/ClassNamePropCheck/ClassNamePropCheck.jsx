/** Throws an error if the className prop is passed to a component. */
export default function ClassNamePropCheck(props, propName, componentName) {
    if (props[propName]) {
        return new Error(
            `${propName} is not supported. Please use inline styles to position ${componentName}. Visit http://splunkui.sv.splunk.com/Packages/react-ui/Overview on how to style components.`
        );
    }
}
