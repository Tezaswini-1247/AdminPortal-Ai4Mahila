import JSDOMEnvironment from 'jest-environment-jsdom';
export default class CustomJSDOMEnvironment extends JSDOMEnvironment {
    constructor(...args: ConstructorParameters<typeof JSDOMEnvironment>);
}
