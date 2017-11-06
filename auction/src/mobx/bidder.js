import { action, computed, observable } from 'mobx';

class bidderStore {
	@action getUser(user) {
		console.log(user);
	}
}

export default new bidderStore();