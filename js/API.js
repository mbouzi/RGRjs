import {get} from "jquery";


let API = {
	fetchLinks() {
		console.log("api");
		get("/data/links").done(resp => {
			console.log(resp);
		});
	}
}

export default  API;