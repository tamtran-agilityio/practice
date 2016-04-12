export class Recipe {
	constructor(
		public name: string,
		public title: string,
		public hightlight: boolean,
		public excerpt: string,
		public source: string,
		public cookTime: string,
		public ingredients: string,
		public directions: string
		) {
	}
}