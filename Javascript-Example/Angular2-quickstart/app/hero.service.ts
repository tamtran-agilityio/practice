import { Injectable} from 'Angular2/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';

@Injectable();

export class HeroesService {
	getHeroes() {
		return Promise.resolve(HEROES);
	}
	getHeroesSlowly() {
		return new Promise<Hero[]>(resolve =>
			setTimeout(()=>resolve(HEROES), 2000)
		);
	}
}
