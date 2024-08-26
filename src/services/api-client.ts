import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "b1077d947c7941609092108dddb0ef7f",
	},
});
