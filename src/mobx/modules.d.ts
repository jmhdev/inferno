declare module 'inferno-component' {
	class Component<P, C> {
		props?: P;
		context?: C;
		constructor (props?: P, context?: C);
		componentWillReceiveProps? (nextProps: P, nextContext: C): void;
		shouldComponentUpdate? (nextProps: P, nextContext: C): boolean;
		forceUpdate (): void;
		isPrototypeOf (v: Object): boolean;
	}
	export default Component;
}

declare module 'inferno-dom' {
	export function findDOMNode(node: any): any
}

declare module 'inferno-create-element' {
	function createElement(component: any, props: any, children?: any): any
	export = createElement;
}

declare module 'mobx' {
	export function isObservable(value: any, property?: string): boolean;
	export class Reaction {
		constructor(name?: string, onInvalidate?: any)
		track(param: any): void
	}
	export const extras: any;
}
