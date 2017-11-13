import { action, computed, observable } from 'mobx';

class bidderStore {
	@observable currentUser = null;

	@action getUser(user) {
		this.currentUser = user;
		console.log(this.currentUser);
		localStorage.setItem('user', this.currentUser);
	}
}

export default new bidderStore();