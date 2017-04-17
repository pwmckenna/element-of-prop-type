import { isValidElement } from 'react';
import PropTypeError from 'prop-type-error';
import isRequired from 'is-required-prop-type';

const elementPropType = element => (props, propName, componentName, location, propFullName, ...rest) => {
    const propDisplayName = propFullName || propName;
    const prop = props[propName];
    if (!isValidElement(prop)) {
        return new PropTypeError(`Invalid ${location} \`${propDisplayName}\` of type \`${typeof prop}\`, expected element of type \`${element.displayName}\``);
    }
    if (prop.type !== element) {
        return new PropTypeError(`Invalid ${location} \`${propDisplayName}\` element of type \`${prop.type}\`, expected element of type \`${element.displayName}\``);
    }
    return null;
};

export default element => {
    const propType = elementPropType(element);
    propType.isRequired = isRequired(propType);
    return propType;
};
