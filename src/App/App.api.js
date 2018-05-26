import * as CONST from "./App.constants";
import http from "../http";


export default {
    async fetchAllGuitarists () {
        try {
            const response = await http.fetch('/');
            return await response.json();
        } catch (error) {
            console.log("error retrieving user", error);
        }
    }
};
