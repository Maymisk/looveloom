declare module '*.hbs' {
	const template: (variables: { [string: any]: any }) => string;
	export default template;
}
